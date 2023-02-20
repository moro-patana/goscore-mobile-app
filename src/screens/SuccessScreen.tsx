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
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');
const SuccessScreen = () => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        // setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Image
                source={require('../../assets/images/category-details-bg.png')}
                style={styles.bigImage}
              />

              <View style={{alignSelf: 'flex-end'}}>
                <TouchableOpacity>
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
              <Image source={require('../../assets/images/success-img.png')} />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingBottom: 32,
              }}>
              <TouchableOpacity style={{width: '30%'}}>
                <LinearGradient
                  colors={['#2E6CC6', '#00DB90']}
                  style={{
                    padding: 1,
                    borderRadius: 30,
                    borderWidth: 2,
                    borderColor: 'transparent',
                  }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '700',
                      lineHeight: 23,
                      color: '#2E6CC6',
                      textAlign: 'center',
                      backgroundColor: 'white',
                      borderRadius: 30,
                      paddingVertical: 12,
                    }}>
                    Ok
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessScreen;
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
  contentWrapper: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
