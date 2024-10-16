import { FlatList, Image, Text, View } from "react-native";

import { doctors_services } from "../constants/data";
import icon from "../constants/icon";
import { Service } from "../components/service";

export function Services() {
	return (
		<View className="flex-1 bg-white pt-6">
			<View className="bg-blue h-40 items-center justify-center pt-3 pb-6">
				<Image source={icon.female} />
				<Text className="text-white text-lg font-bold mt-1">Mateus Jesus</Text>
				<Text className="text-white mt-1 text-sm">Cardiologista</Text>
			</View>

			<FlatList
				data={doctors_services}
				keyExtractor={(service) => service.id_service.toString()}
				renderItem={({ item }) => {
					return <Service price={item.price} service={item.description} />;
				}}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}
