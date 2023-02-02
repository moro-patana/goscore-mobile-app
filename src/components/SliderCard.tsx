import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import SlideItem from './SlideItem';
const slides = [
  {title: 'Slide1', description: 'this is slide 1'},
  {title: 'Slide2', description: 'this is slide 2'},
  {title: 'Slide3', description: 'this is slide 3'},
];

const SliderCard = () => {
  return (
    <View>
      <FlatList
        data={slides}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SliderCard;

const styles = StyleSheet.create({});
