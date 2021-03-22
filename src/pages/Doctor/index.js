import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategory,
  HomeProfile,
  Jarak,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {jenfonts, Warna} from '../../utils';
import {DumPhoto, JSONCategoryDoctor} from '../../assets';
const Doctor = ({navigation}) => {
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
                {JSONCategoryDoctor.data.map(doctor => {
                  return (
                    <DoctorCategory
                      category={doctor.category}
                      key={doctor.id}
                      onPress={() => navigation.navigate('ChooseDoctor')}
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
            <RatedDoctor
              onPress={() => navigation.navigate('DoctorProfile')}
              name="vandy"
              desc="dokter ganteng"
              avatar={DumPhoto}
            />
            <Jarak height={20} />
            <Text style={styles.title}>Good News</Text>
            <NewsItem />
            <NewsItem />
            <NewsItem />
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
