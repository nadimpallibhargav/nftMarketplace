import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FocusedStatusBar, HomeHeader, NFTCard } from '../components';
import { COLORS, NFTData } from '../constants';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList 
            data={NFTData}
            renderItem={({ item }) => <NFTCard style={{ margin: 'auto' }} data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}            
          />
        </View>
        <View style={{
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: -1
          }}>
          <View style={{ flex: 1, backgroundColor: COLORS.primary }}></View>
          <View style={{ flex: 2, backgroundColor: COLORS.white }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;