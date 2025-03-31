import { TextInput } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Card } from '../../components/ui/Card';
import { globalStyles } from '../../../config/theme/theme';

export const TextInputScreen = () => {
  return (
    <CustomView margin>
        <Title text="Text Inputs" safe/>
        <Card>
            <TextInput
            style={globalStyles.subTitle}
            placeholder="Nombre completo"
            autoCapitalize={'words'}
            autoCorrect={false}
            />
        </Card>
    </CustomView>
  );
};
