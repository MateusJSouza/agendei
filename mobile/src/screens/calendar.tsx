import { FlatList, Text, View } from 'react-native'

import { appointments } from '../constants/data'
import { CardAppointment } from '../components/card-appointment'

export function Calendar() {
  return (
    <View className="flex-1 bg-white pt-4">
      <Text className="text-lg text-black">Agende seus serviços médicos</Text>

      <FlatList
        className="p-3"
        data={appointments}
        keyExtractor={doctor => doctor.id_appointment.toString()}
        renderItem={({ item }) => (
          <CardAppointment
            id_appointment={item.id_appointment}
            doctor={item.doctor}
            service={item.service}
            specialty={item.specialty}
            booking_date={item.booking_date}
            booking_hour={item.booking_hour}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
