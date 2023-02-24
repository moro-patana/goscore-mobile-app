import * as React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Modal,
  Alert,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const SelectBankModal = ({modalVisible, onPress}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        onPress();
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Image
                source={require('../../assets/images/category-details-bg.png')}
                style={styles.bigImage}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: width,
                  paddingHorizontal: 16,
                }}>
                <View>
                  <TouchableOpacity
                    onPress={onPress}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                    }}>
                    <Image
                      source={require('../../assets/images/white-chevron-left.png')}
                    />
                    <Text style={{color: '#fff', fontSize: 17}}>Back</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.headerText}>Select your Bank</Text>
                <TouchableOpacity onPress={onPress}>
                  <Image
                    source={require('../../assets/images/close-button.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={{paddingTop: 23, alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/goscore_white_logo.png')}
                />
              </View>
            </View>
            <View style={styles.contentWrapper}>
              <Text style={styles.contentTitle}>Select your Bank</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SelectBankModal;
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
    width: width,
    height: height,

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
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 8,
    width: width,
  },

  headerText: {
    fontSize: 17,
    lineHeight: 22,
    color: '#fff',
  },
  contentWrapper: {
    paddingHorizontal: 16,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentTitle: {
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 49,
    color: '#2E6CC6',
    paddingBottom: 23,
  },

  backButtonWrapper: {
    paddingTop: 17,
    paddingLeft: 4,
  },

  bigImage: {
    width: width,
    height: height / 2,
    position: 'absolute',
    top: '-100%',
  },
});
