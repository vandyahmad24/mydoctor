import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {DumCover} from '../../assets';
import {ListHospital} from '../../components/molecul';
import {jenfonts, Warna} from '../../utils';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={DumCover} style={styles.background}>
        <Text style={styles.title}>Nearby Hospital</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.container}>
        <ListHospital
          type="Rumah Sakit"
          name="Rumah Sakit Kalisalak"
          address="Jl Akasia 8"
        />
        <ListHospital
          type="Rumah Sakit Anak"
          name="Rumah Sakit Kauman"
          address="Jl Akasia 8"
        />
        <ListHospital
          type="Rumah Sakit Jiwa"
          name="Rumah Sakit Batang"
          address="Jl Akasia 8"
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {backgroundColor: Warna.secondary, flex: 1},
  container: {
    backgroundColor: Warna.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
  },

  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: jenfonts.primary[600],
    color: Warna.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: jenfonts.primary[300],
    color: Warna.white,
    marginTop: 6,
    textAlign: 'center',
  },
});
