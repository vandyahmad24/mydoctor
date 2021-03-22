import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DumPhoto} from '../../../assets';
import {jenfonts, Warna} from '../../../utils';

const HomeProfile = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.photo} source={DumPhoto} />
      <View style={styles.containerText}>
        <Text style={styles.name}>Nama</Text>
        <Text style={styles.job}>Pekerjaan</Text>
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
  },
  job: {
    fontFamily: jenfonts.primary.normal,
    color: Warna.text.secondary,
    fontSize: 12,
  },
});
