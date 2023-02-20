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
const {width, height} = Dimensions.get('window');

const data = [
  'Vacation',
  'Culture & Events',
  'Hobbies',
  'Leisure Other',
  'Sports & Fitness',
];
const CategoryDetailsListScreen = () => {
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
                source={require('../../assets/images/category_list_bg.png')}
                style={styles.bigImage}
              />
              <Image
                source={require('../../assets/images/leisure-white-icon.png')}
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
                    <Text style={{color: '#fff', fontSize: 17}}>Back</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{paddingTop: '30%', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: '700',
                    lineHeight: 32,
                    color: '#fff',
                  }}>
                  Leisure category
                </Text>
              </View>
            </View>
            <View style={styles.contentWrapper}>
              <FlatList
                contentContainerStyle={{flex: 2, justifyContent: 'center'}}
                data={data}
                renderItem={({item}) => (
                  <View style={styles.category}>
                    <Text style={styles.categoryText}>{item}</Text>
                  </View>
                )}
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CategoryDetailsListScreen;
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
    paddingLeft: 33,
    paddingRight: 42,
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backButtonWrapper: {
    paddingTop: 17,
    paddingLeft: 4,
  },

  bigImage: {
    width: width,
    height: height,
    position: 'absolute',
    top: -height / 2.1,
  },
  smallImage: {
    position: 'absolute',
    top: height / 10,
    left: '45%',
  },
  category: {
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    width: width,
    paddingTop: 30,
    paddingBottom: 8,
  },
  categoryText: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 23,
    color: '#102463',
  },
});
