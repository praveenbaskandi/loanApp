import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../navigation/types';
import { loanListStyles as styles } from './styled';
import { Texts } from '../../constants/Strings';
import { Color } from '../../constants/Color';
import { useLoanListController } from './LoanListController';

type LoanListNavigationProp = StackNavigationProp<RootStackParamList, 'Loans'>;

interface Props {
  navigation: LoanListNavigationProp;
}

const LoanListScreen: React.FC<Props> = ({ navigation }) => {
  const {
    sortByInterestAscending,
    sortInterestDescending,
    loans,
    loading,
    error,
    selectedBtn,
    setSelectedBtn,
    loadLoans,
  } = useLoanListController();

  if (loading) {
    return (
      <ActivityIndicator
        style={styles.center}
        size="large"
        color={Color.black}
      />
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
        <Button title={Texts.retry} onPress={loadLoans} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button
        title={Texts.lowToHigh}
        color={selectedBtn === 1 ? Color.red : Color.grey}
        onPress={() => {
          sortByInterestAscending();
          setSelectedBtn(1);
        }}
      />
      <Button
        title={Texts.highToLow}
        color={selectedBtn === 2 ? Color.red : Color.grey}
        onPress={() => {
          sortInterestDescending();
          setSelectedBtn(2);
        }}
      />
      <FlatList
        data={loans}
        keyExtractor={item => item.id}
        ListFooterComponent={<View style={styles.footer} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            key={item.id}
            onPress={() => navigation.navigate('LoanDetail', { loan: item })}
          >
            <Text style={styles.bank}>{item.bankName}</Text>
            <Text>
              {Texts.amount}
              {item.amount}
            </Text>
            <Text>
              {Texts.interest}
              {item.interestRate}%
            </Text>
            <Text>
              {Texts.type} {item.type}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default LoanListScreen;
