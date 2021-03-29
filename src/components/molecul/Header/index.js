import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Warna} from '../../../utils';
import {Button, Jarak} from '../../atom';
import DarkProfile from './DarkProfile';

const Header = ({onPress, title, type, job, pic}) => {
  if (type == 'dark-profile') {
    return <DarkProfile onPress={onPress} title={title} job={job} pic={pic} />;
  }
  return (
    <View style={styles.page(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Jarak width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  page: type => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === 'dark' ? Warna.secondary : Warna.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  text: type => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: type === 'dark' ? Warna.white : Warna.text.primary,
  }),
});
