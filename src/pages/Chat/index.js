import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {Firebase} from '../../config';
import {getData, jenfonts, showError, Warna} from '../../utils';
import {getChatTime, setDateChat} from '../../utils/dates';

const Chat = ({navigation, route}) => {
  const dataDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);
  useEffect(() => {
    getDataUserFromLocal();
    const chatId = `${user.uid}_${dataDoctor.data.uid}`;
    const urlFirebase = `chatting/${chatId}/allChat/`;
    Firebase.database()
      .ref(urlFirebase)
      .on('value', snapchat => {
        console.log('data chat', snapchat.val());
        if (snapchat.val()) {
          const dataSnapshot = snapchat.val();
          const allDataChat = [];

          Object.keys(dataSnapshot).map(key => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];
            Object.keys(dataChat).map(item => {
              newDataChat.push({
                id: item,
                data: dataChat[item],
              });
            });

            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          console.log('hasil parsing', allDataChat);
          setChatData(allDataChat);
        }
      });
  }, [user.uid, dataDoctor.data.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  const sendChat = () => {
    const today = new Date();
    // kirim ke firebase
    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };
    const tanggalNow = setDateChat(today);
    const chatId = `${user.uid}_${dataDoctor.data.uid}`;
    const urlFirebase = `chatting/${chatId}/allChat/${tanggalNow}`;
    const urlMessages = `messages/${user.uid}/${chatId}}`;
    const urlMessagesDoctor = `messages/${dataDoctor.data.uid}/${chatId}}`;
    const dataHistoryChatForUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidParnet: dataDoctor.data.uid,
    };

    const dataHistoryChatForDoctor = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidParnet: user.uid,
    };

    Firebase.database()
      .ref(urlFirebase)
      .push(data)
      .then(res => {
        setChatContent('');
        // set history for user
        Firebase.database().ref(urlMessages).set(dataHistoryChatForUser);
        // set history for doctor
        Firebase.database()
          .ref(urlMessagesDoctor)
          .set(dataHistoryChatForDoctor);
      })
      .catch(err => {
        showError(err.message);
      });
  };
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title={dataDoctor.data.fullname}
        pic={{uri: dataDoctor.data.photo.uri}}
        job={dataDoctor.data.category}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {chatData.map(chat => {
            return (
              <View key={chat.id}>
                <Text style={styles.dateTime}>{chat.id}</Text>
                {chat.data.map(item => {
                  const isMe = item.data.sendBy === user.uid ? true : false;
                  return (
                    <ChatItem
                      key={item.id}
                      isMe={isMe}
                      content={item.data.chatContent}
                      date={item.data.chatTime}
                      photo={isMe ? null : {uri: dataDoctor.data.photo.uri}}
                    />
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={value => setChatContent(value)}
        onButtonPress={sendChat}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  dateTime: {
    fontSize: 11,
    fontFamily: jenfonts.primary.normal,
    color: Warna.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
  page: {
    backgroundColor: Warna.white,
    flex: 1,
  },
  content: {flex: 1},
});
