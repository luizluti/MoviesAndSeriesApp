import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import Router from './routes'

export default function App () {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1D1D27"
      />
      <Router />
    </>
  )
}
