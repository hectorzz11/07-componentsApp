/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text, View } from 'react-native';
import prompt from 'react-native-prompt-android';
interface Options {
    title:string;
    subTitle?:string;
    buttons: PromptButton[];
    promptType: 'default' | 'secure-text' | 'plain-text';
    placeholder?: string;
    defaultValue?: string;
}
interface PromptButton {
    text:string;
    onPress: () => void;
    style?: 'default' | 'cancel' | 'destructive';
}
export const showPrompt = ({
        title,
        subTitle,
        buttons,
        promptType,
        placeholder,
        defaultValue,
    }:Options) => {

    prompt(
        title,
        subTitle,
        buttons,
        {
            type: promptType,
            cancelable: false,
            defaultValue:defaultValue,
            placeholder: placeholder,
        },
      );

};
