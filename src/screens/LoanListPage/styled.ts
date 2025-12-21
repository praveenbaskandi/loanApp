import { StyleSheet } from 'react-native';
import { Color } from '../../constants/Color';

export const loanListStyles = StyleSheet.create({
  container: {
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Color.cardBg,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Color.cardBorder,
  },
  bank: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  footer: {
    height: 100,
    width: '100%',
  },
});
