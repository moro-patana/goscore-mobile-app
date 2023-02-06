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
const data = [
  {
  account: {
  accountNumber: "NO3465806826728",
  availableBalance: "26,137.40 NOK",
  bookedBalance: "26,137.40 NOK",
  financialInstitution: {
  id: "d8b65f2eedf349679d00252e1e4f6875",
  logoUrl: "https://cdn.tink.se/provider-images/no/no-nordea.png",
  name: "Nordea"},
  holderName: "Olav Nordmann",
  id: "ed18cb7e78c548ca92997402db63d460",
  name: "BRUKSKONTO",
  ownership: 1,
  type: "checking",
  updatedAt: "2021-10-04T03:48:05Z"},
  amount: "21,216.00 NOK",
  category: {
  name:"other",
  top: "salary",
  type: "income"},
  date: "2023-01-25",
  description: "GOSCORE",
  originalDescription: "GOSCORE AS"
},
  {
  account: {
  accountNumber: "NO3465806826728",
  availableBalance: "26,137.40 NOK",
  bookedBalance: "26,137.40 NOK",
  financialInstitution: {
  id: "d8b65f2eedf349679d00252e1e4f6875",
  logoUrl: "https://cdn.tink.se/provider-images/no/no-nordea.png",
  name: "Nordea",
  },
  holderName: "Olav Nordmann",
  id: "ed18cb7e78c548ca92997402db63d460",
  name: "BRUKSKONTO",
  ownership: 1,
  type: "checking",
  updatedAt: "2021-10-04T03:48:05Z"},
  amount: "-1,871.02 NOK",
  category: {
  name: "other",
  top: "misc",
  type: "expenses"},
  date: "2023-01-24",
  description: "Norgesgruppen Finans",
  originalDescription: "NorgesGruppen Finans AS"
},
{
  account: {
  accountNumber: "NO3465806826728",
  availableBalance: "26,137.40 NOK",
  bookedBalance: "26,137.40 NOK",
  financialInstitution: {
  id: "d8b65f2eedf349679d00252e1e4f6875",
  logoUrl: "https://cdn.tink.se/provider-images/no/no-nordea.png",
  name: "Nordea"},
  holderName: "Olav Nordmann",
  id: "ed18cb7e78c548ca92997402db63d460",
  name: "BRUKSKONTO",
  ownership: 1,
  type: "checking",
  updatedAt: "2021-10-04T03:48:05Z"},
  amount: "21,216.00 NOK",
  category: {
  name:"other",
  top: "salary",
  type: "income"},
  date: "2023-02-06",
  description: "Revult - 7034",
  originalDescription: "Revult - 7034"
},
  {
  account: {
  accountNumber: "NO3465806826728",
  availableBalance: "26,137.40 NOK",
  bookedBalance: "26,137.40 NOK",
  financialInstitution: {
  id: "d8b65f2eedf349679d00252e1e4f6875",
  logoUrl: "https://cdn.tink.se/provider-images/no/no-nordea.png",
  name: "Nordea",
  },
  holderName: "Olav Nordmann",
  id: "ed18cb7e78c548ca92997402db63d460",
  name: "BRUKSKONTO",
  ownership: 1,
  type: "checking",
  updatedAt: "2021-10-04T03:48:05Z"},
  amount: "-1,871.02 NOK",
  category: {
  name: "other",
  top: "misc",
  type: "expenses"},
  date: "2023-02-04",
  description: "Telia Norge As, Telia",
  originalDescription: "TELIA NORGE AS, Telia"
},
{
  account: {
  accountNumber: "NO3465806826728",
  availableBalance: "26,137.40 NOK",
  bookedBalance: "26,137.40 NOK",
  financialInstitution: {
  id: "d8b65f2eedf349679d00252e1e4f6875",
  logoUrl: "https://cdn.tink.se/provider-images/no/no-nordea.png",
  name: "Nordea"},
  holderName: "Olav Nordmann",
  id: "ed18cb7e78c548ca92997402db63d460",
  name: "BRUKSKONTO",
  ownership: 1,
  type: "checking",
  updatedAt: "2021-10-04T03:48:05Z"},
  amount: "21,216.00 NOK",
  category: {
  name:"other",
  top: "salary",
  type: "income"},
  date: "2023-12 -23",
  description: "REMA 1000",
  originalDescription: "REMA MARKEN C/O REMA 100 BERGEN"
},
  {
  account: {
  accountNumber: "NO3465806826728",
  availableBalance: "26,137.40 NOK",
  bookedBalance: "26,137.40 NOK",
  financialInstitution: {
  id: "d8b65f2eedf349679d00252e1e4f6875",
  logoUrl: "https://cdn.tink.se/provider-images/no/no-nordea.png",
  name: "Nordea",
  },
  holderName: "Olav Nordmann",
  id: "ed18cb7e78c548ca92997402db63d460",
  name: "BRUKSKONTO",
  ownership: 1,
  type: "checking",
  updatedAt: "2021-10-04T03:48:05Z"},
  amount: "-1,871.02 NOK",
  category: {
  name: "other",
  top: "misc",
  type: "expenses"},
  date: "2023-12-23",
  description: "Mg Tech",
  originalDescription: "MG Tech AS"
}
]
function TransactionsScreen() {
  const [transactionsData, setransactionsData] = React.useState([TransationsData])
  const onSelectSwitch = index => {
    console.log('selected');
  };

  const onViewableItemsChanged = ({ viewableItems, changed }) => {
    console.log("Visible items are", changed.map(i => i.item));
    // return viewableItems
    // console.log("Visible items are", viewableItems);
    // console.log("Changed in this iteration", changed);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My activity</Text>
        <TouchableOpacity>
          <Image source={require('../../assets/images/plus-icon.png')}></Image>
        </TouchableOpacity>
      </View>
      <ChartHeader income={34.65} spendings={13.516} />
      <SliderCard onViewableItemsChanged={onViewableItemsChanged} />
      <View style={{ marginHorizontal: 28, marginTop: 20, flex: 0.4 }}>
        <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={'Transactions'}
          option2={'Categories'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'white'}
        />
      </View>
      <View style={{ flex: 3, paddingLeft: 15, paddingRight: 17, paddingTop: 20 }}>
        <FlatList
          data={data}
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
