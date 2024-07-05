// Colours
//import colors from "vuetify/lib/util/colors.mjs";
import { type ThemeDefinition } from 'vuetify'

const colours: any = {
  primary: '#1872E7',
  secondary: '#E78D18',
  accent: '#18E7B4',
  white: '#FFFFFF',
  black: '#000000',
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
  yellow: '#FFFF00',
  orange: '#FFA500',
  'primary-tone-1': '#E5EFFC'
}

export const light: ThemeDefinition = {
  dark: false,
  colors: {
    primary: colours.primary,
    'primary-shade-1': '#1358B3',
    'primary-shade-2': '#0B3367',
    'primary-shade-3': '#051933',
    'primary-tint-1': '#3B77C5',
    'primary-tint-2': '#527AAE',
    'primary-tint-3': '#747E8B',
    'primary-tone-1': '#E5EFFC',
    'primary-tone-2': '#B2D0F7',
    'primary-tone-3': '#65A1EF',
    secondary: colours.secondary,
    'secondary-shade-1': '#CD7E16',
    'secondary-shade-2': '#804E0D',
    'secondary-shade-3': '#4D2F08',
    'secondary-tint-1': '#D08A2F',
    'secondary-tint-2': '#B98746',
    'secondary-tint-3': '#A2845D',
    'secondary-tone-1': '#FCF2E5',
    'secondary-tone-2': '#F7D9B2',
    'secondary-tone-3': '#F2C07F',
    accent: colours.accent,
    'accent-shade-1': '#18E7B4',
    'accent-shade-2': '#12AD86',
    'accent-shade-3': '#0C735A',
    'accent-tint-1': '#18E7B4',
    'accent-tint-2': '#32CDA7',
    'accent-tint-3': '#4CB49A',
    'accent-tone-1': '#DEFCF4',
    'accent-tone-2': '#BDF8E9',
    'accent-tone-3': '#9CF5DE',
    'background-primary': colours['primary-tone-1'],
    white: colours.white,
    black: colours.black,
    error: colours.red,
    warning: colours.orange,
    success: colours.green
  }
}

export const dark: ThemeDefinition = {
  dark: true,
  colors: {
    default: colours.white,
    inverted: colours.black,
    primary: colours.black,
    secondary: colours.white,
    accent: colours.accent,
    white: colours.white,
    black: colours.black,
    error: colours.red,
    warning: colours.orange,
    success: colours.green
  }
}
