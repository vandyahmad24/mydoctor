import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ICbackDark, ICBackWhite} from '../../../assets/icon';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <ICbackDark />;
    }
    if (icon === 'back-light') {
      return <ICBackWhite />;
    }
    return <ICbackDark />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
