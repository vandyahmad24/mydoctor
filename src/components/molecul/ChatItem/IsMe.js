import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {jenfonts, Warna} from '../../../utils';

const IsMe = ({content, date}) => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>
          {content}
        </Text>
      </View>

      <Text style={styles.time}>{date}</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {marginBottom: 20, alignItems: 'flex-end', paddingRight: 16},
  chatContent: {
    backgroundColor: Warna.bgLight,
    padding: 12,
    paddingRight: 18,
    maxWidth: '70%',
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: jenfonts.primary.normal,
    color: Warna.text.primary,
  },
  time: {
    fontSize: 12,
    fontFamily: jenfonts.primary.normal,
    color: Warna.text.secondary,
  },
});
