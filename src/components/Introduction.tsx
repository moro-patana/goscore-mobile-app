import * as React from 'react';
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
const array = [
  {
    key: '1',
    title: 'Your budget at a glance',
    description:
      'You are just 2 minutes away from gaining control over your personal economy',
  },
  {
    key: '2',
    title: 'Spending tracking',
    description:
      "With you'll see all your transactions in a joined feed with the main insights",
  },
  {
    key: '3',
    title: 'Free  credit report',
    description:
      "You'll understand your current rating, how to improve it and what offers do you deserve! ",
  },
];
function Introduction() {
  return (
    <>
      {array.map(arr => (
        <View style={styles.contentWrapper} key={arr.key}>
          <ImageBackground
            source={require('../../assets/images/01.png')}
            resizeMode="cover"
            style={{
              position: 'absolute',
              top: 0,
              width: width,
              height: height,
            }}></ImageBackground>
          <View>
            <Text style={styles.baseTitle}>{arr.title}</Text>
          </View>
          <View>
            <Text style={styles.description}>{arr.description}</Text>
          </View>
        </View>
      ))}
    </>
  );
}

export default Introduction;
const styles = StyleSheet.create({
  contentWrapper: {
    paddingTop: 75,
    paddingLeft: 50,
    paddingRight: 23,
  },
  baseTitle: {
    fontSize: 80,
    fontWeight: '700',
    lineHeight: 92,
    letterSpacing: -0.05,
    color: '#2E6CC6',
  },
  description: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 33,
    color: '#C4C4C4',
    paddingTop: 50,
  },
});
