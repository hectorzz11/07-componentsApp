/* eslint-disable react-native/no-inline-styles */
import { Text, View } from 'react-native';
import { globalStyles, colors } from '../../../config/theme/theme';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
interface Props{
    text: string;
    safe?: boolean;
    white?: boolean;
}
export const Title = ({text, safe = false,white = false}:Props) => {
    const {top} = useSafeAreaInsets();
  return (
    <Text
        style={{
            ...globalStyles.title, //se esparcen las propiedades que tiene el titulo
            marginTop: safe ? top : 0,
            marginBottom: 10,
            color: white ?  'white' : colors.text,
        }}
        >{text}</Text>
  );
};
