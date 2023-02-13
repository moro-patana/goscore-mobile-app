import * as React from 'react'
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native'
const {width, height} = Dimensions.get('window')

const SpendingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/spending_tracking.png')}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Spending tracking</Text>
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>
          With{' '}
          <TouchableOpacity
            onPress={() => Linking.openURL('https://goscore.me')}>
            <Image
              source={require('../../../assets/images/goscore_logo.png')}
              style={{width: 107, height: 30}}
            />
          </TouchableOpacity>{' '}
          you'll see all your transactions in a joined feed with the main
          insights
        </Text>
      </View>
      <View style={styles.footerWrapper}>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/images/goscore_logo.png')} />
        </View>
        <View style={styles.nextButtonWrapper}>
          <View style={styles.line} />
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate('CreditReportScreen')}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
          <View style={styles.line} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  backgroundImage: {
    position: 'absolute',
    top: -height / 3,
    width: width,
    height: '100%',
    overflow: 'visible',
  },
  titleContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 141,
    paddingLeft: 50,
    paddingRight: 23,
  },
  title: {
    fontSize: 64,
    color: '#fff',
    lineHeight: 92,
    fontWeight: '700',
  },
  descriptionWrapper: {
    flex: 1,
    paddingLeft: width / 6,
    paddingRight: width / 12,
  },
  description: {
    fontSize: 24,
    lineHeight: 33,
    fontWeight: '700',
    color: '#C4C4C4',
  },
  footerWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },

  nextButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingBottom: 55,
  },
  nextButton: {
    backgroundColor: 'transparent',
    paddingVertical: 2,
    paddingHorizontal: 19,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#2E6CC6',
  },
  nextButtonText: {
    color: '#2E6CC6',
    fontSize: 17,
    lineHeight: 23,
  },
  line: {
    backgroundColor: '#2E6CC6',
    height: 1,
    flex: 1,
  },
})

export default SpendingScreen
