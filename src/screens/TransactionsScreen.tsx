import * as React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import Transaction from '../components/Transaction';
import { sm } from '../components/SizeHelper';
import ChartHeader from '../components/ChartHeader';
import CustomSwitch from '../components/CustomSwitch';
import SliderCard from '../components/SliderCard';

function TransactionsScreen() {
  const onSelectSwitch = index => {
    console.log('selected');
  };
  const TransationsData = [
    {
      name: 'John Doe', profile: '../../assets/images/profile.png', bankName: 'Sparebanken Vest', amount: -50, date: '2023-02-01T07:39:09.269Z'
    },
    {
      name: 'goscore AS', profile: '../../assets/images/profile.png', bankName: 'Visa Gold 4507', amount: 30000, date: '2023-02-03T07:39:09.269Z'
    },
    {
      name: 'John Doe', profile: '../../assets/images/profile.png', bankName: 'Sparebanken Vest', amount: -50, date: '2023-02-03T07:39:09.269Z'
    },
    {
      name: 'John Doe', profile: '../../assets/images/profile.png', bankName: 'Sparebanken Vest', amount: -50, date: '2023-02-01T07:39:09.269Z'
    },
    {
      name: 'goscore AS', profile: '../../assets/images/profile.png', bankName: 'Visa Gold 4507', amount: 30000, date: '2023-02-01T07:39:09.269Z'
    },
    {
      name: 'John Doe', profile: '../../assets/images/profile.png', bankName: 'Sparebanken Vest', amount: -50, date: '2023-02-02T07:39:09.269Z'
    },
  ]
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My activity</Text>
        <TouchableOpacity>
          <Image source={require('../../assets/images/plus-icon.png')}></Image>
        </TouchableOpacity>
      </View>
      <ChartHeader income={34.65} spendings={13.516} />
      <SliderCard />
      <View style={{ marginHorizontal: 28, marginTop: 30 }}>
        <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={'Transactions'}
          option2={'Categories'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'white'}
        />
      </View>
      <View style={{ flex: 2, paddingLeft: 15, paddingRight: 17, paddingTop: 20 }}>
        <FlatList
          data={TransationsData}
          renderItem={({ item }) => <Transaction item={item} />}
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

export default TransactionsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  header: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 1,
    paddingLeft: 15,
    paddingRight: 17,
  },
  title: {
    fontSize: sm,
    fontWeight: '400',
    lineHeight: 22,
    color: '#2E6CC6',
  },
  buttonContainer: {
    backgroundColor: 'rgba(118, 118, 128, 0.12)',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 28,
  },
  button: {
    fontSize: 13,
    paddingVertical: 3,
    paddingHorizontal: 8,
    width: '50%',
    borderRadius: 15,
  },
});
