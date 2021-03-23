import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {jenfonts, Warna} from '../../../utils';

const index = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={Warna.primary} />
      <Text style={styles.text}>Loading ...</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Warna.loadingBackground,
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 18,
    fontFamily: jenfonts.primary[600],
    color: Warna.primary,
    marginTop: 20,
  },
});
