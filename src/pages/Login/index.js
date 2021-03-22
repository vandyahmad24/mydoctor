import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Input, Jarak, Link} from '../../components/atom';
import {jenfonts, Warna} from '../../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkontribusi</Text>
      <Input label="Email Address" />
      <Jarak height={24} />
      <Input label="Password" />
      <Jarak height={10} />
      <Link title="Forget Me Password" size={12} />
      <Jarak height={40} />
      <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
      <Jarak height={30} />
      <Link
        title="Create New Account"
        size={16}
        align="center"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: Warna.white,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: jenfonts.primary[600],
    color: Warna.secondary,
    marginVertical: 40,
    maxWidth: 153,
  },
});
