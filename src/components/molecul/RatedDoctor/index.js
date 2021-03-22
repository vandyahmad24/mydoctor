import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICBintang} from '../../../assets';
import {jenfonts, Warna} from '../../../utils';

const RatedDoctor = ({onPress, name, desc, avatar}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.containerProfil}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.kategory}>{desc}</Text>
      </View>
      <View style={styles.containerStart}>
        <ICBintang />
        <ICBintang />
        <ICBintang />
        <ICBintang />
      </View>
    </TouchableOpacity>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    alignItems: 'center',
  },
  containerStart: {flexDirection: 'row'},
  containerProfil: {flex: 1},
  name: {
    fontFamily: jenfonts.primary[600],
    fontSize: 16,
    color: Warna.text.primary,
  },
  kategory: {
    fontFamily: jenfonts.primary[400],
    fontSize: 12,
    color: Warna.text.secondary,
    marginTop: 2,
  },
});
