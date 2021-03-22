import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DumNews2} from '../../../assets';
import {Warna, jenfonts} from '../../../utils';

const ListHospital = ({type, name, address, pic}) => {
  const Picture = () => {
    if (pic === undefined) {
      return <Image source={DumNews2} style={styles.picture} />;
    }
    return <Image source={pic} style={styles.picture} />;
  };
  return (
    <View style={styles.container}>
      <Picture />
      <View>
        <Text style={styles.title}>{type}</Text>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.alamatRs}>{address}</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Warna.borderInput,
  },
  title: {
    fontFamily: jenfonts.primary[600],
    fontSize: 16,
    color: Warna.text.primary,
  },
  alamatRs: {
    fontFamily: jenfonts.primary[300],
    fontSize: 12,
    color: Warna.text.secondary,
    marginTop: 16,
  },
  picture: {
    width: 80,
    height: 60,
    borderRadius: 11,
    marginRight: 16,
  },
});
