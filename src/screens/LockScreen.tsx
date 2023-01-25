import * as React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
const LockScreen = () => {
  const [passcode, setPasscode] = useState(['', '', '', '', '', '']);
  const [counter, setCounter] = useState(0);

  const onPressNumber = (num: any) => {
    setCounter(counter + 1);
    setPasscode((prevState: any) => {
      return prevState.map((state: any, index: number) => {
        return index == counter ? `${num}` : state;
      });
    });
  };

  const onPressCancel = () => {
    setCounter(counter - 1);
    setPasscode((prevState: any) => {
      return prevState.map((state: any, index: number) => {
        return index == counter - 1 ? '' : state;
      });
    });
  };

  let numbers = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 0},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/pin-code-bg.png')}
        resizeMode="cover">
        <View style={{marginTop: 75}}>
          <View>
            <Text style={styles.passcodeText}>Enter a digital key</Text>
          </View>
          <View style={styles.codeContainer}>
            {passcode.map((code, index) => {
              let style = code != '' ? styles.code2 : styles.code1;
              return <View style={style} key={index}></View>;
            })}
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 31,
          }}>
          <View style={styles.numbersContainer}>
            {numbers.map(number => {
              return (
                <TouchableOpacity
                  onPress={() => onPressNumber(number.id)}
                  style={styles.number}
                  key={number.id}>
                  <Text style={styles.numberText}>{number.id}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={styles.buttons}>
          <Image source={require('../assets/images/goscore_logo.png')} />
          <TouchableOpacity onPress={() => onPressCancel()}>
            <Text style={styles.buttonText}>
              Reset the key and enter the password
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LockScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    width: '100%',
  },
  passcodeText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.05,
    lineHeight: 50,
    textAlign: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  code1: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    margin: 8,
  },
  code2: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#00DB90',
    margin: 8,
  },
  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 282,
    height: 348,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    width: 75,
    height: 75,
    borderRadius: 75,
    margin: 8,
    backgroundColor: '#8EADDA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 36,
    letterSpacing: 0.05,
    lineHeight: 49,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttons: {
    marginTop: 80,
    marginLeft: 46,
    marginRight: 46,
    marginBottom: 46,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: -0.05,
    lineHeight: 50,
    color: '#C4C4C4',
    textAlign: 'center',
  },
});
