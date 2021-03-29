import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {ICSendActive, ICSendInactive} from '../../../assets';
import {Warna} from '../../../utils';

const BtnIconSend = ({disable, onPress}) => {
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        <ICSendInactive />
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(disable)}>
      <ICSendActive />
    </TouchableOpacity>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? Warna.disable : Warna.blue,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
    justifyContent: 'center',
  }),
});
