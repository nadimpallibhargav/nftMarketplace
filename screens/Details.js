import React from 'react';
import { View, FlatList, Image, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FocusedStatusBar, RectangleButton, DetailsBid, DetailsHeader, SubInfo } from '../components';
import { FONTS, SIZES, SHADOWS, COLORS, assets } from '../constants';
import { useNavigation } from '@react-navigation/native';

const Details = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />      
      <View style={{
          position: 'absolute',
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          paddingVertical: SIZES.font,
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          zIndex: 1,
        }}>
        <RectangleButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />          
      </View>
      <View>        
        <DetailsHeader />
      </View>

    </SafeAreaView>
  );
};

export default Details;