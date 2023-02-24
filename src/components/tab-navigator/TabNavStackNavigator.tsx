import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TransactionsScreen from '../../screens/TransactionsScreen';
import CategoryDetails from '../CategoryDetails';
const Stack = createStackNavigator();

const BackButton = ({navigation, onPress}) => (
  <TouchableOpacity
    style={{flexDirection: 'row', alignItems: 'center'}}
    onPress={onPress}>
    <Ionicons name="chevron-back" size={20} color="#2E6CC6" />
    <Text
      style={{
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        color: '#2E6CC6',
      }}>
      Back
    </Text>
  </TouchableOpacity>
);

const TabNavStackNavigator = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="HomeC"
        // component={TransactionsScreen}
        options={{
          title: '',
          headerLeft: () => <Text style={styles.title}>My Activity</Text>,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerRight: () => (
            <TouchableOpacity
              style={{padding: 16}}
              onPress={toggleModalVisible}>
              <Image
                source={require('../../../assets/images/plus-icon.png')}></Image>
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 17,
          },
          headerRightContainerStyle: {
            paddingRight: 13,
          },
        }}>
        {props => (
          <TransactionsScreen
            {...props}
            modalVisible={modalVisible}
            onPress={toggleModalVisible}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="ItemDetails"
        component={CategoryDetails}
        options={({navigation, route}) => ({
          headerLeft: () => (
            <BackButton
              navigation={navigation}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitle: route.params?.item.name,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 17,
            color: '#2E6CC6',
            textTransform: 'capitalize',
          },
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            fontWeight: '400',
            fontSize: 17,
            color: '#2E6CC6',
          },

          headerRight: () => (
            <Ionicons
              name="information-circle-outline"
              size={20}
              color="#2E6CC6"
            />
          ),
          headerLeftContainerStyle: {
            paddingLeft: 12,
          },
          headerRightContainerStyle: {
            paddingRight: 12,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default TabNavStackNavigator;

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    color: '#2E6CC6',
    padding: 16,
  },
});
