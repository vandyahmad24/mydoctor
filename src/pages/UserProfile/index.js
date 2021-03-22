import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Jarak, List, Profile} from '../../components';
import {Warna} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Jarak height={10} />
      <Profile name="Vandy" desc="Dokter Ganteng" />
      <Jarak height={14} />
      <List
        name="Edit Profile"
        msg="Last Update Yesterday"
        type="next"
        icon="user"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <List
        name="Language"
        msg="Available 12 languages"
        type="next"
        icon="bahasa"
      />
      <List
        name="Give Our Rate"
        msg="On Google Play Store"
        icon="bintang"
        type="next"
      />
      <List
        name="Help Center"
        msg="Read our guidelines"
        type="next"
        icon="help"
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: Warna.white},
});
