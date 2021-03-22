import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Input, Jarak} from '../../components/atom';
import {Header} from '../../components/molecul';
import {useForm, Warna} from '../../utils';

const Register = ({navigation}) => {
  // const [fullname, setFullname] = useState('');
  // const [job, setJob] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [form, setForm] = useForm({
    fullname: '',
    job: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    console.log(form);
  };
  return (
    <View style={styles.page}>
      <Header title="Register" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Input
            label="Fullname"
            value={form.fullname}
            onChangeText={value => setForm('fullname',value)}
          />
          <Jarak height={24} />
          <Input
            label="Pekerjaan"
            value={form.job}
            onChangeText={value => setForm('job',value)}
          />
          <Jarak height={24} />
          <Input
            label="Email"
            value={form.email}
            onChangeText={value => setForm('email',value)}
          />
          <Jarak height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password',value)}
            secureTextEntry={true}
          />
          <Jarak height={40} />
          <Button title="Continue" onPress={onContinue} />
        </View>
      </ScrollView>
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
