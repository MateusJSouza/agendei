import { Image, Text, View } from "react-native";
import icon from "../constants/icon";
import { Button } from "./button";
import { formatDate } from "../utils/format-date";

interface CardAppointmentProps {
	id_appointment: number;
	service: string;
	doctor: string;
	specialty: string;
	booking_date: string;
	booking_hour: string;
}

export function CardAppointment({
	id_appointment,
	service,
	doctor,
	specialty,
	booking_date,
	booking_hour,
}: CardAppointmentProps) {
	return (
		<View className="border-t border-lightGray p-3 bg-white flex-1">
			<Text className="font-medium text-black text-lg">
				{service} - {doctor}
			</Text>
			<Text className="text-[#ACACAC] text-sm mb-1">{specialty}</Text>

			<View className="flex-row items-center justify-between">
				<View className="">
					<View className="flex-row items-center">
						<Image
							className="w-7 h-7 mr-1"
							source={icon.calendar}
							alt="Ícone representando um calendário, utilizado para indicar a data de agendamentos"
						/>
						<Text className="text-gray">{formatDate(booking_date)}</Text>
					</View>

					<View className="flex-row items-center">
						<Image
							source={icon.clock}
							alt="Ícone representando um relógio, utilizado para indicar a hora de agendamentos"
							className="w-7 h-7 mr-1"
						/>
						<Text className="text-gray">{booking_hour}h</Text>
					</View>
				</View>

				<View>
					<Button variant="danger" text="Cancelar Reserva" />
				</View>
			</View>
		</View>
	);
}
