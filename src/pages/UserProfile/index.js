import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {Header, Jarak, List, Profile} from '../../components';
import {Firebase} from '../../config';
import {getData, Warna} from '../../utils';
import {showError} from '../../utils/showMessage';
import {useDispatch} from 'react-redux';

const UserProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({
    fullname: '',
    photo: '',
    job: ILNullPhoto,
  });
  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      res.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  const logOut = () => {
    dispatch({type: 'SET_LOADING', value: true});

    Firebase.auth()
      .signOut()
      .then(res => {
        dispatch({type: 'SET_LOADING', value: false});
        clearAllData();
        navigation.replace('GetStarted');
      })
      .catch(err => {
        showError(err.message);
      });
  };
  const clearAllData = () => {
    AsyncStorage.getAllKeys().then(keys => AsyncStorage.multiRemove(keys));
  };

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
      <List name="Log out" type="next" icon="help" onPress={logOut} />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: Warna.white},
});
