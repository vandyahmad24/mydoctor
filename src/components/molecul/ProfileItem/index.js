import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {jenfonts, Warna} from '../../../utils';

const ProfileItem = ({label, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.desc}>{value}</Text>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Warna.borderInput,
  },
  label: {
    fontSize: 14,
    fontFamily: jenfonts.primary[600],
    color: Warna.text.secondary,
    marginBottom: 6,
  },
  desc: {
    fontSize: 16,
    fontFamily: jenfonts.primary.normal,
    color: Warna.text.primary,
  },
});
