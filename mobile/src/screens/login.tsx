import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { useState } from "react";
import { Button } from "../components/button";
import icon from "../constants/icon";

export function Login() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	return (
		<View className="bg-white flex-1 justify-between p-10">
			<View className="items-center mt-[51px]">
				<Image source={icon.logo} alt="Logo do agendei" />
			</View>

			<View className="space-y-4 w-full max-w-md">
				<TextInput
					className="p-2.5 rounded-md bg-offWhite"
					placeholder="Email"
					value={email}
					onChangeText={setEmail}
				/>

				<TextInput
					className="p-2.5 rounded-md bg-offWhite"
					placeholder="Senha"
					value={password}
					secureTextEntry={true}
					onChangeText={setPassword}
				/>

				<View>
					<Button text="Acessar" />
				</View>
			</View>

			<View className="items-center flex-row justify-center">
				<Text className="text-gray-300">Não tenho conta. </Text>
				<TouchableOpacity onPress={() => {}}>
					<Text className="text-blue-500">Criar conta agora.</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
