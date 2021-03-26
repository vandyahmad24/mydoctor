import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ICRemovePhoto} from '../../../assets';
import {jenfonts, Warna} from '../../../utils';

const Profile = ({name, desc, isRemove, photo, onPress}) => {
  return (
    <View style={styles.page}>
      {!isRemove && (
        <View style={styles.container}>
          <Image source={photo} style={styles.avatar} />
          {isRemove && <ICRemovePhoto style={styles.removePhoto} />}
        </View>
      )}
      {isRemove && (
        <TouchableOpacity onPress={onPress} style={styles.container}>
          <Image source={photo} style={styles.avatar} />
          {isRemove && <ICRemovePhoto style={styles.removePhoto} />}
        </TouchableOpacity>
      )}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.job}>{desc}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  container: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: Warna.borderInput,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {justifyContent: 'center', alignItems: 'center'},
  name: {
    fontSize: 20,
    fontFamily: jenfonts.primary[600],
    color: Warna.text.primary,
    textTransform: 'capitalize',
  },
  job: {
    fontSize: 16,
    fontFamily: jenfonts.primary[600],
    color: Warna.text.secondary,
    marginTop: 5,
    textTransform: 'capitalize',
  },
  removePhoto: {position: 'absolute', right: 8, bottom: 8},
});
