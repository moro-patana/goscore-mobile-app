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
  
  return (
    <View style={[styles.card,styles.elevation,styles.shadowProp]}>
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
        width={width / 1.3}
        height={height / 5}
        yAxisLabel={'$'}
        yAxisSuffix="k"
        chartConfig={{
          backgroundColor: '#FFFFFF',
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
  );
};
export default SlideItem;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: 'white',
    height: height / 3.5,
    borderRadius: 13,
    padding: 16
  },
  elevation: {  
    shadowColor: '#52006A',  
    elevation: 20,  
  },
  shadowProp: {  
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,  
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
  }
})
