import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './styled';

interface CustomButtonProps {
  title: string;
  backgroundColor: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  backgroundColor,
  onPress,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor },
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
