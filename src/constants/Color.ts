export const Color = {
  black: '#000000',
  grey: '#9A9A9A',
  red: '#ff0000',
  cardBg: '#f2f2f2',
  cardBorder: '#878585ff',
  white: '#FFFFFF',
} as const;
export type TextType = (typeof Color)[keyof typeof Color];
