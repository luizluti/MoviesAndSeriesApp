/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Movies from '../pages/Movies'
import Series from '../pages/Series'
import SearchMovies from '../pages/SearchMovies'
import MoviesList from '../pages/MoviesList'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const icons = {
  Movies: {
    name: 'movie'
  },
  Series: {
    name: 'tv'
  }
}

function Tabs () {
  return (

    <Tab.Navigator
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name]
          return <Icon name={name} color={color} size={size} />
        }
      }) }
      tabBarOptions={{
        style: {
          backgroundColor: '#121218'
        },
        activeTintColor: '#FFF',
        inactiveTintColor: '#909090'
      }}
    >
      <Tab.Screen name='Movies' component={Movies} options={{ title: 'Filmes' }}/>
      <Tab.Screen name='Series' component={Series} options={{ title: 'Séries de TV' }}/>
    </Tab.Navigator>

  )
}

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="SearchMovies"
          component={SearchMovies}
          options={{
            title: 'Pesquisar Filme',
            headerStyle: {
              backgroundColor: '#121218'
            },
            headerTintColor: '#FFF'
          }}
        />
        <Stack.Screen name="MoviesList"
          component={MoviesList}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
