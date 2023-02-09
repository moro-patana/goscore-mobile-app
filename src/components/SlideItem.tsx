import * as React from 'react'

import {Text, Dimensions, View, StyleSheet, Image} from 'react-native'
import {LineChart} from 'react-native-chart-kit'
import ArrowUp from '../../assets/images/arrow-up.png'
import ArrowDown from '../../assets/images/arrow-down.png'

const {width, height} = Dimensions.get('window')
const SlideItem = ({item, totalSpending, allDataAmount, selectedTab}) => {
  function percentage (percent, total) {
    return ((percent / total) * 100).toFixed(2)
  }
  const percentResult = percentage(totalSpending, allDataAmount)
  return (
    <View>
      <Text style={styles.period}>{item.date}</Text>

      <View style={[styles.card, styles.elevation, styles.shadowProp]}>
        <View
          style={{
            paddingHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.title}>spent</Text>
            <Text style={styles.totalSpending}>{totalSpending} Kr</Text>
          </View>
          {selectedTab != 1 && (
            <View style={styles.percentageWrapper}>
              <Text
                style={{
                  ...styles.percentage,
                  color: totalSpending > 0 ? '#00DB90' : '#EF253D',
                }}>
                {percentResult}%
              </Text>
              <Image source={totalSpending > 0 ? ArrowUp : ArrowDown}></Image>
            </View>
          )}
        </View>

        <LineChart
          data={{
            labels: ['05', '10', '15', '20', '25'],
            datasets: [
              {
                data: item.amount,
              },
            ],
          }}
          width={width / 1.3}
          height={height / 5}
          yAxisLabel={'$'}
          yAxisSuffix='k'
          chartConfig={{
            backgroundColor: '#102463',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 0.82) => `rgba(46, 108, 198,${opacity})`,
            labelColor: (opacity = 1) => `rgba(196, 196, 196,${opacity})`,

            propsForDots: {
              r: '6',
              strokeWidth: '5',
              stroke: '#fff',
            },
            propsForBackgroundLines: {
              color: '#C4C4C4',
              stroke: '#C4C4C4',
              strokeDasharray: [4],
            },
            useShadowColorFromDataset: true,
          }}
          bezier
        />
      </View>
    </View>
  )
}
export default SlideItem

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: '#ffffff',
    width: width / 1.1,
    height: height / 3.6,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 13,
    margin: 8,
  },
  elevation: {
    shadowColor: '#52006A',
    elevation: 20,
  },
  shadowProp: {
    shadowOffset: {width: 0, height: 3},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {fontSize: 13, lineHeight: 18, fontWeight: '500', color: '#102463'},
  totalSpending: {
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '700',
    color: '#102463',
    paddingBottom: 8,
  },
  period: {
    fontSize: 17,
    fontWeight: '400',
    color: '#999999',
    paddingLeft: 10,
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
})
