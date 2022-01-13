import React, {useState} from 'react';
import {Appearance} from 'react-native';
import {DARK_COLORS, LIGHT_COLORS} from '../constants/colors';
import PropTypes from 'prop-types';

export const ThemeContext = React.createContext({
  isDark: false,
  colors: LIGHT_COLORS,
  setColorScheme: () => {},
});

const ThemeProvider = ({children}) => {
  const colorScheme = Appearance.getColorScheme();

  const [isDark, setIsDark] = useState(colorScheme === 'dark');
  const defaultTheme = {
    isDark,
    colors: isDark ? DARK_COLORS : LIGHT_COLORS,
    setColorScheme: scheme => {
      setIsDark(scheme === 'dark');
    },
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;

ThemeProvider.propTypes = {
  children: PropTypes.object,
};
