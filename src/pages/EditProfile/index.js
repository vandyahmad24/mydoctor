import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Header, Input, Jarak, Profile} from '../../components';
import {Warna} from '../../utils';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Profile name="Halo vandy" isRemove />
          <Jarak height={26} />
          <Input label="Full Name" />
          <Jarak height={24} />
          <Input label="Pekerjaan" />
          <Jarak height={24} />
          <Input label="Email" />
          <Jarak height={24} />
          <Input label="Password" />
          <Jarak height={40} />
          <Button
            title="Save Profile"
            onPress={() => navigation.goBack('UserProfile')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: Warna.white, flex: 1},
  container: {padding: 40, paddingTop: 0},
});
