import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Header, Jarak, Profile, ProfileItem} from '../../components';
import {Warna} from '../../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile name="Doktre Vandy" desc="Dokter Anak" />
      <Jarak height={10} />
      <ProfileItem label="Alumnus" value="IT TELKOM Purwokerto" />
      <ProfileItem label="Alumnus" value="IT TELKOM Purwokerto" />
      <ProfileItem label="Alumnus" value="IT TELKOM Purwokerto" />
      <View style={styles.container}>
        <Button title="Start Konsultasi" />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: Warna.white, flex: 1},
  container: {marginTop: 33, padding: 40, paddingTop: 0},
});
