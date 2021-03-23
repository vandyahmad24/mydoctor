import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DumPhoto, ILNullPhoto} from '../../../assets';
import {getData, jenfonts, Warna} from '../../../utils';

const HomeProfile = ({onPress}) => {
  // getData
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullname: '',
    job: '',
  });
  useEffect(() => {
    getData('user').then(result => {
      // console.log('data user: ', result);
      const data = result;
      data.photo = {uri: result.photo};
      console.log('new Profile', data);
      setProfile(data);
    });
  }, []);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.photo} source={profile.photo} />
      <View style={styles.containerText}>
        <Text style={styles.name}>{profile.fullname}</Text>
        <Text style={styles.job}>{profile.job}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  containerText: {marginLeft: 16},
  photo: {width: 46, height: 46, borderRadius: 46 / 2},
  name: {
    fontFamily: jenfonts.primary[600],
    color: Warna.text.primary,
    fontSize: 16,
    textTransform: 'capitalize',
  },
  job: {
    fontFamily: jenfonts.primary.normal,
    color: Warna.text.secondary,
    fontSize: 12,
    textTransform: 'capitalize',
  },
});
