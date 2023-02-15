import * as React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
const {width} = Dimensions.get('window')
const BudgetScreen = ({onNext}) => {
  return (
    <View style={[styles.container, {width: width}]}>
      <View style={styles.titleContainer}>
        <Text style={styles.firstPart}>Your Budget</Text>
        <Text style={styles.secondPart}>at a glance</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          You are just 2 minutes away from gaining control over your personal
          economy
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/images/goscore_logo.png')} />
        </View>
        <View style={styles.nextButtonWrapper}>
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
  firstPart: {
    fontSize: 80,
    color: '#2E6CC6',
    lineHeight: 92,
    fontWeight: '700',
  },
  secondPart: {
    fontSize: 64,
    color: '#2E6CC6',
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
    paddingLeft: width / 2.5,
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

export default BudgetScreen
