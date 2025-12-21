import { StyleSheet } from 'react-native';
import { Color } from '../constants/Color';

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: Color.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
