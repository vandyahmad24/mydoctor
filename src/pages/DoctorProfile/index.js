import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Header, Jarak, Profile, ProfileItem} from '../../components';
import {Warna} from '../../utils';

const DoctorProfile = ({navigation, route}) => {
  const dataDoctor = route.params;
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile
        name={dataDoctor.data.fullname}
        desc={dataDoctor.data.job}
        photo={{uri: dataDoctor.data.photo.uri}}
      />
      <Jarak height={10} />
      <ProfileItem label="Alumnus" value={dataDoctor.data.university} />
      <ProfileItem
        label="Alamat Rumah Sakit"
        value={dataDoctor.data.hospital_address}
      />
      <ProfileItem
        label="Surat Ijin Praktek"
        value={dataDoctor.data.str_number}
      />
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
