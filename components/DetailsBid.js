import { View, Text } from 'react-native';

const DetailsBid = ({data}) => {
 return(
   <View>
    <Text>
      {data.name}
    </Text>
   </View>
 );
}

export default DetailsBid;