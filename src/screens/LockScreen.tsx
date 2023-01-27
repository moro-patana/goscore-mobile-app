import * as React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
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
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/pin-code-bg.png')}
        resizeMode="cover"
        style={{
          width: 1000,
          height: 980,
          position: 'absolute',
          elevation: 10,
          bottom: '6%',
          right: '-75%',
        }}></ImageBackground>

      <View>
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
      <View style={styles.footer}>
        <Image source={require('../../assets/images/goscore_logo.png')} />
        <TouchableOpacity onPress={() => onPressCancel()}>
          <Text style={styles.buttonText}>
            Reset the key and enter the password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LockScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: 75,
    paddingBottom: 69,
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
    margin: 4,
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
    // width: 293,
    // height: 348,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 37,
  },
  number: {
    width: 83,
    height: 83,
    borderRadius: 83,
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
  footer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
