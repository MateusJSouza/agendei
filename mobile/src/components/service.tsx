import { Text, View } from 'react-native'
import { Button } from './button'
import { formatPriceToBRL } from '../utils/format-price'

interface ServiceProps {
  service: string
  price: number
}

export function Service({ service, price }: ServiceProps) {
  return (
    <View className="flex-1 p-3 bg-white flex-row border-b items-center justify-between border-gray4">
      <View className="flex-1">
        <Text className="text-gray-400 text-lg mt-1">{service}</Text>
        <Text className="text-blue-500 mt-1">{formatPriceToBRL(price)}</Text>
      </View>

      <View>
        <Button text="Agendar" />
      </View>
    </View>
  )
}
