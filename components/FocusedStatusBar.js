import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const FocusedStatusBar = (props) => {

  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} barStyle='light-content' /> : null;
}

export default FocusedStatusBar;