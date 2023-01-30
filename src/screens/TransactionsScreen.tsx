import * as React from 'react';
import {SafeAreaView} from 'react-native';
import Transaction from '../components/Transaction';

function TransactionsScreen() {
  return (
    <SafeAreaView style={{width: '100%', paddingLeft: 15, paddingRight: 17}}>
      <Transaction />
    </SafeAreaView>
  );
}

export default TransactionsScreen;
