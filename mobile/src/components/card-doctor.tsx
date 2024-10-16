import {
  Image,
  type ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

interface CardDoctorProps {
  name: string
  specialty: string
  icon: ImageSourcePropType
}

export function CardDoctor({ name, icon, specialty }: CardDoctorProps) {
  return (
    <TouchableOpacity className="border rounded-md border-lightGray flex-row p-2 mt-1 mb-3">
      <View>
        <Image
          className="w-[50px] h-[50px] m-2"
          source={icon}
          alt="Ícone de um Doutor"
        />
      </View>

      <View className="items-start flex-col ml-2">
        <Text className="font-bold text-lg mt-1">{name}</Text>
        <Text className="text-gray-400">{specialty}</Text>
      </View>
    </TouchableOpacity>
  )
}
