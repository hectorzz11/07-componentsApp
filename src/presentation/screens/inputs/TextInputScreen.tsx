import { TextInput } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Card } from '../../components/ui/Card';

export const TextInputScreen = () => {
  return (
    <CustomView margin>
        <Title text="Text Inputs" safe/>
        <Card>
            <TextInput/>
        </Card>
    </CustomView>
  );
};
