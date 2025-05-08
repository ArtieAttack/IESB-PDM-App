import { Image, Text, View } from "react-native";

const Header = () => {
  return (
    <View className="bg-primaryDark">
      <Image
        source={require('../../assets/logo.png')}
        style={{ width: 120, height: 60, marginTop: 50, marginLeft: 20 }}
      />
      <Text></Text>
    </View>
  )
}

export default Header;