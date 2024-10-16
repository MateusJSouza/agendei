import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

import { Home } from './home'
import { Profile } from './profile'
import { Calendar } from './calendar'
import icon from '../constants/icon'
import { Image } from 'react-native'

export function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: 'center',
            headerTitle: () => {
              return (
                <Image
                  source={icon.logo}
                  alt="Logo do aplicativo agendei"
                  className="w-[125px] h-7"
                />
              )
            },
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icon.home}
                  className={`w-7 h-7 ${focused ? 1 : 'opacity-50'}`}
                  alt="Ícone representando uma casa, utilizado para indicar a tela inicial do aplicativo"
                />
              )
            },
            tabBarShowLabel: false,
          }}
        />

        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  className={`w-7 h-7 ${focused ? 1 : 'opacity-50'}`}
                  source={icon.calendar}
                  alt="Ícone representando um calendário, utilizado para indicar a data de agendamentos"
                />
              )
            },
            tabBarShowLabel: false,
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  className={`w-7 h-7 ${focused ? 1 : 'opacity-50'}`}
                  source={icon.profile}
                  alt="Ícone representando uma pessoa, utilizado para indicar a tela de perfil do usuário"
                />
              )
            },
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
