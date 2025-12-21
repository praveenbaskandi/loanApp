import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { loanDetailStyles as styles } from './styled';
import { Texts } from '../../constants/Strings';

type LoanDetailRouteProp = RouteProp<RootStackParamList, 'LoanDetail'>;

interface Props {
  route: LoanDetailRouteProp;
}

const LoanDetailScreen: React.FC<Props> = ({ route }) => {
  const { loan } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{loan.bankName}</Text>
      <Text>
        {Texts.loanAmount}
        {loan.amount}
      </Text>
      <Text>
        {Texts.interestRate} {loan.interestRate}%
      </Text>
      <Text>
        {Texts.loanType} {loan.type}
      </Text>
    </View>
  );
};

export default LoanDetailScreen;
