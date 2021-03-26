import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button, Jarak} from '../../components';
import {Warna} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>

      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Jarak height={15} />
        <Button
          type="secondary"
          onPress={() => navigation.replace('Login')}
          title="Sign In"
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: Warna.white,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: Warna.white,
    marginTop: 91,
    fontFamily: 'Nunito-SemiBold',
  },
});
