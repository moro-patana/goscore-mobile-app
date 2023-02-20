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
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');
const UncategorizedScreen = () => {
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
            <View style={[styles.header, styles.elevation]}>
              <Image
                source={require('../../assets/images/category-details-bg.png')}
                style={styles.bigImage}
              />
              <Image
                source={require('../../assets/images/uncategorized-icon.png')}
                style={styles.smallImage}
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
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                    }}>
                    <Image
                      source={require('../../assets/images/white-chevron-left.png')}
                    />
                    <Text style={{color: '#fff'}}>Back</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.headerText}>Uncategorized</Text>
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
              <Text style={styles.contentTitle}>Uncategorized</Text>
              <Text style={styles.contentSubtitle}>
                69% of your transactions are categorized.{' '}
              </Text>
              <Text style={styles.description}>
                We found 6 transactions to improve your categorisation
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingBottom: 32,
              }}>
              <TouchableOpacity style={{width: '80%'}}>
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
                      paddingVertical: 11,
                    }}>
                    Let's go
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

export default UncategorizedScreen;
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
  elevation: {
    shadowColor: '#C4C4C4',
    elevation: 5,
  },
  headerText: {
    fontSize: 17,
    lineHeight: 22,
    color: '#fff',
  },
  contentWrapper: {
    paddingHorizontal: 16,
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  contentTitle: {
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 49,
    color: '#2E6CC6',
    paddingBottom: 23,
  },
  contentSubtitle: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    color: '#2E6CC6',
    textAlign: 'center',
    paddingBottom: 5,
  },
  description: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 23,
    color: '#2E6CC6',
    textAlign: 'center',
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
  bigImage: {
    width: width,
    height: height / 2,
    position: 'absolute',
    top: '-100%',
  },
  smallImage: {
    position: 'absolute',
    top: height / 4.2,
    left: '45%',
  },
  button: {
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
