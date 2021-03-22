import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ICActiveDoctor,
  ICActiveMap,
  ICActiveMessage,
  ICInactiveDoctor,
  ICInactiveMap,
  ICInactiveMessage,
} from '../../../assets';
import {jenfonts, Warna} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Item = () => {
    if (title === 'Doctor') {
      return active ? (
        <Image source={ICActiveDoctor} />
      ) : (
        <Image source={ICInactiveDoctor} />
      );
    }
    if (title === 'Messages') {
      return active ? (
        <Image source={ICActiveMessage} />
      ) : (
        <Image source={ICInactiveMessage} />
      );
    }
    if (title === 'Hospital') {
      return active ? (
        <Image source={ICActiveMap} />
      ) : (
        <Image source={ICInactiveMap} />
      );
    }
    return <Image source={ICInactiveMap} />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Item />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: active => ({
    fontSize: 10,
    color: active ? Warna.text.textActive : Warna.text.textInactive,
    fontFamily: jenfonts.primary[600],
    marginTop: 4,
  }),
});
