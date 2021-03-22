import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {jenfonts, Warna} from '../../../utils';

const Link = ({title, size, align, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: Warna.text.secondary,
    fontFamily: jenfonts.primary[300],
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
