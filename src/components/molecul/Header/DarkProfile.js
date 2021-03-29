import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {jenfonts, Warna} from '../../../utils';
import {Button} from '../../atom';

const DarkProfile = ({onPress, title, job, pic}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.desc}>{job}</Text>
      </View>
      <Image source={pic} style={styles.avatar} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Warna.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {width: 46, height: 46, borderRadius: 46 / 2},
  content: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontFamily: jenfonts.primary[600],
    color: Warna.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: jenfonts.primary[400],
    color: Warna.white,
    marginTop: 4,
    textAlign: 'center',
  },
});
