import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DumUser} from '../../assets';
import {List, Header} from '../../components';
import {Warna} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <List
        pic={DumUser}
        onPress={() => navigation.navigate('Chat')}
        type="next"
        name="Vandy"
        msg="Wanita"
      />
      <List
        pic={DumUser}
        onPress={() => navigation.navigate('Chat')}
        type="next"
        name="Vandy"
        msg="Pria"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {backgroundColor: Warna.white, flex: 1},
});
