/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { Card } from '../../components/ui/Card';
import { Button } from '../ui/Button';
import { Switch, Text, StyleSheet } from 'react-native'; // Agregado StyleSheet

export const SwitchScreen = () =>  {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  console.log(isEnabled);

  return (
    <CustomView style={styles.container}>
      <Card>
        <Text style={styles.text}>
          {isEnabled ? 'prendido' : 'apagado'}
        </Text>

        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </Card>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  text: {
    marginBottom: 5,
  },
});
