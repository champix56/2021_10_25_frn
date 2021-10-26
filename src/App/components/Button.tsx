import React, {ReactElement, ReactNode} from 'react';
import {Alert, StyleSheet, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';

interface Props {
  children: ReactElement | Array<ReactElement | ReactNode> | String;
  bgColor?: string;
  onMyButtonPressedAction: Function;
}
const Button: React.FC<Props> = props => {
  console.log(props);
  return (
    <TouchableHighlight
      onPress={evt => {
        props.onMyButtonPressedAction('azertyui');
        console.log(evt);
      }}>
      <View
        style={{
          ...styles.container,
          ...styles.moreContainer,
          backgroundColor: props.bgColor,
        }}>
        {props.children}
      </View>
    </TouchableHighlight>
  );
};
// Button.propTypes = {
//   children: PropTypes.any.isRequired,
//   bgColor: PropTypes.string.isRequired,
// };
Button.defaultProps = {
  bgColor: 'skyblue',
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
