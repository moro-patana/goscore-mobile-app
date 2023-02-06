import * as React from 'react';

import {  StyleSheet, SafeAreaView, FlatList, Dimensions } from 'react-native';
import SlideItem from './SlideItem';
const slides = [
  {title: 'Slide1', description: 'this is slide 1', date: '2023-02-02T07:39:09.269Z'},
  {title: 'Slide2', description: 'this is slide 2', date: '2023-03-03T07:39:09.269Z'},
  {title: 'Slide3', description: 'this is slide 3', date: '2023-01-01T07:39:09.269Z'},
];
const {width, height} = Dimensions.get('window')
export default function SliderCard({ onViewableItemsChanged}) {

 const sortedData = slides.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
console.log('sortedData', sortedData);

  return (
    <SafeAreaView style={styleSheet.MainContainer}>
      <FlatList
        data={sortedData}
        renderItem={({ item}) => <SlideItem item={item} />}
        horizontal={true}
        initialScrollIndex={1}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
      />

    </SafeAreaView>
  );
}

const styleSheet = StyleSheet.create({

  MainContainer: {
    flex: 3,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
  },


  item: {
    padding: 8,
    backgroundColor: '#ffffff',
    width: width / 1.3,
    height: height / 3.6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    margin: 15
  },

  itemText: {
    fontSize: 24,
    color: 'red',
    textAlign: 'center'
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

});