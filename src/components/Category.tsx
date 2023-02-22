import * as React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TravelingIcon from '../../assets/images/traveling.png';
import HealthIcon from '../../assets/images/health.png';
import IncomeIcon from '../../assets/images/income.png';
import CarIcon from '../../assets/images/car.png';
import ArrowUp from '../../assets/images/arrow-up.png';
import ArrowDown from '../../assets/images/arrow-down.png';

function Category({item, totalSum, navigation}) {
  const percentage = (item.totalAmount / totalSum) * 100;

  const getCategoryIcon = category => {
    switch (category) {
      case 'transport':
        return TravelingIcon;
      case 'health':
        return HealthIcon;
      case 'salary':
        return IncomeIcon;
      case 'car':
        return CarIcon;
      default:
        return TravelingIcon;
    }
  };

  const getCategoryName = category => {
    switch (category) {
      case 'transport':
        return 'traveling';
      case 'health':
        return 'health';
      case 'salary':
        return 'income';
      case 'transport':
        return 'transport';
      case 'misc':
        return 'other';
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ItemDetails', {item})}>
      <View style={styles.category}>
        <View style={{flexDirection: 'row', gap: 13, alignItems: 'center'}}>
          <Image style={styles.profile} source={getCategoryIcon(item.name)} />
          <View>
            <Text style={styles.categoryName}>
              {getCategoryName(item.name)}
            </Text>
            <Text style={styles.bankName}>
              {item.count} {item.count > 1 ? 'Transactions' : 'Transaction'}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.amount}>{Math.abs(item.totalAmount)} kr</Text>
          <View style={styles.percentageWrapper}>
            <Text
              style={{
                ...styles.percentage,
                color: percentage > 0 ? '#00DB90' : '#EF253D',
              }}>
              {percentage.toFixed(2)}%
            </Text>
            <Image source={percentage > 0 ? ArrowUp : ArrowDown}></Image>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Category;
const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    width: '100%',
  },
  categoryName: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 23,
    color: '#102463',
    textTransform: 'capitalize',
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
  percentageWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 5,
  },
  percentage: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  },
});
