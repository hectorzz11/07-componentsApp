/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { Alert, Text, View } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { globalStyles } from '../../../config/theme/theme';
import { Title } from '../../components/ui/Title';
import { Button } from '../ui/Button';

export const AlertScreen = () => {
    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],{
          userInterfaceStyle:'dark',
        });

      const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
          {
            text: 'Ask me later',
            onPress: () => console.log('Ask me later pressed'),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],{cancelable:true,
        });
  return (
    <CustomView style={globalStyles.globalMargin}>
        <Title safe text="Alerts" />
        <Button
            text="Alerta - 2 Botones"
            onPress={createTwoButtonAlert}
        />
        <View style={{height:10}} />

        <Button
            text="Alerta - 3 Botones"
            onPress={createThreeButtonAlert}
        />
        <View style={{height:10}} />

        <Button
            text="Prompt - Input"
            onPress={()=>{}}
        />
        <View style={{height:10}} />

    </CustomView>
  );
};
