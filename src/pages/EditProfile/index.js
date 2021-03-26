import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ILNullPhoto} from '../../assets';
import {Button, Header, Input, Jarak, Profile} from '../../components';
import {Firebase} from '../../config';
import {getData, storeData, Warna} from '../../utils';

import {launchImageLibrary} from 'react-native-image-picker';
import {showError, showSuccess} from '../../utils/showMessage';

const EditProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullname: '',
    photo: ILNullPhoto,
    job: '',
    email: '',
    uid: '',
  });
  const [password, setPassword] = useState('');
  const [photoLama, setPhotoLama] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');
  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      setPhoto({uri: res.photo});
      setPhotoLama({uri: res.photo});
      setProfile(data);
    });
  }, []);

  const update = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showError('Password Must be Min 6 Character');
      } else {
        //  update password
        rubahPassword();
        updateProfileData();
        showSuccess('Profil berhasil di update');
        navigation.replace('MainApp');
      }
    } else {
      // update profile
      updateProfileData();
      showSuccess('Profil berhasil di update');
      navigation.replace('MainApp');
    }
  };

  const rubahPassword = () => {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.updatePassword(password).catch(err => {
          showError(err.message);
        });
      }
    });
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDB;
    console.log("dari edit profile", data);
    Firebase.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(res => {
        storeData('user', data);
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getPhoto = () => {
    launchImageLibrary(
      {quality: 1, maxWidth: 115, maxHeight: 115, includeBase64: true},
      response => {
        if (response.didCancel == true || response.error) {
          showError('Ops, Sepertinya anda tidak memiliki foto');
          setPhoto(photoLama);
        } else {
          console.log('response get ', response);
          setPhotoForDB(`data:${response.type};base64, ${response.base64}`);
          const source = {uri: response.uri};
          setPhoto(source);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {profile.fullname.length > 0 && (
            <Profile
              onPress={getPhoto}
              name={profile.fullname}
              photo={photo}
              desc={profile.job}
              isRemove
            />
          )}
          <Jarak height={26} />
          <Input
            label="Full Name"
            value={profile.fullname}
            onChangeText={value => changeText('fullname', value)}
          />
          <Jarak height={24} />
          <Input
            label="Pekerjaan"
            value={profile.job}
            onChangeText={value => changeText('job', value)}
          />
          <Jarak height={24} />
          <Input label="Email" value={profile.email} disable />
          <Jarak height={24} />
          <Input
            label="Password"
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
          <Jarak height={40} />
          <Button title="Save Profile" onPress={update} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: Warna.white, flex: 1},
  container: {padding: 40, paddingTop: 0},
});
