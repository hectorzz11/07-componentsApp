import React, { ReactNode } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';

interface Pros{
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}
export const CustomView = ({style, children}:Pros) =>{
  return (
    <View style={[globalStyles.mainContainer, style]}>
        {children}
    </View>
  );
};
