import * as React from 'react'
import {useState} from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native'
import CustomButton from '../components/Button'
import PrivacyPolicyScreen from './PrivacyPolicyScreen'
const {width, height} = Dimensions.get('window')

export default function AddBankHomeScreen ({navigation}) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.contentWrapper}>
      <View>
        <Image
          source={require('../../assets/images/add_bank_home_bg.png')}></Image>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/goscore_logo_lg.png')}></Image>
      </View>
      <View style={styles.content}>
        <CustomButton
          buttonColor='#FFFFFF'
          text={"Let's start"}
          textColor={'#2E6CC6'}
          buttonStyle={styles.button}
          textStyle={{fontSize: 17}}
          onPress={() => console.log('clicked')}
        />
        <View>
          <Text style={styles.description}>
            Please, select your everyday bank or the bank you use the most from
            the list below:
          </Text>
        </View>
      </View>
      <View style={styles.contentFooter}>
        <TouchableOpacity
          style={{transform: [{translateY: 10}]}}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.contentFooterText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
      {modalVisible && (
        <PrivacyPolicyScreen
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: 129,
    paddingBottom: 65,
    backgroundColor: '#fff',
  },
  linearGradient: {
    height: height,
    width: width,
  },
  logoContainer: {
    position: 'absolute',
    top: '45%',
    left: '20%',
  },
  button: {
    paddingTop: 2,
    paddingLeft: 50,
    paddingRight: 51,
    paddingBottom: 2,
    borderWidth: 1,
    borderColor: '#2E6CC6',
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flexDirection: 'column',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 67,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: '#C4C4C4',
  },
  contentFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  contentFooterText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#C4C4C4',
  },
})
