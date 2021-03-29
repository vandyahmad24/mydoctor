import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DumPhoto, DumUser} from '../../assets';
import {List} from '../../components/molecul';
import {Firebase} from '../../config';
import {getData, jenfonts, Warna} from '../../utils';

const Messages = ({navigation}) => {
  const [user, setUser] = useState({});
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    const urlHistory = `messages/${user.uid}/`;
    Firebase.database()
      .ref(urlHistory)
      .on('value', async snapchat => {
        // console.log('data history', snapchat.val());
        if (snapchat.val()) {
          const oldData = snapchat.val();
          const data = [];
          const promises = await Object.keys(oldData).map(async key => {
            console.log('tes', oldData[key].uidParnet);
            const urlUidDoctor = `doctors/${oldData[key].uidParnet}`;
            const detailDoctor = await Firebase.database()
              .ref()
              .child(urlUidDoctor)
              .once('value');
            console.log('detail dokter', detailDoctor.val());
            data.push({
              id: key,
              detailDoctor: detailDoctor.val(),
              ...oldData[key],
            });
          });
          await Promise.all(promises);

          console.log('new data history', data);
          setHistory(data);
        }
      });
  }, [user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {history.map(doctor => {
          const dataDoter = {
            id: doctor.detailDoctor.uid,
            data: doctor.detailDoctor,
          };
          return (
            <List
              key={doctor.id}
              pic={{uri: doctor.detailDoctor.photo.uri}}
              name={doctor.detailDoctor.fullname}
              msg={doctor.lastContentChat}
              onPress={() => navigation.navigate('Chat', dataDoter)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Warna.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: Warna.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: jenfonts.primary[600],
    color: Warna.text.primary,
    marginTop: 20,
  },
});
