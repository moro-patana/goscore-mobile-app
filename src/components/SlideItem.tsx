import {StyleSheet, Text, View, Dimensions} from 'react-native';
import * as React from 'react';
const {width, height} = Dimensions.get('screen');
const SlideItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 18,
    color: '#333',
  },
});
