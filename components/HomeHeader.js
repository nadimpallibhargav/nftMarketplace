import { View, Text, Image, TextInput } from 'react-native';
import { FONTS, SIZES, COLORS, assets } from '../constants';

const HomeHeader = ({ onSearch }) => {
  return(
    <View style={{
        padding: SIZES.font,
      }}>
      <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Image source={assets.logo} style={{ width: 90, height: 25 }} resizeMode="contain" />
        <View style={{ width: 45, height: 45 }}>
          <Image source={assets.person01} style={{ width: '100%', height:'100%' }} />
          <Image source={assets.badge} 
            style={{ position: 'absolute', right: 0, bottom: 0, width: 15, height: 15 }} 
            />
        </View>
      </View>
      <View>
        <Text style={{
            color: COLORS.white,
            fontFamily: FONTS.regular,
            fontSize: SIZES.small
          }}>
          Hello Victoriya 👋
        </Text>
        <Text style={{
            color: COLORS.white,
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            marginTop: SIZES.base / 2,
          }}>
          Let's find a masterpiece
        </Text>
      </View>
      <View style={{
          backgroundColor: COLORS.gray,
          flexDirection: 'row',
          alignItems: 'center',
          padding: SIZES.base,
          marginTop: SIZES.font,
        }}>
        <Image source={assets.search} 
            style={{ width: 20, height: 20, marginRight: SIZES.base, }} resizeMode="contain" 
          />
        <TextInput placeholder='Search NFTs' 
          style={{ flex: 1, borderColor: 'gray', borderWidth: 1 }} 
          onChange={onSearch} 
          />
      </View>
    </View>
  );
}

export default HomeHeader;