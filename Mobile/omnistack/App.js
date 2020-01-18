import React from 'react';
import Routes from './src/pages/routes';
import { StatusBar, YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="" />
      <Routes />
    </>
  )
}
export default App

