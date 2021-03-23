const MainColors = {
  green1: '#0BCAD4',
  dark1: '#112340',
  dark2: '#495A75',
  white: '#fff',
  black: '#000',
  gray1: '#7D8797',
  gray2: '#E9E9E9',
  gray3: '#EDEEF0',
  gray4: '#B1B7C2',
  bgLight: '#EDFCFD',
  blue: '#0066CB',
  black1: '#000000',
  black2: 'rgba(0,0,0, 0.5)',
  red1: '#E06379',
};

export const Warna = {
  primary: MainColors.green1,
  secondary: MainColors.dark1,
  white: MainColors.white,
  blue: MainColors.blue,
  black: MainColors.black,
  disable: MainColors.gary3,
  borderInput: MainColors.gray2,
  textDark: MainColors.dark2,
  bgLight: MainColors.bgLight,
  bgDisbale: MainColors.gray3,
  loadingBackground: MainColors.black2,
  Message: {
    danger: MainColors.red1,
    success: MainColors.green1,
  },
  text: {
    primary: MainColors.dark1,
    secondary: MainColors.gray1,
    textInactive: MainColors.dark2,
    textActive: MainColors.green1,
  },
  button: {
    primary: {
      background: MainColors.primary,
      text: MainColors.white,
    },
    secondary: {
      background: MainColors.white,
      text: MainColors.black,
    },
    disable: {
      background: MainColors.gray3,
      text: MainColors.gray4,
    },
  },
};
