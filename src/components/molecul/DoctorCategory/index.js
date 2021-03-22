import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IClove, ICObat, ICSuntik} from '../../../assets';
import {jenfonts, Warna} from '../../../utils';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'psikiater') {
      return <IClove style={styles.illustration} />;
    }
    if (category === 'dokter obat') {
      return <ICObat style={styles.illustration} />;
    }
    if (category === 'dokter umum') {
      return <ICSuntik style={styles.illustration} />;
    }
    return <IClove style={styles.illustration} />;
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon />
      <Text style={styles.label}>Saya Butuh </Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: Warna.bgLight,
    alignSelf: 'flex-start',
    marginRight: 10,
    borderRadius: 10,
    width: 100,
    height: 130,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: jenfonts.primary[300],
    color: Warna.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: jenfonts.primary[600],
    color: Warna.text.primary,
  },
});
