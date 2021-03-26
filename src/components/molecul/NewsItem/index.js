import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {jenfonts, Warna} from '../../../utils';

const NewsItem = ({title, date, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.day}>{date}</Text>
      </View>
      <Image source={{uri: image}} style={styles.image} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Warna.borderInput,
    paddingBottom: 12,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  wrapperText: {flex: 1},
  title: {
    fontSize: 16,
    fontFamily: jenfonts.primary[600],
    color: Warna.text.primary,
    maxWidth: '90%',
  },
  day: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: jenfonts.primary.normal,
    color: Warna.text.secondary,
  },
  image: {width: 80, height: 60, borderRadius: 11},
});
