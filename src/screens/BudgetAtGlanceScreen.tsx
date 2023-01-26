import * as React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import Layout from '../components/Layout';

const BudgetAtGlanceScreen = ({swiperRef, keyNumber}) => {
  return (
    <Layout swiperRef={swiperRef} keyNumber={keyNumber}>
      <Image
        source={require('../../assets/images/budget_at_glance.png')}
        style={{position: 'absolute', top: '-51%', right: '-105%'}}></Image>
      <Text style={styles.baseTitle}>
        Your Budget <Text style={styles.innerTitle}>at a glance</Text>
      </Text>
      <Text style={styles.description}>
        You are just 2 minutes away from gaining control over your personal
        economy
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
    color: '#2E6CC6',
  },
  innerTitle: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 64,
    lineHeight: 92,
    color: '#2E6CC6',
  },
  description: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 33,
    color: '#C4C4C4',
    paddingTop: 30,
  },
});
