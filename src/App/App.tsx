/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

//declaration auto des interface des maps
type StateProps = ReturnType<typeof mapStateToProps>;
//creation de l'interface composée des props + types des maps
type Props = StateProps;
const App = (props: Props) => {
  return props.window;
};
const mapStateToProps = (state: any) => {
  return {window: state.nav.window};
};
const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
