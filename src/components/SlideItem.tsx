import { format, parseISO } from 'date-fns';
import * as React from 'react';

import {
  Text,
  Dimensions,
  View,
  StyleSheet,
} from 'react-native';
import {
  LineChart,
} from 'react-native-chart-kit';

const {width, height}= Dimensions.get('window')
const SlideItem = ({item}) => {
  const period = format(parseISO(item.date), "LLL yy")
  console.log(period, 'period');
  
  return (
    <View>
    <Text style = {styles.period}>{period}</Text>
    
    <View style={[styles.card, styles.elevation, styles.shadowProp]}>
      <View>
      <Text style={styles.title}>spent</Text>
      <Text style={styles.totalSpending}>13.516 Kr</Text>
      </View>
      
      <LineChart
        data={{
          labels: ['05', '10', '15', '20', '25'],
          datasets: [
            {
              data: [
                20, 25, 50, 12, 100
              ],
            },
          ],
        }}
        width={width / 1.4}
        height={height / 5}
        yAxisLabel={'$'}
        yAxisSuffix="k"
        chartConfig={{
          backgroundColor: '#102463',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 0.82) => `rgba(46, 108, 198,${opacity})`,
          labelColor: (opacity = 1) => `rgba(196, 196, 196,${opacity})`,
         
          propsForDots: {
            r: "6",
            strokeWidth: "5",
            stroke: "#fff"
        },
        propsForBackgroundLines: {
          color: '#C4C4C4',
          stroke: '#C4C4C4',
          strokeDasharray:[4],
        },
        useShadowColorFromDataset: true
        
        }}
        bezier
        
      />
    </View>
    </View>
  );
};
export default SlideItem;

const styles = StyleSheet.create({
  
  card: {
    padding: 8,
    backgroundColor: '#ffffff',
    width: width / 1.3,
    height: height / 3.6,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 13,
    margin: 10
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
  title: {fontSize: 13,
    lineHeight: 18,
    fontWeight: '500',
    color: '#102463'},
  totalSpending: {
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '700',
    color: '#102463',
    paddingBottom:8
  },
  period : {
    fontSize: 17,
    fontWeight: '400',
    color: '#999999',
    paddingLeft: 10
  }
})
