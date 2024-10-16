import { Text, View } from 'react-native'
import {
  Calendar,
  CalendarProps,
  type DateData,
  LocaleConfig,
} from 'react-native-calendars'
import { ptBR } from '../constants/calendar'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { Button } from '../components/button'

LocaleConfig.locales['pt-BR'] = ptBR
LocaleConfig.defaultLocale = 'pt-BR'

export function Schedule() {
  const [day, setDay] = useState<DateData>()
  const [hour, setHour] = useState<string>('')

  return (
    <View className="flex-1 bg-white px-5 py-6 justify-between">
      <View>
        <Calendar
          theme={{
            textMonthFontSize: 18,
            monthTextColor: '#616161',
            todayTextColor: '#DF5951',
            selectedDayBackgroundColor: '#0D6EFD',
            selectedDayTextColor: '#0D6EFD',
            arrowColor: '#0D6EFD',
            textDisabledColor: '#ccc',
          }}
          onDayPress={setDay}
          markedDates={
            day && {
              [day.dateString]: { selected: true },
            }
          }
          minDate={new Date().toDateString()}
        />

        <View>
          <Text className="text-lg font-bold text-gray-400 mt-5">Horário</Text>
        </View>

        <View>
          <Picker
            selectedValue={hour}
            onValueChange={(value, index) => {
              setHour(value)
            }}
          >
            <Picker.Item label="09:00" value="09:00" />
            <Picker.Item label="10:00" value="10:00" />
            <Picker.Item label="11:00" value="11:00" />
          </Picker>
        </View>
      </View>

      <View>
        <Button text="Confirmar reserva" />
      </View>
    </View>
  )
}
