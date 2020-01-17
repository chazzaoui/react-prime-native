import * as i from 'types';
import theme from './theme';

export type BaseStyled = {
  theme?: typeof theme;
  className?: string;
};

// Get color strings from theme
export type ThemeColors = keyof typeof theme.colors;

// Get subcolors from colors if they exist
export type SubThemeColors = {
  [color in i.ThemeColors]: Exclude<keyof typeof theme.colors[color], keyof string>
};

// Ensures colors exist in theme
export type ColorsFromTheme<Colors extends i.ThemeColors> = Colors;

// Ensures subcolor exists in color object
export type SubcolorsFromColor<Color extends i.ThemeColors> = i.SubThemeColors[Color];

// Ensures subcolor exists in theme
export type SubcolorFromTheme<Color extends i.ThemeColors, Subcolor extends i.SubThemeColors[Color]> = [Color, Subcolor];
