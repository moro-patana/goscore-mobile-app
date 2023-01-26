import * as React from 'react';
import {Text, StyleSheet, Image, View, ImageBackground} from 'react-native';
import Layout from '../components/Layout';
const BudgetAtGlanceScreen = ({swiperRef, keyNumber}) => {
  return (
    <Layout swiperRef={swiperRef} keyNumber={keyNumber}>
      <ImageBackground
        source={require('../../assets/images/introduction-bg.png')}
        resizeMode="contain"
        style={{
          width: 869,
          height: 555,
          top: '-49%',
          right: '30%',
          position: 'absolute',
        }}></ImageBackground>
      <Image
        source={require('../../assets/images/free_credit_report_img2.png')}
        style={{position: 'absolute', top: '50%', right: '-55%'}}></Image>
      <View>
        <Text style={styles.baseTitle}>
          Free
          <Text style={styles.innerTitle}> credit</Text>
          <Text style={styles.innerTitleTwo}> report</Text>
        </Text>
      </View>
      <Text style={styles.description}>
        You'll understand your current rating, how to improve it and what offers
        do you deserve!
      </Text>
    </Layout>
  );
};
export default BudgetAtGlanceScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseTitle: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 80,
    lineHeight: 92,
    color: '#FFFFFF',
    paddingTop: 45,
    paddingLeft: 36,
    paddingRight: 54,
  },
  innerTitle: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 64,
    lineHeight: 92,
    color: '#FFFFFF',
  },
  innerTitleTwo: {
    fontSize: 64,
    lineHeight: 87,
    color: '#2E6CC6',
  },
  description: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 33,
    color: '#C4C4C4',
    paddingTop: 30,
    paddingRight: 45,
  },
});
