import { Image, View, Text } from 'react-native';
import { assets } from '../constants';
import { CircleButton } from '../components';
import { useNavigation, useRoute } from '@react-navigation/native';

const DetailsHeader = () => {
  const navigation = useNavigation();
  return(
    <View style={{ width: '100%', height: 373 }}>
      <Image 
        source={assets.nft01}
        resizeMethod="cover"
        style={{ width: '100%', height:'100%' }}
        />
      <CircleButton 
        imgUrl={assets.left}
        left={15}
        top={10}
        handlePress={() => navigation.goBack()}
        />
      <CircleButton 
        imgUrl={assets.heart}
        right={15}
        top={10}
        />
    </View>
  );
}

export default DetailsHeader;