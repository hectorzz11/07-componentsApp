import { Pressable, StyleProp, Text, View, ViewStyle } from 'react-native';
import { colors, globalStyles } from '../../../config/theme/theme';

interface Props {
    text: string;
    styles?: StyleProp <ViewStyle>;
    onPres:()=> void;
}
export const Button = ({text, styles,onPres}:Props) => {
  return (
    <Pressable
        onPress = {onPres}
        style={({pressed})=>([
            globalStyles.btnPrimary,
            {
                opacity:pressed ? 0.8 : 1,
                backgroundColor: colors.primary,
            },
        ])}
    >
        <Text style={[
            globalStyles.btnPrimaryText,
            {
                color: colors.buttonTextColor,
            },
        ]}>Button</Text>
    </Pressable>
  );
};
