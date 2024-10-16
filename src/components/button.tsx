import type { ComponentProps } from "react";
import { Alert, Text, TouchableOpacity } from "react-native";

interface ButtonProps extends ComponentProps<"button"> {
  text: string
}

export function Button({ text }: ButtonProps) {
  function clickMe() {
    Alert.alert('Clicou no caneco!')
  }

	return (
		<TouchableOpacity
      className="w-full bg-blue rounded-md items-center justify-center p-3"
      onPress={clickMe}
    >
			<Text
        className="text-white"
      >
        {text}
      </Text>
		</TouchableOpacity>
	);
}
