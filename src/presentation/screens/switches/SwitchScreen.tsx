/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { Card } from '../../components/ui/Card';
import { Button } from '../ui/Button';
import { Switch, Text, StyleSheet } from 'react-native'; // Agregado StyleSheet
import { CustomSwitch } from '../../components/ui/CustomSwitch';
import { Separator } from '../../components/ui/Separator';

export const SwitchScreen = () =>  {
  //const [isEnabled, setIsEnabled] = useState(false);
  //const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  //console.log(isEnabled);
  const [state, setState] = useState({
    isActive:true,
    isHungry:false,
    isHappy:true,
  });

  return (
    <CustomView style={{marginTop:100, paddingHorizontal:10}}>
      <Card>

        <CustomSwitch
         isOn={state.isActive}
         onChange={(value) => setState({...state, isActive:value})}
         text="¿Está activo?"
        />
        <Separator style={undefined} />
        <CustomSwitch
         isOn={state.isHungry}
         onChange={(value) => setState({...state, isHungry:value})}
         text="¿Tiene hambre?"
        />
        <Separator style={undefined} />      <CustomSwitch
         isOn={state.isHappy}
         onChange={(value) => setState({...state, isHappy:value})}
         text="¿Está feliz?"
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
