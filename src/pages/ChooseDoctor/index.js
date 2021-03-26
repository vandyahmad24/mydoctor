import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {Header, List} from '../../components';
import {Firebase} from '../../config';
import {Warna} from '../../utils';

const ChooseDoctor = ({navigation, route}) => {
  const [listDoctor, setListDoctor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isKosong, setIsKosong] = useState(false);
  const Doctor = route.params;
  useEffect(() => {
    DoctorByCategory(Doctor.category);
    console.log('List dokter', listDoctor);
  }, []);
  const DoctorByCategory = category => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then(res => {
        console.log('res', res.val());
        setLoading(false);
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(item => {
            data.push({
              id: item,
              data: oldData[item],
            });
          });
          setListDoctor(data);
        } else {
          setIsKosong(true);
        }
      });
  };

  

  return (
    <View style={styles.page}>
      <Header
        style={styles.header}
        title={`Pilih ${Doctor.category}`}
        type="dark"
        onPress={() => navigation.goBack()}
      />
      {loading && <List name="Mohon Tunggu" msg="" pic={ILNullPhoto} />}
      {isKosong && (
        <List name="Dokter Belum ada" msg="Mohon Maaf Dokter Belum ada" pic={ILNullPhoto} />
      )}
      {listDoctor.map(doctor => {
        return (
          <List
            key={doctor.id}
            type="next"
            pic={{uri: doctor.data.photo.uri}}
            name={doctor.data.fullname}
            msg={doctor.data.gender}
            onPress={() => navigation.navigate('DoctorProfile', doctor)}
          />
        );
      })}
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {backgroundColor: Warna.white, flex: 1},
  header: {textTransform: 'capitalize'},
});
