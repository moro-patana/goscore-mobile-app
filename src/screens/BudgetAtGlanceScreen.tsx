import * as React from 'react'
import {Text, StyleSheet, ImageBackground, Dimensions} from 'react-native'
import Layout from '../components/Layout'
import {md, lg, xl} from '../components/SizeHelper'

const {height, width} = Dimensions.get('window')

const BudgetAtGlanceScreen = ({keyNumber, swiperRef}) => {
  return (
    <Layout swiperRef={swiperRef} keyNumber={keyNumber}>
      <ImageBackground
        source={require('../../assets/images/budget_at_glance.png')}
        resizeMode='contain'
        style={{
          width: width,
          height: height,
          top: '-48%',
          left: '75%',
          position: 'absolute',
        }}></ImageBackground>
      <Text style={styles.baseTitle}>
        Your Budget <Text style={styles.innerTitle}>at a glance</Text>
      </Text>
      <Text style={styles.description}>
        You are just 2 minutes away from gaining control over your personal
        economy
      </Text>
    </Layout>
  )
}
export default BudgetAtGlanceScreen
const styles = StyleSheet.create({
  baseTitle: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: xl,
    lineHeight: 92,
    color: '#2E6CC6',
  },
  innerTitle: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: lg,
    lineHeight: 92,
    color: '#2E6CC6',
  },
  description: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: md,
    lineHeight: 33,
    color: '#C4C4C4',
    paddingTop: Math.round(width * 0.08),
  },
})
