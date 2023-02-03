// import {StyleSheet, Text, View, Dimensions} from 'react-native';
import * as React from 'react';
// const {width, height} = Dimensions.get('screen');

// import {LineChart} from 'react-native-charts-wrapper';

// const Chart = ({item}) => {
//   return (
//     <View style={[styles.container, styles.elevation]}>
//       <LineChart
//         style={styles.chart}
//         data={{
//           dataSets: [{label: 'Spent', values: [{y: 1}, {y: 2}, {y: 1}]}],
//         }}
//       />
//     </View>
//   );
// };

// export default Chart;

// const styles = StyleSheet.create({
//   container: {
//     width: width / 1.2,
//     height: height / 3,
//     flex: 1,
//     backgroundColor: 'white',
//     paddingTop: 18,
//     paddingHorizontal: 11,
//     paddingBottom: 21,
//     borderRadius: 13,
//     marginVertical: 20,
//     marginHorizontal: 10,
//   },
//   elevation: {
//     shadowColor: 'black',
//     elevation: 10,
//   },
//   chart: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });
import {
  Text,
  Dimensions,
} from 'react-native';
import {
  LineChart,
} from 'react-native-chart-kit';
const SlideItem = ({item}) => {
  return (
    <>
      {/* <Text>{item.title}</Text> */}
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
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel={'$'}
        yAxisSuffix="k"
        chartConfig={{
          backgroundColor: '#FFFFFF',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 0.82) => `rgba(46, 108, 198,${opacity})`,
          labelColor: (opacity = 1) => `rgba(196, 196, 196,${opacity})`,
          style: {
            borderRadius: 16,
          },
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
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};
export default SlideItem
