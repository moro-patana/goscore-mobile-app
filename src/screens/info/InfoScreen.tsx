import * as React from 'react'
import {useState, useRef} from 'react'
import {ScrollView, Image, StyleSheet, View, Dimensions} from 'react-native'
import BudgetScreen from './BudgetScreen'
import SpendingScreen from './SpendingScreen'
import CreditReportScreen from './CreditReportScreen'
const IMAGE_WIDTH = 3 * Dimensions.get('window').width

const InfoScreen = ({navigation}) => {
  const scrollViewRef = useRef<ScrollView>(null)
  const [scrollOffset, setScrollOffset] = useState(0)

  const handleScroll = event => {
    setScrollOffset(event.nativeEvent.contentOffset.x)
  }
  const handleNext = () => {
    const nextIndex = Math.floor(
      (scrollOffset + Dimensions.get('window').width) /
        Dimensions.get('window').width,
    )
    scrollViewRef.current?.scrollTo({
      x: nextIndex * Dimensions.get('window').width,
      animated: true,
    })
    setScrollOffset(nextIndex * Dimensions.get('window').width)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={{height: Dimensions.get('window').height - 200}}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ref={scrollViewRef}
        scrollEventThrottle={16}>
        <Image
          style={{
            width: IMAGE_WIDTH,
            height: '60%',
            top: '-8%',
            left: '10%',
          }}
          source={require('../../../assets/images/introduction-bg.png')}
          resizeMode='contain'
        />
        <View
          style={{
            flexDirection: 'row',
            width: IMAGE_WIDTH,
            height: '100%',
            position: 'absolute',
            top: 0,
          }}>
          <ScrollView horizontal={true}>
            <BudgetScreen onNext={handleNext} />
            <SpendingScreen onNext={handleNext} />
            <CreditReportScreen navigation={navigation} />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default InfoScreen
