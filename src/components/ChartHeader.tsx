// import * as React from 'react';
// import {
//   View,
//   Text,
//   ImageBackground,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';
// import {sm} from './SizeHelper';

// const {width, height} = Dimensions.get('window');
// function ChartHeader({income, spendings}) {
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={require('../../assets/images/transaction-bg.png')}
//         resizeMode="cover"
//         style={{
//           width: width,
//           height: height / 4,
//           position: 'absolute',
//           top: '-80%',
//         }}></ImageBackground>
//       <View style={styles.header}>
//         <View style={styles.headerItem}>
//           <Text style={styles.title}>Income</Text>
//           <Text style={styles.amount}>{income} Kr</Text>
//         </View>
//         <View style={styles.headerItem}>
//           <Text style={styles.title}>Spendings</Text>
//           <Text style={styles.amount}>{Math.abs(spendings)} Kr</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// export default ChartHeader;
// const styles = StyleSheet.create({
//   container: {
//     flex: 2,
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     width: '100%',
//     bottom: '4%',
//   },
//   headerItem: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     color: '#ffffff',
//     fontSize: sm,
//     textTransform: 'lowercase',
//   },
//   amount: {
//     color: '#ffffff',
//     fontSize: sm,
//     fontWeight: '700',
//   },
// });
import * as React from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: width,
    height: height / 4.2,
    resizeMode: 'cover',
    position: 'absolute',
    top: '-140%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: 20,
  },
  headerItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 13,
    textTransform: 'lowercase',
  },
  amount: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
  },
});

const ChartHeader = ({income, spendings}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/transaction-bg.png')}
        style={styles.image}
      />
      <View style={styles.header}>
        <View style={styles.headerItem}>
          <Text style={styles.title}>Income</Text>
          <Text style={styles.amount}>{income} Kr</Text>
        </View>
        <View style={styles.headerItem}>
          <Text style={styles.title}>Spendings</Text>
          <Text style={styles.amount}>{Math.abs(spendings)} Kr</Text>
        </View>
      </View>
    </View>
  );
};

export default ChartHeader;
