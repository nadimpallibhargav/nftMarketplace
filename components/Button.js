import { TouchableOpacity, Image, Text } from 'react-native';
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants';

export const CircleButton = ({ handlePress, imgUrl, ...props }) => {
  return(
    <TouchableOpacity 
        style={{ 
          width: 40, 
          height: 40, 
          backgroundColor: COLORS.white, 
          borderRadius: SIZES.extraLarge,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          ...props
        }} 
        onPress={handlePress}
      >
      <Image source={imgUrl} style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
  );
}

export const RectangleButton = ({ minWidth, handlePress, ...props }) => {
  return(
    <TouchableOpacity 
        style={{ 
          backgroundColor: COLORS.primary, 
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: minWidth,
          padding: SIZES.small,
          borderRadius: SIZES.extraLarge,
          ...props
        }} 
        onPress={handlePress}
      >
      <Text style={{
        color: COLORS.white,
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.font,
        textAlign: 'center',
      }}>
        Place a Bid 
      </Text>
    </TouchableOpacity>
  );
}