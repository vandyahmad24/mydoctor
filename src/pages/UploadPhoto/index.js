import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ICRemovePhoto, ICUploadPhoto, ILNullPhoto} from '../../assets';
import {Button, Header, Jarak, Link} from '../../components';
import {jenfonts, storeData, Warna} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
import {Firebase} from '../../config';
import {showError} from '../../utils/showMessage';
import {useDispatch} from 'react-redux';

const UploadPhoto = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {fullname, job, uid} = route.params;
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');
  const getPhoto = () => {
    launchImageLibrary(
      {quality: 0.4, maxWidth: 115, maxHeight: 115, includeBase64: true},
      response => {
        if (response.didCancel == true || response.error) {
          showError('Ops, Sepertinya anda tidak memiliki foto');
          setPhoto(ILNullPhoto);
          setHasPhoto(false);
        } else {
          setPhotoForDB(`data:${response.type};base64, ${response.base64}`);
          const source = {uri: response.uri};
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const uploadContinue = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Firebase.database()
      .ref('users/' + uid + '/')
      .update({photo: photoForDB})
      .then(result => {
        dispatch({type: 'SET_LOADING', value: false});
        const data = route.params;
        data.photo = photoForDB;
        storeData('user', data);
        console.log(data);
        navigation.replace('MainApp');
      })
      .catch(err => {
        showError(err.message);
      });
  };
  // useState
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.containerAvatatr} onPress={getPhoto}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <ICRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <ICUploadPhoto style={styles.addPhoto} />}
          </TouchableOpacity>

          <Text style={styles.name}>{fullname}</Text>
          <Jarak height={4} />
          <Text style={styles.job}>{job}</Text>
        </View>

        <View style={styles.containerBottom}>
          <Button
            disable={!hasPhoto}
            title="Upload Photo"
            onPress={uploadContinue}
          />
          <Jarak height={30} />
          <Link
            title="Skip This Step"
            style={styles.linkStyle}
            align="center"
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {backgroundColor: Warna.white, flex: 1},
  linkStyle: {fontSize: 16},
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  containerAvatatr: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: Warna.borderInput,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {position: 'absolute', bottom: 8, right: 6},
  name: {
    fontSize: 24,
    fontFamily: jenfonts.primary[600],
    color: Warna.text.primary,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  job: {
    fontSize: 18,
    fontFamily: jenfonts.primary.normal,
    color: Warna.text.secondary,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
