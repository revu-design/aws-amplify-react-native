import { Platform } from 'react-native';

export const setTestId = (id: string) => (Platform.OS === 'android' ? { accessibilityLabel: id } : { testID: id });
