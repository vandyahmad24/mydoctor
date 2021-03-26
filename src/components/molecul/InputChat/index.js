import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {jenfonts, Warna} from '../../../utils';
import {Button} from '../../atom';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis Pesan Untuk Dokter" />
      <Button type="button-icon-send" disable />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: Warna.white,
  },
  input: {
    backgroundColor: Warna.disable,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: jenfonts.primary.normal,
    maxHeight: 45,
  },
});
