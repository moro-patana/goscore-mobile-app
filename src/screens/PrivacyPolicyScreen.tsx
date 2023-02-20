import * as React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  FlatList,
  Modal,
  Alert,
  TouchableOpacity,
} from 'react-native';
import PrivacyPolicyListItem from '../components/PrivacyPolicyListItem';

const privacyPolicyData = [
  {
    id: 1,
    title: 'Amount owed on accounts is ok ',
    description:
      'Continue to pay off your current debts and maintain low balances. Keep in mind that consolidating or moving your debt from one account to another will usually not help your goscore since the total amount owed remains the same.',
  },
  {
    id: 2,
    title: 'Enough accounts with recent payment information',
    description:
      'Demonstrate an ability to moderately and responsibly use credit accounts. If you have a credit card, show new balance activity by using the card and paying it back on time. You can share more accounts with goscore to improve your score accuracy',
  },
  {
    id: 3,
    title: 'Amount paid down on open mortgage loans is ok',
    description:
      'Keep on paying down your open mortgage loan to lower your remaining balance, e.g., by applying more than the scheduled payment amount to the principal each month if you can. Keep on paying down your open mortgage loan to lower your remaining balance, e.g., by applying more than the scheduled payment amount to the principal each month if you can. Keep on paying down your open mortgage loan to lower your remaining balance, e.g., by applying more than the scheduled payment amount to the principal each month if you can.',
  },
];
const PrivacyPolicyScreen = ({modalVisible, setModalVisible}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.container}>
            <View style={[styles.header, styles.elevation]}>
              <View>
                <Image
                  source={require('../../assets/images/goscore_logo_sm.png')}
                />
              </View>
              <Text style={styles.headerText}>your credit score</Text>
            </View>
            <View style={styles.contentWrapper}>
              <View style={styles.backButtonWrapper}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Image
                    source={require('../../assets/images/chevron-left-icon.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.subHeader}>
                <Image
                  source={require('../../assets/images/privacy_policy_icon.png')}
                  style={{width: 44, height: 38}}
                />
                <Text style={styles.title}>Pravicy Policy </Text>
                <Image source={require('../../assets/images/arrow.png')} />
              </View>
              <View style={styles.itemWrapper}>
                <FlatList
                  data={privacyPolicyData}
                  renderItem={({item}) => (
                    <PrivacyPolicyListItem
                      key={item.id}
                      title={item.title}
                      description={item.description}
                    />
                  )}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PrivacyPolicyScreen;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    flex: 1,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingTop: 41,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  elevation: {
    shadowColor: '#C4C4C4',
    elevation: 5,
  },
  headerText: {
    fontSize: 17,
    lineHeight: 22,
    color: '#102463',
  },
  contentWrapper: {
    paddingHorizontal: 16,
  },
  backButtonWrapper: {
    paddingTop: 17,
    paddingLeft: 4,
  },
  subHeader: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 7,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 27,
    textAlign: 'center',
    color: '#2E6CC6',
    paddingBottom: 7,
  },
  itemWrapper: {
    fontWeight: '400',
    paddingVertical: 10,
    paddingLeft: 23,
    paddingRight: 22,
  },
});
