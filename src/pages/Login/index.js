import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ILLogo} from '../../assets';
import {Button, Input, Jarak, Link} from '../../components/atom';
import {Loading} from '../../components/molecul';
import {Firebase} from '../../config';
import {jenfonts, storeData, useForm, Warna} from '../../utils';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const login = () => {
    setLoading(true);
    Firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(result => {
        setForm('reset');
        setLoading(false);
        console.log(result);
        // ambil data dari firebase
        Firebase.database()
          .ref(`users/${result.user.uid}/`)
          .once('value')
          .then(resDB => {
            console.log('user:', resDB.val());
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });

        showMessage({
          message: 'Login Success',
          type: 'default',
          backgroundColor: Warna.Message.success,
          color: Warna.white,
        });
      })
      .catch(err => {
        setForm('reset');
        setLoading(false);
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: Warna.Message.danger,
          color: Warna.white,
        });
      });
  };
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
        <ILLogo />
        <Text style={styles.title}>Masuk dan mulai berkontribusi</Text>

        <Input
          label="Email Address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Jarak height={24} />
        <Input
          label="Password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry={true}
        />
        <Jarak height={10} />
        <Link title="Forget Me Password" size={12} />
        <Jarak height={40} />
        <Button title="Sign In" onPress={login} />
        <Jarak height={30} />
        <Link
          title="Create New Account"
          size={16}
          align="center"
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
      {loading && <Loading />}
    </>
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
