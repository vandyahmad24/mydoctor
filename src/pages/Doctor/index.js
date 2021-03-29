import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DumPhoto} from '../../assets';
import {
  DoctorCategory,
  HomeProfile,
  Jarak,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {Firebase} from '../../config';
import {jenfonts, showError, Warna} from '../../utils';
const Doctor = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
    getNew();
    getCategory();
    getTopRatedDoctor();
  }, []);
  // rubah object jd array
  const parseArray = listObject => {
    const data = [];
    Object.keys(listObject).map(key => {
      data.push({
        id: key,
        data: listObject[key],
      });
    });
    return data;
  };

  const getNew = () => {
    Firebase.database()
      .ref('news/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const dataFilter = data.filter(el => el !== null);
          setNews(dataFilter);
          console.log('dari news', news);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };
  const getCategory = () => {
    Firebase.database()
      .ref('category/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const dataFilter = data.filter(el => el !== null);
          setCategoryDoctor(dataFilter);
          console.log('dari category', categoryDoctor);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const getTopRatedDoctor = () => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then(res => {
        if (res.val()) {
          // setCategoryDoctor(res.val());
          const data = parseArray(res.val());
          setDoctor(data);

          console.log('hasil parse', data);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  // useEffect(() => {
  //   getData('user').then(result => {
  //     console.log('dari main app: ', result);
  //   });
  // }, []);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Jarak height={30} />
          <View style={styles.wrapperSection}>
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Jarak height={30} />
            <Text style={styles.welcomeText}>
              Mau Konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <Jarak height={16} />
          <View style={styles.wrapperscrol}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Jarak width={30} />
                {categoryDoctor.map(doctor => {
                  return (
                    <DoctorCategory
                      category={doctor.category}
                      key={doctor.id}
                      onPress={() =>
                        navigation.navigate('ChooseDoctor', doctor)
                      }
                    />
                  );
                })}
                <Jarak width={22} />
              </View>
            </ScrollView>
          </View>
          <Jarak height={25} />
          <View style={styles.wrapperSection}>
            <Text style={styles.title}>Top Rated Doctor?</Text>
            <Jarak height={16} />
            {doctor.map(doctor => {
              return (
                <RatedDoctor
                  key={doctor.id}
                  onPress={() => navigation.navigate('DoctorProfile', doctor)}
                  name={doctor.data.fullname}
                  desc={doctor.data.job}
                  avatar={{uri: doctor.data.photo.uri}}
                />
              );
            })}

            <Jarak height={20} />
            <Text style={styles.title}>Good News</Text>
            {news.map(item => {
              return (
                <NewsItem
                  key={item.id}
                  title={item.title}
                  date={item.date}
                  image={item.image}
                />
              );
            })}
          </View>
          <Jarak height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Warna.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: Warna.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcomeText: {
    fontFamily: jenfonts.primary[600],
    fontSize: 20,
    color: Warna.text.primary,
    maxWidth: 209,
  },
  wrapperSection: {paddingHorizontal: 16},
  wrapperProfil: {},
  category: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: jenfonts.primary[600],
    color: Warna.text.primary,
    fontSize: 16,
  },
  wrapperscrol: {marginHorizontal: -16},
});
