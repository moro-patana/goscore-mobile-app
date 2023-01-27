import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function AccountConnectionSuccess() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/images/voka.png')}
          style={{width: 78, height: 78}}
        />
      </View>
      <Text style={styles.text}>Your account was successfully connected</Text>
      <View style={styles.logoWrapper}>
        <Image source={require('../../assets/images/goscore_logo.png')} />
      </View>
    </View>
  );
}

export default AccountConnectionSuccess;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 226,
    paddingBottom: 127,
  },
  text: {
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 50,
    letterSpacing: -0.05,
    color: '#2E6CC6',
    textAlign: 'center',
    paddingTop: 122,
    paddingLeft: 56,
    paddingRight: 54,
  },
  logoWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
