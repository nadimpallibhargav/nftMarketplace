import { View, Text, Image } from 'react-native';
import { SIZES, FONTS, SHADOWS, assets, COLORS } from '../constants';

export const NFTTitle = ({ title, subTitle, titleSize, subTiteSize }) => {
  return(
    <View>
      <Text style={{ fontSize: titleSize, fontFamily: FONTS.semiBold, color: COLORS.primary }}>
        {title}
      </Text>
      <Text style={{ fontSize: subTiteSize, fontFamily: FONTS.regular, color: COLORS.primary }}>
        {subTitle}
      </Text>
    </View>
  );
}

export const EndDate = () => {
  return(
    <View style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        maxWidth: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1
      }}>
      <Text style={{ 
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary
        }}>
            EndDate
      </Text>
      <Text style={{ 
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.primary
        }}>
            12h 30m
      </Text>
    </View>
  );
}

export const EthPrice = ({ price }) => {
  return(
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image resizeMode='contain' source={assets.eth} style={{ width: 20, height: 20, marginRight: 2 }} />
      <Text style={{ fontSize: SIZES.font, fontFamily: FONTS.medium }} >{price}</Text>
    </View>
  );
}

export const ImgComp = ({ imgUrl, index }) => {
  return(
    <Image style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font
      }} 
    source={imgUrl} />
  );
}

export const People = () => {
  return(
    <View style={{
        flexDirection: 'row',
      }}>
      {[assets.person02, assets.person03, assets.person04]
        .map((imgUrl, index) => (
          <ImgComp imgUrl={imgUrl} index={index} key={`people-${index}`} />
      ))}
    </View>
  );
}

export const SubInfo = () => {
  return(
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-Between',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
      }} >
      <People />
      <EndDate />
    </View>
  );
}