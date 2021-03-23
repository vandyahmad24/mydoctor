import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Warna} from '../../../utils';

const index = ({label, value, onChangeText, secureTextEntry, disable}) => {
  const [border, setBorder] = useState(Warna.borderInput);
  const onFocusForm = () => {
    setBorder(Warna.blue);
  };
  const onBlurForm = () => {
    setBorder(Warna.borderInput);
  };

  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
  text: {
    fontSize: 16,
    color: Warna.text.secondary,
    marginBottom: 6,
    fontFamily: 'Nunito-Regular',
  },
});
