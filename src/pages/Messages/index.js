import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DumPhoto, DumUser} from '../../assets';
import {List} from '../../components/molecul';
import {jenfonts, Warna} from '../../utils';

const Messages = ({navigation}) => {
  const [doctors] = useState([
    {
      id: 1,
      profile: DumPhoto,
      name: 'Vandy Ahmad',
      msg: 'Terimakasih banyak ...',
    },
    {
      id: 2,
      profile: DumUser,
      name: 'Ahmad',
      msg: 'Halo banyak ...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map(doctor => {
          return (
            <List
              key={doctor.id}
              pic={doctor.profile}
              name={doctor.name}
              msg={doctor.msg}
              onPress={() => navigation.navigate('Chat')}
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
