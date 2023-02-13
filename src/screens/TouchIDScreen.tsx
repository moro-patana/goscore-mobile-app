import * as React from 'react'
import {Image, TouchableOpacity, Text, View, StyleSheet} from 'react-native'
import TouchID from 'react-native-touch-id'

function TouchIDScreen () {
  const [isAuth, setIsAuth] = React.useState(false)
  const optionalConfigObject = {
    title: 'Authentication Required',
    imageColor: '#e00606',
    imageErrorColor: '#ff0000',
    sensorDescription: 'Touch sensor',
    sensorErrorDescription: 'Failed',
    cancelText: 'Cancel',
    fallbackLabel: 'Show Passcode',
    unifiedErrors: false,
    passcodeFallback: false,
  }
  React.useEffect(() => {
    handleBiometric()
  })
  const handleBiometric = () => {
    TouchID.isSupported(optionalConfigObject).then(biometryType => {
      if (biometryType === 'FaceID') {
        console.log('FaceID is supported.')
      } else {
        console.log('TouchID is supported.')
        TouchID.authenticate('Authentication', optionalConfigObject)
          .then(success => {
            console.log('Success', success)
            setIsAuth(success)
          })
          .catch(error => {
            console.log(error)
          })
      }
    })
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/touch-id-bg.png')}
        resizeMode='cover'
        style={{
          width: '100%',
          height: '90%',
          bottom: '10%',
        }}></Image>
      <View style={styles.fingerPrintWrapper}>
        <TouchableOpacity onPress={handleBiometric}>
          <Image
            source={require('../../assets/images/fingerprint.png')}
            style={{overflow: 'hidden'}}></Image>
        </TouchableOpacity>
        <Text style={styles.title}>Entrance by Touch ID</Text>
      </View>
      <View style={styles.contentFooter}>
        <View>
          <Image
            source={require('../../assets/images/goscore_logo.png')}
            style={{overflow: 'hidden'}}></Image>
        </View>
        <TouchableOpacity onPress={() => console.log('clicked')}>
          <Text style={styles.contentFooterText}>Change Password Entry</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TouchIDScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingBottom: 69,
    position: 'relative',
  },
  fingerPrintWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25%',
    left: '25%',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 50,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  contentFooter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 8,
  },
  contentFooterText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: '#C4C4C4',
  },
})
