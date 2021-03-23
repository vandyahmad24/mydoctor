import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ScrollView} from 'react-native-gesture-handler';
import {ILNullPhoto} from '../../assets';
import {Button, Header, Input, Jarak, Profile} from '../../components';
import {Firebase} from '../../config';
import {getData, storeData, Warna} from '../../utils';

import {launchImageLibrary} from 'react-native-image-picker';

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
      console.log(data);
      setProfile(data);
    });
  }, []);

  const update = () => {
    console.log('profile', profile);

    console.log('New Password ', password);
    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: 'Password Must be Min 6 Character',
          type: 'default',
          backgroundColor: Warna.Message.danger,
          color: Warna.white,
        });
      } else {
        //  update password
        updatePasswordData();
        updateProfileData();
        showMessage({
          message: 'Profil berhasil di update',
          type: 'default',
          backgroundColor: Warna.Message.success,
          color: Warna.white,
        });
        navigation.replace('MainApp');
      }
    } else {
      // update profile
      updateProfileData();
      showMessage({
        message: 'Profil berhasil di update',
        type: 'default',
        backgroundColor: Warna.Message.success,
        color: Warna.white,
      });
      navigation.replace('MainApp');
    }
  };

  const updatePasswordData = () => {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.updatePassword(password).catch(err => {
          showMessage({
            message: err.message,
            type: 'default',
            backgroundColor: Warna.Message.danger,
            color: Warna.white,
          });
        });
      }
    });
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDB;
    Firebase.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(res => {
        console.log('hasil upload', data);
        storeData('user', data);
      })
      .catch(err => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: Warna.Message.danger,
          color: Warna.white,
        });
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
        console.log(response);

        if (response.didCancel == true || response.error) {
          showMessage({
            message: 'Ops, Sepertinya anda tidak memiliki foto',
            type: 'default',
            backgroundColor: Warna.Message.danger,
            color: Warna.white,
          });
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
