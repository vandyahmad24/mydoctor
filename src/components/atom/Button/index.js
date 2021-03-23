import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {jenfonts, Warna} from '../../../utils';
import IconOnly from './IconOnly';
import BtnIconSend from './BtnIconSend';

const Button = ({type, title, onPress, icon, disable}) => {
  if (type === 'button-icon-send') {
    return <BtnIconSend disable={disable} icon={icon} onPress={onPress} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? Warna.white : Warna.primary,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  disableBg: {
    backgroundColor: Warna.bgDisbale,
    paddingVertical: 10,
    borderRadius: 10,
  },
  disableText: {
    fontSize: 18,
    fontFamily: jenfonts.primary[600],
    textAlign: 'center',
    color: Warna.button.disable.text,
  },
  text: type => ({
    fontSize: 18,
    fontFamily: jenfonts.primary[600],
    textAlign: 'center',
    color: type === 'secondary' ? Warna.secondary : Warna.white,
  }),
});
