import { FlatList, Text, View } from "react-native";

import { doctors } from "../constants/data";
import { CardDoctor } from "../components/card-doctor";
import icon from "../constants/icon";

export function Home() {
  return (
    <View className="flex-1 pt-10">
      <Text className="text-lg text-black mb-4 ml-4">Agende seus serviços médicos</Text>

      <FlatList
        className="p-3"
        data={doctors}
        keyExtractor={(doctor) => doctor.id_doctor.toString()}
        renderItem={({ item }) => (
          <CardDoctor
            name={item.name}
            icon={item.icon === 'M' ? icon.male : icon.female}
            specialty={item.specialty}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}