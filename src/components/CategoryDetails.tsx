import {StyleSheet, Text, View, Image} from 'react-native'
import * as React from 'react'
import TravelingIcon from '../../assets/images/traveling.png'
import HealthIcon from '../../assets/images/health.png'
import IncomeIcon from '../../assets/images/income.png'
import CarIcon from '../../assets/images/car.png'

const CategoryDetails = ({route, navigation}) => {
  const item = route.params.item
  const value = parseFloat(
    item.amount.replace('NOK', ' ').replace(',', '').split(' '),
  )
  const getCategoryIcon = category => {
    switch (category) {
      case 'traveling':
        return TravelingIcon
      case 'health':
        return HealthIcon
      case 'salary':
        return IncomeIcon
      case 'car':
        return CarIcon
      default:
        return TravelingIcon
    }
  }

  const getCategoryName = category => {
    switch (category) {
      case 'traveling':
        return 'traveling'
      case 'health':
        return 'health'
      case 'salary':
        return 'income'
      case 'transport':
        return 'transport'
      case 'misc':
        return 'other'
      default:
        return null
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/category-details-bg.png')}
        style={styles.bigImage}
      />
      <Image
        source={getCategoryIcon(item.category.top)}
        style={styles.smallImage}
      />
      <View>
        <Text style={styles.amount}>{value} kr</Text>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
          }}>
          <Text style={styles.category}>
            {getCategoryName(item.category.top)}
          </Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </View>
  )
}

export default CategoryDetails

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
    width: 83,
    height: 82,
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
})
