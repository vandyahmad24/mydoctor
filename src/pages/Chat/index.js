import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {jenfonts, Warna} from '../../utils';

const Chat = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title="Nama Dokter"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.dateTime}>21 Maret, 2021</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe />
      </View>
      <InputChat />
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
