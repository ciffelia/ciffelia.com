import React from 'react';
import { ThemeProvider } from 'styled-components';
import { light, CharcoalTheme } from '@charcoal-ui/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends CharcoalTheme {}
}

const CharcoalThemeProvider: React.FC = React.memo(
  function CharcoalThemeProvider({ children }) {
    return <ThemeProvider theme={light}>{children}</ThemeProvider>;
  },
);

export default CharcoalThemeProvider;
