/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { Card } from '../../components/ui/Card';
import { Button } from '../ui/Button';

export const SwitchScreen = () =>  {

  return (
    <CustomView style={
      {
         marginTop:100,
      }
    }>
      <Card>
        <Button
          text="Click Me!"
          onPress={()=>{}}
        />
      </Card>

    </CustomView>

  );
};
