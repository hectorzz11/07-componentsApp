
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { Alert, Text, View } from 'react-native';
import prompt from 'react-native-prompt-android';
import { CustomView } from '../../components/ui/CustomView';
import { globalStyles } from '../../../config/theme/theme';
import { Title } from '../../components/ui/Title';
import { Button } from '../ui/Button';
import { showPrompt } from '../../../config/adapters/prompt.adapter';

export const AlertScreen = () => {

    const createTwoButtonAlert = () =>{
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
      };
        // Alert.alert(

      const createThreeButtonAlert = () =>{
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
      };
      const onShowPrompt = () => {
        showPrompt({
          title: '✉️ Email Address',
          subTitle: 'Please enter your email to continue',
          buttons: [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => {
                console.log('OK Pressed');
              },
            },
          ],
          promptType: 'plain-text',
          placeholder: '',
          defaultValue: '',
        });

        // Alert.prompt(
        //   '✉️ Email Address',
        //   'Please enter your email to continue',
        //   (valor: string) => {
        // if (valor.trim().length === 0) {
        //   Alert.alert('Error', 'Email cannot be empty');
        //   return;
        // }
        // console.log('Email entered:', valor);
        //   },
        //   'plain-text',
        //   '',
        //   'email-address'
        // );
      };

      return (
        <CustomView style={globalStyles.globalMargin}>
        <Title safe text="Alert Examples" />

        <Button
        text="Two Button Alert"
        onPress={createTwoButtonAlert}
        />
        <View style={{height: 12}} />

        <Button
        text="Three Button Alert"
        onPress={createThreeButtonAlert}
        />
        <View style={{height: 12}} />

        <Button
        text="📧 Email Prompt"
        onPress={onShowPrompt}
        />
        <View style={{height: 12}} />

        </CustomView>
  );
};
