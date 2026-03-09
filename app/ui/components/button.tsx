import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  text: string;
  textColor: string;
  bgColor: string;
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
};

export default function Button({
  text,
  textColor,
  bgColor,
  onPress,
  isLoading,
  disabled,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || isLoading}
      style={[
        styles.button,
        { backgroundColor: bgColor },
        (disabled || isLoading) && styles.disabled,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text style={{ color: textColor }}>{text}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  disabled: {
    opacity: 0.6,
  },
});
