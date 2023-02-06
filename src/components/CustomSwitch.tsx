import * as React from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CustomSwitch = ({
  selectionMode,
  roundCorner,
  option1,
  option2,
  onSelectSwitch,
  selectionColor,
}) => {
  const [getSelectionMode, setSelectionMode] = React.useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = React.useState(roundCorner);

  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View
      style={{
        height: 28,
        width: '100%',
        backgroundColor: 'rgba(118, 118, 128, 0.12)',
        borderRadius: getRoundCorner ? 25 : 0,
        borderWidth: 0,
        borderColor: 'none',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 2,
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updatedSwitchData(1)}
        style={{
          flex: 1,

          backgroundColor:
            getSelectionMode == 1 ? selectionColor : 'transparent',
          borderRadius: getRoundCorner ? 25 : 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#2E6CC6',
            fontSize: 13,
            fontWeight: '500',
          }}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updatedSwitchData(2)}
        style={{
          flex: 1,
          backgroundColor:
            getSelectionMode == 2 ? selectionColor : 'transparent',
          borderRadius: getRoundCorner ? 25 : 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#2E6CC6',
            fontSize: 13,
            fontWeight: '500',
          }}>
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default CustomSwitch;
