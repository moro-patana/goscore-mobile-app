import * as React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

function Transaction() {
  return (
    <View style={styles.transaction}>
      <View style={{flexDirection: 'row', gap: 13, alignItems: 'center'}}>
        <Image
          style={styles.profile}
          source={require('../../assets/images/profile.png')}
        />
        <View>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.bankName}>Sparebanken Vest</Text>
        </View>
      </View>
      <View>
        <Text style={styles.amount}>-50 kr</Text>
        <Text style={styles.date}>02.08.19</Text>
      </View>
    </View>
  );
}

export default Transaction;
const styles = StyleSheet.create({
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 22,
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    width: '100%',
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 23,
    color: '#102463',
  },
  profile: {
    width: 54,
    height: 54,
  },
  bankName: {
    fontSize: 13,
    lineHeight: 18,
    color: '#2E6CC6',
  },
  amount: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 27,
    color: '#102463',
  },
  date: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    color: '#999999',
  },
});
