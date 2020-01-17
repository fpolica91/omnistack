import React from 'react';
import Routes from './src/pages/routes';
import { StatusBar } from 'react-native'

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="" />
      <Routes />
    </>
  )
}
export default App

