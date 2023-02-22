import * as React from 'react';
import * as Animatable from 'react-native-animatable';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export default function CustomSplashScreen() {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return isVisible ? (
    <Animatable.View
      animation="fadeOut"
      duration={8000}
      delay={2000}
      style={styles.container}>
      <Image
        source={require('../../assets/images/lock-bg.png')}
        style={styles.backgroundImage}
      />
      <View>
        <Image
          source={require('../../assets/images/home_screen_bg.png')}
          style={{top: '-10%'}}
        />
        <Image
          source={require('../../assets/images/goscore_logo_lg.png')}
          style={styles.logoImage}
        />
      </View>
    </Animatable.View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  logoImage: {
    position: 'absolute',
    top: '35%',
    left: '50%',
    resizeMode: 'contain',
  },
});
