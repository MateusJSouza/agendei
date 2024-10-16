import { Text, View } from "react-native";

// interface ProfileProps {
//   name: string
//   email: string
// }

export function Profile() {
	return (
		<View className="flex-1 bg-white">
			<View className="border border-lightGray pl-2 pt-4 pb-4">
				<Text className="text-sm text-gray mb-1">Nome</Text>
				<Text className="text-lg">Heber Stein Mazutti</Text>
			</View>

			<View className="border border-lightGray pl-2 pt-4 pb-4">
				<Text className="text-sm text-gray mb-1">Email</Text>
				<Text className="text-lg">heber@teste.com.br</Text>
			</View>
		</View>
	);
}
