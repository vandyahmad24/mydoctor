import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {Header, Jarak, List, Profile} from '../../components';
import {getData, Warna} from '../../utils';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullname: '',
    photo: '',
    job: ILNullPhoto,
  });
  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      res.photo = {uri: res.photo};
      console.log(data);
      setProfile(data);
    });
  }, []);
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Jarak height={10} />
      {profile.fullname.length > 0 && (
        <Profile
          name={profile.fullname}
          photo={profile.photo}
          desc={profile.job}
        />
      )}

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
