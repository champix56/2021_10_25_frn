import React, {ReactElement, ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  children: ReactElement | Array<ReactElement | ReactNode> | String;
}
const Button: React.FC<Props> = props => {
  console.log(props);
  return (
    <View style={{...styles.container, ...styles.moreContainer}}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'plum',
    paddingBottom: 8,
    paddingTop: 8,
    marginTop: 5,
    borderRadius: 8,
  },
  textContent: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '900',
  },
  moreContainer: {
    width: '80%',
    marginLeft: '10%',
  },
});
export default Button;
