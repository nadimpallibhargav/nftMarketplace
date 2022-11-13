import { View, Image } from 'react-native';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectangleButton } from '../components';
import { SubInfo, NFTTitle, EthPrice } from './SubInfo';
import { useNavigation, useRoute } from '@react-navigation/native';

const NFTCard = ({ data, imgUrl, ...props }) => {  
  const navigation = useNavigation();
  return(
    <View style={{ 
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{ width: '100%', height: 250 }}>
        <Image
          source={data.image} 
          resizeMode= "cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton right={10} top={10} imgUrl={assets.heart} />
      </View>
      <SubInfo />
      <View style={{
          padding: SIZES.font,
        }} >
        <NFTTitle 
          titleSize={SIZES.large} 
          subTiteSize={SIZES.small} 
          title={data.name} 
          subTitle={data.creator} 
        />
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: SIZES.font,
          }}>
          <EthPrice price={data.price} />
          <RectangleButton minWidth={120} handlePress={ () => {navigation.navigate('Details')}} />
        </View>
      </View>
    </View>
  );
}

export default NFTCard;