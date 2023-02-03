import {StyleSheet, Text, View, Dimensions} from 'react-native';
import * as React from 'react';
const {width, height} = Dimensions.get('screen');

import {LineChart} from 'react-native-charts-wrapper';

const Chart = ({item}) => {
  return (
    <View style={[styles.container, styles.elevation]}>
      <LineChart
        style={styles.chart}
        data={{
          dataSets: [{label: 'Spent', values: [{y: 1}, {y: 2}, {y: 1}]}],
        }}
      />
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    width: width / 1.2,
    height: height / 3,
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 18,
    paddingHorizontal: 11,
    paddingBottom: 21,
    borderRadius: 13,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  elevation: {
    shadowColor: 'black',
    elevation: 10,
  },
  chart: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
