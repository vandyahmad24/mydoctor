import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Firebase} from '../../config';
import {Warna} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    const unSubscribe = Firebase.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 2000);
    });
    return () => unSubscribe();
  }, [navigation]);
  // array koosng berfungsi supaya useEffect tidak dipanggil terus menerus

  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Warna.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: Warna.secondary,
    marginTop: 20,
  },
});
