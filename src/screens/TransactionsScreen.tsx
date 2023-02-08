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
import { format } from 'date-fns';
import { parseISO } from 'date-fns/fp';
import Category from '../components/Category';


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
  amount: "21.00 NOK",
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
  logoUrl: "https://cdn.tink.se/provider-images/uk/uk-revolut.png",
  name: "Revolut"},
  holderName: "Olav Nordmann",
  id: "ed18cb7e78c548ca92997402db63d460",
  name: "BRUKSKONTO",
  ownership: 1,
  type: "checking",
  updatedAt: "2021-10-04T03:48:05Z"},
  amount: "2,116.00 NOK",
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
  logoUrl: "https://cdn.tink.se/provider-images/no/no-sparebank-1-smn.png",
  name: "Nordea",
  },
  holderName: "Olav Nordmann",
  id: "ed18cb7e78c548ca92997402db63d460",
  name: "BRUKSKONTO",
  ownership: 1,
  type: "checking",
  updatedAt: "2021-10-04T03:48:05Z"},
  amount: "-1,71.02 NOK",
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
  logoUrl: "https://cdn.tink.se/provider-images/no/no-sparebank-1-smn.png",
  name: "Nordea",
  },
  holderName: "Olav Nordmann",
  id: "ed18cb7e78c548ca92997402db63d460",
  name: "BRUKSKONTO",
  ownership: 1,
  type: "checking",
  updatedAt: "2021-10-04T03:48:05Z"},
  amount: "171.02 NOK",
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
  name: "Nordea",
  },
  holderName: "Olav Nordmann",
  id: "ed18cb7e78c548ca92997402db63d460",
  name: "BRUKSKONTO",
  ownership: 1,
  type: "checking",
  updatedAt: "2021-10-04T03:48:05Z"},
  amount: "871.02 NOK",
  category: {
  name: "other",
  top: "misc",
  type: "expenses"},
  date: "2023-02-23",
  description: "Mg Tech",
  originalDescription: "MG Tech AS"
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
  amount: "20.00 NOK",
  category: {
  name:"other",
  top: "salary",
  type: "income"},
  date: "2022-12-23",
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
  amount: "-871.02 NOK",
  category: {
  name: "other",
  top: "misc",
  type: "expenses"},
  date: "2022-12-23",
  description: "Mg Tech",
  originalDescription: "MG Tech AS"
}
]
function TransactionsScreen() {
  const [prevDate, setPrevDate] = React.useState('');
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [selectedTab, setSelectedTab] = React.useState(1)
  const onSelectSwitch = index => {
    setSelectedTab(index)
    
  };



  React.useEffect(() => {
    const previous = data.reduce((a, b) => {
      return new Date(a.date) < new Date(b.date) ? a : b;
    });
    setPrevDate( format(parseISO(previous.date), 'MMM yy'))
  }, [])
  

const viewabilityConfig = React.useRef({
  itemVisiblePercentThreshold: 50,
  waitForInteraction: true,
  minimumViewTime: 5,
})

const onViewableItemsChanged = React.useRef(({ viewableItems }) => {
  const index = viewableItems.map(v => v.index);
  
  const currentDate = viewableItems.map(v=> v.item).map(i => i.date);
  setPrevDate(String(currentDate))
  setActiveIndex(index)
})
const filteredTransactions = data.filter((transaction) =>  format(parseISO(transaction.date), 'MMM yy') === prevDate )

  const mapper = single => {
    let dt = format(parseISO(single.date), 'MMM yy')
    let amount = parseFloat(
      single.amount.replace("NOK", " ").replace(",", "").split(" ")
    );;
    return { date: dt, amount: [amount] };
  }
  
  const reducer = (group, current) => {
    let i = group.findIndex(single => (single.date == current.date));
   
    if (i == -1) {
      return [ ...group, current ];
    }
  
    group[i].amount = [...group[i].amount, ...current.amount];
    return group;
  };
  
  
  const sortedData = data.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
  const spendingsData = sortedData.map(mapper).reduce(reducer, []);

  const totalSpending = spendingsData.map(spending => spending.amount.reduce((partialSum, a) => partialSum + a, 0));
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My activity</Text>
        <TouchableOpacity>
          <Image source={require('../../assets/images/plus-icon.png')}></Image>
        </TouchableOpacity>
      </View>
      <ChartHeader income={34.65} spendings={totalSpending[activeIndex]}/>
      <SliderCard onViewableItemsChanged={onViewableItemsChanged} spendingsData={spendingsData} viewabilityConfig={viewabilityConfig} totalSpending={totalSpending} />
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
          data={filteredTransactions}
          renderItem={({ item }) => selectedTab === 1 ? <Transaction item={item} />:<Category item={item} totalSpending={totalSpending}/>}
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
