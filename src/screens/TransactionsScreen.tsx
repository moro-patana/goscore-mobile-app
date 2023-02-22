import * as React from 'react';
import {useRef, useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  Platform,
  FlatList,
  Image,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {format} from 'date-fns';
import Transaction from '../components/Transaction';
import ChartHeader from '../components/ChartHeader';
import CustomSwitch from '../components/CustomSwitch';
import Category from '../components/Category';
import ArrowUp from '../../assets/images/arrow-up.png';
import ArrowDown from '../../assets/images/arrow-down.png';

const CARD_WIDTH = Dimensions.get('window').width * 0.8;
const CARD_HEIGHT = Dimensions.get('window').height * 0.38;
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 30;

const transactions = [
  {
    account: {
      accountNumber: 'NO3465806826728',
      availableBalance: '26,137.40 NOK',
      bookedBalance: '26,137.40 NOK',
      financialInstitution: {
        id: 'd8b65f2eedf349679d00252e1e4f6875',
        logoUrl: 'https://cdn.tink.se/provider-images/no/no-nordea.png',
        name: 'Nordea',
      },
      holderName: 'Olav Nordmann',
      id: 'ed18cb7e78c548ca92997402db63d460',
      name: 'BRUKSKONTO',
      ownership: 1,
      type: 'checking',
      updatedAt: '2021-10-04T03:48:05Z',
    },
    amount: '21.00 NOK',
    category: {
      name: 'health',
      top: 'salary',
      type: 'income',
    },
    date: '2023-01-25',
    description: 'GOSCORE',
    originalDescription: 'GOSCORE AS',
  },
  {
    account: {
      accountNumber: 'NO3465806826728',
      availableBalance: '26,137.40 NOK',
      bookedBalance: '26,137.40 NOK',
      financialInstitution: {
        id: 'd8b65f2eedf349679d00252e1e4f6875',
        logoUrl: 'https://cdn.tink.se/provider-images/no/no-nordea.png',
        name: 'Nordea',
      },
      holderName: 'Olav Nordmann',
      id: 'ed18cb7e78c548ca92997402db63d460',
      name: 'BRUKSKONTO',
      ownership: 1,
      type: 'checking',
      updatedAt: '2021-10-04T03:48:05Z',
    },
    amount: '-1,871.02 NOK',
    category: {
      name: 'health',
      top: 'misc',
      type: 'expenses',
    },
    date: '2023-01-24',
    description: 'Norgesgruppen Finans',
    originalDescription: 'NorgesGruppen Finans AS',
  },
  {
    account: {
      accountNumber: 'NO3465806826728',
      availableBalance: '26,137.40 NOK',
      bookedBalance: '26,137.40 NOK',
      financialInstitution: {
        id: 'd8b65f2eedf349679d00252e1e4f6875',
        logoUrl: 'https://cdn.tink.se/provider-images/uk/uk-revolut.png',
        name: 'Revolut',
      },
      holderName: 'Olav Nordmann',
      id: 'ed18cb7e78c548ca92997402db63d460',
      name: 'BRUKSKONTO',
      ownership: 1,
      type: 'checking',
      updatedAt: '2021-10-04T03:48:05Z',
    },
    amount: '2,116.00 NOK',
    category: {
      name: 'salary',
      top: 'salary',
      type: 'income',
    },
    date: '2023-02-06',
    description: 'Revult - 7034',
    originalDescription: 'Revult - 7034',
  },
  {
    account: {
      accountNumber: 'NO3465806826728',
      availableBalance: '26,137.40 NOK',
      bookedBalance: '26,137.40 NOK',
      financialInstitution: {
        id: 'd8b65f2eedf349679d00252e1e4f6875',
        logoUrl:
          'https://cdn.tink.se/provider-images/no/no-sparebank-1-smn.png',
        name: 'Nordea',
      },
      holderName: 'Olav Nordmann',
      id: 'ed18cb7e78c548ca92997402db63d460',
      name: 'BRUKSKONTO',
      ownership: 1,
      type: 'checking',
      updatedAt: '2021-10-04T03:48:05Z',
    },
    amount: '-1,71.02 NOK',
    category: {
      name: 'transport',
      top: 'misc',
      type: 'expenses',
    },
    date: '2023-02-04',
    description: 'Telia Norge As, Telia',
    originalDescription: 'TELIA NORGE AS, Telia',
  },
  {
    account: {
      accountNumber: 'NO3465806826728',
      availableBalance: '26,137.40 NOK',
      bookedBalance: '26,137.40 NOK',
      financialInstitution: {
        id: 'd8b65f2eedf349679d00252e1e4f6875',
        logoUrl:
          'https://cdn.tink.se/provider-images/no/no-sparebank-1-smn.png',
        name: 'Nordea',
      },
      holderName: 'Olav Nordmann',
      id: 'ed18cb7e78c548ca92997402db63d460',
      name: 'BRUKSKONTO',
      ownership: 1,
      type: 'checking',
      updatedAt: '2021-10-04T03:48:05Z',
    },
    amount: '12.02 NOK',
    category: {
      name: 'transport',
      top: 'misc',
      type: 'expenses',
    },
    date: '2023-02-04',
    description: 'Telia Norge As, Telia',
    originalDescription: 'TELIA NORGE AS, Telia',
  },
  {
    account: {
      accountNumber: 'NO3465806826728',
      availableBalance: '26,137.40 NOK',
      bookedBalance: '26,137.40 NOK',
      financialInstitution: {
        id: 'd8b65f2eedf349679d00252e1e4f6875',
        logoUrl: 'https://cdn.tink.se/provider-images/no/no-nordea.png',
        name: 'Nordea',
      },
      holderName: 'Olav Nordmann',
      id: 'ed18cb7e78c548ca92997402db63d460',
      name: 'BRUKSKONTO',
      ownership: 1,
      type: 'checking',
      updatedAt: '2021-10-04T03:48:05Z',
    },
    amount: '871.02 NOK',
    category: {
      name: 'salary',
      top: 'misc',
      type: 'expenses',
    },
    date: '2023-02-23',
    description: 'Mg Tech',
    originalDescription: 'MG Tech AS',
  },
  {
    account: {
      accountNumber: 'NO3465806826728',
      availableBalance: '26,137.40 NOK',
      bookedBalance: '26,137.40 NOK',
      financialInstitution: {
        id: 'd8b65f2eedf349679d00252e1e4f6875',
        logoUrl: 'https://cdn.tink.se/provider-images/no/no-nordea.png',
        name: 'Nordea',
      },
      holderName: 'Olav Nordmann',
      id: 'ed18cb7e78c548ca92997402db63d460',
      name: 'BRUKSKONTO',
      ownership: 1,
      type: 'checking',
      updatedAt: '2021-10-04T03:48:05Z',
    },
    amount: '20.00 NOK',
    category: {
      name: 'salary',
      top: 'salary',
      type: 'income',
    },
    date: '2022-12-23',
    description: 'REMA 1000',
    originalDescription: 'REMA MARKEN C/O REMA 100 BERGEN',
  },
  {
    account: {
      accountNumber: 'NO3465806826728',
      availableBalance: '26,137.40 NOK',
      bookedBalance: '26,137.40 NOK',
      financialInstitution: {
        id: 'd8b65f2eedf349679d00252e1e4f6875',
        logoUrl: 'https://cdn.tink.se/provider-images/no/no-nordea.png',
        name: 'Nordea',
      },
      holderName: 'Olav Nordmann',
      id: 'ed18cb7e78c548ca92997402db63d460',
      name: 'BRUKSKONTO',
      ownership: 1,
      type: 'checking',
      updatedAt: '2021-10-04T03:48:05Z',
    },
    amount: '-871.02 NOK',
    category: {
      name: 'salary',
      top: 'misc',
      type: 'expenses',
    },
    date: '2022-12-23',
    description: 'Mg Tech',
    originalDescription: 'MG Tech AS',
  },
];
interface DataObject {
  account: {
    accountNumber: string;
    availableBalance: string;
    bookedBalance: string;
    financialInstitution: {
      id: string;
      logoUrl: string;
      name: string;
    };
    holderName: string;
    id: string;
    name: string;
    ownership: number;
    type: string;
    updatedAt: string;
  };
  amount: string;
  category: {
    name: string;
    top: string;
    type: string;
  };
  date: string;
  description: string;
  originalDescription: string;
}

interface GroupedData {
  year: number;
  month: number;
  data: DataObject[];
  amounts: number[];
}
type CategoryStats = {totalAmount: number; count: number; transactions: any};
type Categories = {[name: string]: CategoryStats};

const TransactionsScreen = ({navigation}) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTab, setSelectedTab] = React.useState(1);

  const onSelectSwitch = index => {
    setSelectedTab(index);
  };

  const handleCardChange = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const index = Math.round(contentOffset.x / 320);
    setActiveIndex(index);
  };

  const chartConfig = {
    backgroundColor: '#102463',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 0.82) => `rgba(46, 108, 198,${opacity})`,
    labelColor: (opacity = 1) => `rgba(196, 196, 196,${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,

    propsForDots: {
      r: '6',
      strokeWidth: '5',
      stroke: '#fff',
      fill: '#102463',
    },
    propsForBackgroundLines: {
      color: '#C4C4C4',
      stroke: '#C4C4C4',
      strokeDasharray: [4],
    },
    xAxis: {
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      fontFamily: 'Arial',
      fontWeight: 'bold',
      fontSize: 10,
      marginHorizontal: -10,
    },
  };
  const groupedData: Record<string, {data: DataObject[]; amounts: number[]}> =
    transactions.reduce((acc, curr) => {
      const dateStr = curr.date;
      if (dateStr) {
        const date = new Date(dateStr);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        const key = `${year}-${month}`;
        if (!acc[key]) {
          acc[key] = {
            data: [],
            amounts: [],
          };
        }
        acc[key].data.push(curr);
        acc[key].amounts.push(parseFloat(curr.amount.replace(/[^\d.-]/g, '')));
      }
      return acc;
    }, {});

  const groupedArray: GroupedData[] = Object.entries(groupedData).map(
    ([key, value]) => ({
      year: parseInt(key.split('-')[0]),
      month: parseInt(key.split('-')[1]),
      data: value.data,
      amounts: value.amounts,
    }),
  );

  const sortedData = groupedArray
    .sort((a, b) => {
      const dateA = new Date(a.year, a.month - 1, 1);
      const dateB = new Date(b.year, b.month - 1, 1);
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    })
    .map(item => {
      const date = new Date(item.year, item.month - 1, 1);
      const formattedMonthAndYear = format(date, 'MMM yy');
      return {...item, formattedMonthAndYear};
    });

  const totalSpending = sortedData.map(spending =>
    spending.amounts.reduce((partialSum, a) => partialSum + a, 0),
  );
  const totalSumOfSpending = totalSpending.reduce(
    (acc, o) => Math.round(acc + o),
    0,
  );

  const categories: Categories = groupedArray[activeIndex].data
    .flat()
    .reduce((acc, curr) => {
      const categoryName = curr.category.name;
      acc[categoryName] = acc[categoryName] || {
        totalAmount: 0,
        count: 0,
        transactions: [],
      };
      (acc[categoryName].totalAmount += parseFloat(
        curr.amount.replace('NOK', ' ').replace(',', ''),
      )),
        (acc[categoryName].count += 1);
      acc[categoryName].transactions.push(curr);
      return acc;
    }, {});

  const categoriesArray = Object.entries(categories).map(
    ([name, {totalAmount, count, transactions}]) => ({
      name,
      totalAmount,
      count,
      transactions,
    }),
  );

  const totalSumCategoriesAmount = categoriesArray.reduce(
    (acc, o) => acc + o.totalAmount,
    0,
  );

  return (
    <View style={styles.container}>
      <ChartHeader income={34.65} spendings={totalSpending[activeIndex]} />
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        decelerationRate={0}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 10}
        snapToAlignment="start"
        onMomentumScrollEnd={handleCardChange}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}>
        {sortedData.map((item, index) => (
          <View
            key={index}
            style={{
              height: Dimensions.get('window').height / 3,
            }}>
            <View style={{paddingLeft: 16}}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '400',
                  lineHeight: 19,
                  color: '#999999',
                }}>
                {item.formattedMonthAndYear}
              </Text>
            </View>
            <View style={[styles.card, styles.activeCard]}>
              <View
                style={{
                  paddingHorizontal: 16,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <View
                  style={{
                    alignSelf: 'flex-start',
                    paddingLeft: 10,
                  }}>
                  <Text
                    style={{
                      color: '#102463',
                      fontSize: 13,
                      fontWeight: '500',
                      lineHeight: 17,
                    }}>
                    Spent
                  </Text>
                  <Text
                    style={{
                      color: '#102463',
                      fontSize: 17,
                      fontWeight: '700',
                      lineHeight: 23,
                    }}>
                    {item.amounts.reduce((a, b) => a + b, 0)} kr
                  </Text>
                </View>
                {selectedTab != 1 && (
                  <View style={styles.percentageWrapper}>
                    <Text
                      style={{
                        ...styles.percentage,
                        color:
                          totalSpending[activeIndex] > 0
                            ? '#00DB90'
                            : '#EF253D',
                      }}>
                      {(
                        (totalSpending[activeIndex] / totalSumOfSpending) *
                        100
                      ).toFixed(2)}
                      %
                    </Text>
                    <Image
                      source={
                        totalSpending[activeIndex] > 0 ? ArrowUp : ArrowDown
                      }></Image>
                  </View>
                )}
              </View>
              <View
                style={{
                  margin: 0,
                  paddingTop: 6,
                }}>
                <LineChart
                  data={{
                    labels: ['05', '10', '15', '20', '25'],
                    datasets: [
                      {
                        data: item.amounts,
                      },
                    ],
                  }}
                  width={CARD_WIDTH - 30}
                  height={CARD_HEIGHT / 1.5}
                  yAxisLabel={'$'}
                  yAxisSuffix="k"
                  chartConfig={chartConfig}
                  bezier
                  style={{marginLeft: -20, backgroundColor: 'red'}}
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          marginHorizontal: 28,
          marginBottom: 20,
          flex: 1,
          justifyContent: 'flex-start',
        }}>
        <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={'Transactions'}
          option2={'Categories'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'white'}
        />
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          paddingLeft: 15,
          paddingRight: 17,
          backgroundColor: 'white',
        }}>
        {selectedTab === 1 ? (
          <FlatList
            data={groupedArray[activeIndex].data.flat()}
            renderItem={({item}) => <Transaction item={item} />}
            pagingEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <FlatList
            data={categoriesArray}
            renderItem={({item}) => (
              <Category
                item={item}
                totalSum={totalSumCategoriesAmount}
                navigation={navigation}
              />
            )}
            pagingEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 0,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT / 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 10,
  },
  activeCard: {
    transform: [{scale: 1}],
  },
  date: {
    fontSize: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listItemDescription: {
    fontSize: 14,
  },
  listItemTime: {
    fontSize: 12,
    color: '#999999',
    marginTop: 5,
  },
  percentageWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 5,
  },
  percentage: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  },
});

export default TransactionsScreen;
