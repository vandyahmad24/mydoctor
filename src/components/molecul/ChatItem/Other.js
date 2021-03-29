import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DumPhoto} from '../../../assets';
import {jenfonts, Warna} from '../../../utils';

const Other = ({content, date, photo}) => {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>{content}</Text>
        </View>
        <Text style={styles.time}>{date}</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  chatContent: {
    backgroundColor: Warna.primary,
    padding: 12,
    paddingLeft: 18,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: jenfonts.primary.normal,
    color: Warna.white,
  },
  time: {
    fontSize: 12,
    fontFamily: jenfonts.primary.normal,
    color: Warna.text.secondary,
  },
  avatar: {width: 30, height: 30, borderRadius: 30 / 2, marginRight: 12},
});
