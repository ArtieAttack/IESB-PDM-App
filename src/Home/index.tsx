import { FlatList, Text, View } from "react-native";

const Home = () => {
  return (
    <View className="bg-primary">
      <Text className="font-bold text-base">Medicamentos</Text>
      <FlatList
        data={[
          { id: 1, name: "Paracetamol" },
          { id: 2, name: "Ibuprofeno" },
          { id: 3, name: "Amoxicilina" },
        ]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="bg-white p-4 m-2 rounded-lg shadow-md">
            <Text className="text-lg font-semibold">{item.name}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  )
}

export default Home;