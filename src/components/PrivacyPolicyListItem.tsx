import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function PrivacyPolicyListItem({title, description}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desciption}>{description}</Text>
    </View>
  );
}

export default PrivacyPolicyListItem;
const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '700',
    color: '#2E6CC6',
  },
  desciption: {
    fontSize: 13,
    lineHeight: 18,
    color: '#102463',
  },
});
