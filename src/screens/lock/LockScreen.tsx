import * as React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
  View,
  PanResponder,
  Animated,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import PinCodeScreen from './PinCodeScreen'
const {width, height} = Dimensions.get('window')
const LockScreen = () => {
  const pan = React.useRef(new Animated.ValueXY()).current
  const [showPinCode, setShowPinCode] = React.useState(false)
  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dy: pan.y}], {
        useNativeDriver: false,
      }),

      onPanResponderRelease: () => {
        if (pan.y._value < -100) {
          setShowPinCode(true)
        } else {
          pan.setValue({x: 0, y: 0})
        }
      },
    }),
  ).current

  return (
    <View style={styles.container}>
      {!showPinCode && (
        <Animated.View
          style={[styles.swipeable, {transform: [{translateY: pan.y}]}]}
          {...panResponder.panHandlers}>
          <View style={{flex: 1, width: width}}>
            <StatusBar barStyle='light-content' hidden={false} />
            <Image
              source={require('../../../assets/images/lock-bg.png')}
              style={{
                position: 'absolute',
                top: 0,
                width: width,
                height: height,
              }}
            />

            <View>
              <Image
                source={require('../../../assets/images/home_screen_bg.png')}
                style={{width: '100%'}}
              />
              <Image
                source={require('../../../assets/images/goscore_logo_lg.png')}
                style={{
                  position: 'absolute',
                  top: '45%',
                  left: '20%',
                }}
              />
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity>
                <Ionicons size={30} color={'white'} name={'finger-print'} />
              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons size={30} color={'white'} name={'camera'} />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      )}
      {showPinCode && (
        <View style={styles.pinCodeContainer}>
          <PinCodeScreen />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  swipeable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  pinCodeContainer: {
    position: 'absolute',
    width: '100%',
    left: '-50%',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: '45%',
    paddingRight: 20,
    paddingBottom: 30,
  },
})

export default LockScreen
