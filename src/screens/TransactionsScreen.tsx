import * as React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Transaction from '../components/Transaction';
import {sm} from '../components/SizeHelper';
import ChartHeader from '../components/ChartHeader';
import CustomSwitch from '../components/CustomSwitch';

function TransactionsScreen() {
  const onSelectSwitch = index => {
    // alert('Selected index: ' + index);
    console.log('selected');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My activity</Text>
        <TouchableOpacity>
          <Image source={require('../../assets/images/plus-icon.png')}></Image>
        </TouchableOpacity>
      </View>
      <ChartHeader income={34.65} spendings={13.516} />
      <View style={{marginHorizontal: 28}}>
        <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={'Transactions'}
          option2={'Categories'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'white'}
        />
      </View>
      <View style={{flex: 6, paddingLeft: 15, paddingRight: 17}}>
        <Transaction />
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
    flex: 1,
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
