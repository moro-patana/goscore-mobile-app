import * as React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Linking,
} from 'react-native'
const {width} = Dimensions.get('window')
const SpendingScreen = ({onNext}) => {
  return (
    <View style={[styles.container, {width: width}]}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Spending tracking</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
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
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/images/goscore_logo.png')} />
        </View>
        <View style={styles.nextButtonWrapper}>
          <View style={styles.line} />
          <TouchableOpacity style={styles.button} onPress={onNext}>
            <Text style={styles.buttonText}>Next</Text>
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
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 50,
    paddingRight: 23,
  },

  titleText: {
    fontSize: 64,
    color: '#fff',
    lineHeight: 92,
    fontWeight: '700',
  },
  description: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 50,
    paddingRight: 23,
  },
  descriptionText: {
    fontSize: 24,
    lineHeight: 33,
    color: '#C4C4C4',
  },

  logoContainer: {
    paddingBottom: 37,
  },
  nextButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingHorizontal: 19,
    paddingVertical: 2,
    marginBottom: 62,
    borderWidth: 1,
    borderColor: '#2E6CC6',
  },
  buttonText: {
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
