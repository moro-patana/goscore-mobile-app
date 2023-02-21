import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import * as React from 'react';
import TravelingIcon from '../../assets/images/traveling.png';
import HealthIcon from '../../assets/images/health.png';
import IncomeIcon from '../../assets/images/income.png';
import CarIcon from '../../assets/images/car.png';
import Transaction from './Transaction';
const {width} = Dimensions.get('window');
const CategoryDetails = ({route, navigation}) => {
  const item = route.params.item;
  console.log(width / 4.9, 'width');

  const getCategoryIcon = category => {
    switch (category) {
      case 'traveling':
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
      case 'traveling':
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
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/category-details-bg.png')}
        style={styles.bigImage}
      />
      <Image source={getCategoryIcon(item.name)} style={styles.smallImage} />
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Text style={styles.amount}>{Math.abs(item.totalAmount)} kr</Text>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
          }}>
          <Text style={styles.category}>{getCategoryName(item.name)}</Text>
          {/* <Text style={styles.description}>{item.description}</Text> */}
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 16,
          paddingTop: 70,
        }}>
        <Text style={styles.relatedTransactionTitle}>Related transactions</Text>
        <FlatList
          data={item.transactions}
          renderItem={({item}) => <Transaction item={item} />}
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default CategoryDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  bigImage: {
    width: '100%',
    height: '60%',
    position: 'absolute',
    top: '-25%',
  },
  smallImage: {
    position: 'absolute',
    top: '18%',
    left: '40%',
    width: width / 4.9,
    height: width / 4.9,
  },
  amount: {
    fontWeight: '700',
    fontSize: 36,
    color: '#2E6CC6',
  },
  category: {
    fontWeight: '700',
    fontSize: 20,
    color: '#102463',
    textTransform: 'capitalize',
  },
  description: {
    fontWeight: '400',
    fontSize: 17,
    color: '#2E6CC6',
    paddingTop: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    color: '#2E6CC6',
    padding: 16,
  },
  relatedTransactionTitle: {
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 23,
    color: '#2E6CC6',
    textAlign: 'center',
  },
});
