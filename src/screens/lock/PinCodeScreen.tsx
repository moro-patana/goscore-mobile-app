import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import * as React from 'react'
import ReactNativePinView from 'react-native-pin-view'
import Icon from 'react-native-vector-icons/Ionicons'
const {width, height} = Dimensions.get('window')
const PinCodeScreen = () => {
  const pinView = React.useRef(null)
  const [showRemoveButton, setShowRemoveButton] = React.useState(false)
  const [enteredPin, setEnteredPin] = React.useState('')
  const [showCompletedButton, setShowCompletedButton] = React.useState(false)
  React.useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true)
    } else {
      setShowRemoveButton(false)
    }
    if (enteredPin.length === 6) {
      setShowCompletedButton(true)
    } else {
      setShowCompletedButton(false)
    }
  }, [enteredPin])

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../../assets/images/pin-code-bg.png')}
        style={{
          width: width,
          height: height * 1.2,
          position: 'absolute',
          top: '-30%',
        }}
      />
      <View style={{paddingTop: '10%'}}>
        <Text style={styles.title}>Enter a digital key</Text>
        <ReactNativePinView
          inputSize={8}
          ref={pinView}
          pinLength={6}
          buttonSize={83}
          onValueChange={value => setEnteredPin(value)}
          buttonAreaStyle={{
            paddingLeft: 45,
            paddingRight: 35,
          }}
          inputAreaStyle={{
            marginBottom: 20,
          }}
          inputViewEmptyStyle={{
            backgroundColor: '#FFF',
            borderWidth: 1,
            borderColor: '#FFF',
          }}
          inputViewFilledStyle={{
            backgroundColor: '#00DB90',
          }}
          buttonViewStyle={{
            backgroundColor: '#8EADDA',
          }}
          buttonTextStyle={{
            color: '#FFF',
            fontSize: 36,
            lineHeight: 49,
            fontWeight: '400',
          }}
          onButtonPress={key => {
            if (key === 'custom_left') {
              pinView.current.clear()
            }
            if (key === 'custom_right') {
              alert('Entered Pin: ' + enteredPin)
            }
          }}
          customLeftButton={
            showRemoveButton ? (
              <Icon name={'ios-backspace'} size={36} color={'#FFF'} />
            ) : undefined
          }
          customRightButton={
            showCompletedButton ? (
              <Icon name={'ios-lock-closed'} size={36} color={'#FFF'} />
            ) : undefined
          }
        />
      </View>
      <View style={styles.footer}>
        <Image source={require('../../../assets/images/goscore_logo.png')} />
        <TouchableOpacity onPress={() => pinView.current.clearAll()}>
          <Text style={styles.buttonText}>
            Reset the key and enter the password
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default PinCodeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#fff',
    fontSize: 20,
    lineHeight: 50,
    fontWeight: '700',
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: -0.05,
    lineHeight: 50,
    color: '#C4C4C4',
    textAlign: 'center',
  },
})
