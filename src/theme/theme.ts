import {DefaultTheme} from 'react-native-paper';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Quicksand-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Quicksand-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Quicksand-Light',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Quicksand-Bold',
      fontWeight: 'normal',
    },
  },
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: fontConfig.default.regular,
    medium: fontConfig.default.medium,
    light: fontConfig.default.light,
    bold: fontConfig.default.bold,
  },
};
