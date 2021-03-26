import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Input, Jarak} from '../../components/atom';
import {Header} from '../../components/molecul';
import {Firebase} from '../../config';
import {storeData, useForm, Warna} from '../../utils';
import {useDispatch} from 'react-redux';
import {showError, showSuccess} from '../../utils/showMessage';

const Register = ({navigation}) => {
  const dispatch = useDispatch();

  const [form, setForm] = useForm({
    fullname: '',
    job: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        dispatch({type: 'SET_LOADING', value: false});
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
        showSuccess('Register Success');
        storeData('user', data);
        navigation.replace('UploadPhoto', data);
      })
      .catch(error => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(error.message);
      });
  };
  return (
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
