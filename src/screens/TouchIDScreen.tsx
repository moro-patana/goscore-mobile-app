import * as React from 'react';
import {Text} from 'react-native';
import TouchID from 'react-native-touch-id';

function TouchIDScreen() {
  const [isAuth, setIsAuth] = React.useState(false);
  const optionalConfigObject = {
    title: 'Authentication Required',
    imageColor: '#e00606',
    imageErrorColor: '#ff0000',
    sensorDescription: 'Touch sensor',
    sensorErrorDescription: 'Failed',
    cancelText: 'Cancel',
    fallbackLabel: 'Show Passcode',
    unifiedErrors: false,
    passcodeFallback: false,
  };
  React.useEffect(() => {
    handleBiometric();
  });
  const handleBiometric = () => {
    TouchID.isSupported(optionalConfigObject).then(biometryType => {
      console.log(biometryType);

      if (biometryType === 'TouchID') {
        console.log('FaceID is supported.');
      } else {
        console.log('TouchID is supported.');
        TouchID.authenticate('Authentication', optionalConfigObject)
          .then(success => {
            console.log('Success', success);
            setIsAuth(success);
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  };
  return <Text>TouchId</Text>;
}

export default TouchIDScreen;
