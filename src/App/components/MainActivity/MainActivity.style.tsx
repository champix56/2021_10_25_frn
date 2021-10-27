import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    alignItems: 'center',
    height: '100%',
  },
  title: {
    marginTop: 100,
    fontSize: 40,
    fontWeight: '900',
    color: 'white',
    textDecorationLine: 'underline',
  },
  buttons: {
    marginTop: '40%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  image: {width: 90, height: 90},
  textButton: {
    textAlign: 'center',
  },
});
