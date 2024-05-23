import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../theme/theme';
import LottieView from 'lottie-react-native';

interface PopupAnimationProps {
  style: any;
  source: any;
}
const PopupAnimation: React.FC<PopupAnimationProps> = ({style, source}) => {
  console.log('source', source);
  console.log('style', style);
  return (
    <View style={styles.LottieAnimtionContainer}>
      <LottieView style={style} source={source} autoPlay loop />
    </View>
  );
};

const styles = StyleSheet.create({
  LottieAnimtionContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: COLORS.secondaryBlackRGBA,
    justifyContent: 'center',
  },
});

export default PopupAnimation;
