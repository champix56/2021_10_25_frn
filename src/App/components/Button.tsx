import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
interface Props {
  text: String;
}
const Button: React.FC<Props> = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>{props.text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'plum',
  },
});
export default Button;
