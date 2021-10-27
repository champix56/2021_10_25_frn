import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
    textDecorationLine: 'underline',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {width: 50, height: 50},
});
