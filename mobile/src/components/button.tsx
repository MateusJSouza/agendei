import type { ComponentProps } from 'react'
import { Alert, Text, TouchableOpacity } from 'react-native'

interface ButtonProps extends ComponentProps<'button'> {
  text: string
  variant?: 'primary' | 'danger'
}

export function Button({ text, variant = 'primary' }: ButtonProps) {
  function clickMe() {
    Alert.alert('Clicou no caneco!')
  }

  return (
    <TouchableOpacity
      className={`w-full rounded-md items-center justify-center p-3 ${variant === 'primary' ? 'bg-blue' : 'bg-red'}`}
      onPress={clickMe}
    >
      <Text className="text-white">{text}</Text>
    </TouchableOpacity>
  )
}
