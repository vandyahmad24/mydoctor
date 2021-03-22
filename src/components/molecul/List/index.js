import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICNext, ICUser, ICBahasa, ICStart, ICHelp} from '../../../assets';
import {jenfonts, Warna} from '../../../utils';

const List = ({pic, name, msg, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'user') {
      return <ICUser />;
    }
    if (icon === 'bahasa') {
      return <ICBahasa />;
    }
    if (icon === 'bintang') {
      return <ICStart />;
    }
    if (icon === 'help') {
      return <ICHelp />;
    }
    return <ICHelp />;
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon ? <Icon /> : <Image source={pic} style={styles.avatar} />}
      <View style={styles.content}>
        <View style={styles.containerText}>
          <Text style={styles.nama}>{name}</Text>
          <Text style={styles.lastchat}>{msg}</Text>
        </View>
      </View>
      {type === 'next' && <ICNext />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomColor: Warna.borderInput,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {flex: 1, marginLeft: 16},
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  nama: {
    fontSize: 16,
    fontFamily: jenfonts.primary.normal,
    color: Warna.text.primary,
  },
  lastchat: {
    fontSize: 12,
    fontFamily: jenfonts.primary[300],
    color: Warna.text.secondary,
  },
});
