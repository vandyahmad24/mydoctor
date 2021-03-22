import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ICUploadPhoto, ILNullPhoto} from '../../assets';
import {Button, Header, Jarak, Link} from '../../components';
import {jenfonts, Warna} from '../../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.containerAvatatr}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <ICUploadPhoto style={styles.addPhoto} />
          </View>

          <Text style={styles.name}>Namma</Text>
          <Jarak height={4} />
          <Text style={styles.job}>Pekerjaan</Text>
        </View>

        <View style={styles.containerBottom}>
          <Button
            title="Upload Photo"
            onPress={() => navigation.replace('MainApp')}
          />
          <Jarak height={30} />
          <Link
            title="Skip This Step"
            style={styles.linkStyle}
            align="center"
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {backgroundColor: Warna.white, flex: 1},
  linkStyle: {fontSize: 16},
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  avatar: {width: 110, height: 110},
  containerAvatatr: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: Warna.borderInput,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {position: 'absolute', bottom: 8, right: 6},
  name: {
    fontSize: 24,
    fontFamily: jenfonts.primary[600],
    color: Warna.text.primary,
    textAlign: 'center',
  },
  job: {
    fontSize: 18,
    fontFamily: jenfonts.primary.normal,
    color: Warna.text.secondary,
    textAlign: 'center',
  },
});
