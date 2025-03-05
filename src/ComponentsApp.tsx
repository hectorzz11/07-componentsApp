import '../gesture-handler.native';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/navigator/Navigator';

export default function ComponentsApp () {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>

  );
}
