import * as React from 'react';

import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import SlideItem from './SlideItem';

const {width, height} = Dimensions.get('window');
export default function SliderCard({
  onViewableItemsChanged,
  spendingsData,
  viewabilityConfig,
  totalSpending,
  allDataAmount,
  selectedTab,
}) {
  const flatList = React.useRef<FlatList>(null);

  return (
    <View style={styleSheet.MainContainer}>
      <FlatList
        ref={flatList}
        data={spendingsData}
        renderItem={({item, index}) => (
          <SlideItem
            item={item}
            totalSpending={totalSpending[index]}
            allDataAmount={allDataAmount}
            selectedTab={selectedTab}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            flatList.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
      />
    </View>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 3,
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
    margin: 15,
  },

  itemText: {
    fontSize: 24,
    color: 'red',
    textAlign: 'center',
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
