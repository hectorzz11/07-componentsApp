

import { Platform, StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native';
import { colors } from '../../../config/theme/theme';

interface Props {
  isOn: boolean;
  text?: string;
  onChange: (value: boolean) => void;
}
export const CustomSwitch = ({ isOn, onChange, text }: Props) => {
  return (
    <View style={styles.switchRow}>
        <Text>{text}</Text>
        <Switch
          thumbColor={Platform.OS === 'ios' ? '#7607577' : colors.primary}
          //thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onChange}
          value={isOn}
        />
    </View>
  );
};
const styles = StyleSheet.create({
switchRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginVertical:5,
  },
});
