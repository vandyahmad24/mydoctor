import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Button, Input, Jarak} from '../../components/atom';
import {Header, Loading} from '../../components/molecul';
import {Firebase} from '../../config';
import {storeData, useForm, Warna} from '../../utils';

const Register = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useForm({
    fullname: '',
    job: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    console.log(form);
    // getData('user').then(result => {
    //   console.log('data: ', result);
    // });
    // const data = {
    //   fullname: form.fullname,
    //   job: form.job,
    //   email: form.email,
    // };
    // navigation.navigate('UploadPhoto', data);
    setLoading(true);
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        setLoading(false);
        const data = {
          fullname: form.fullname,
          job: form.job,
          email: form.email,
          uid: success.user.uid,
        };
        setForm('reset');
        // https:/firebase.com/users/uuid/
        Firebase.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);
        // simpan di local
        showMessage({
          message: 'Register Success',
          type: 'default',
          backgroundColor: Warna.Message.success,
          color: Warna.white,
        });
        console.log('sukses', success);
        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
      })
      .catch(error => {
        setLoading(false);
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: Warna.Message.danger,
          color: Warna.white,
        });
      });
  };
  return (
    <>
      <View style={styles.page}>
        <Header title="Register" onPress={() => navigation.goBack()} />

        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Fullname"
              value={form.fullname}
              onChangeText={value => setForm('fullname', value)}
            />
            <Jarak height={24} />
            <Input
              label="Pekerjaan"
              value={form.job}
              onChangeText={value => setForm('job', value)}
            />
            <Jarak height={24} />
            <Input
              label="Email"
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
            <Jarak height={40} />
            <Button title="Continue" onPress={onContinue} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 0,
  },
  page: {
    backgroundColor: Warna.white,
    flex: 1,
  },
});
