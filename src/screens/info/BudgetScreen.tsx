import * as React from 'react'
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native'
const {width, height} = Dimensions.get('window')
console.log(width)

const BudgetScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/budget_at_glance.png')}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.firstPart}>Your Budget</Text>
        <Text style={styles.secondPart}>at a glance</Text>
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>
          You are just 2 minutes away from gaining control over your personal
          economy
        </Text>
      </View>
      <View style={styles.footerWrapper}>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/images/goscore_logo.png')} />
        </View>
        <View style={styles.nextButtonWrapper}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate('SpendingScreen')}>
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
    top: -height / 6,
    right: -width / 1.5,
    width: '100%',
    height: '60%',
    overflow: 'visible',
  },
  titleContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 75,
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
    paddingLeft: width / 2.5,
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

export default BudgetScreen
