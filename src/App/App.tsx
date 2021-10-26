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
import {SafeAreaView, ScrollView, View, Text, Alert} from 'react-native';
import Button from './components/Button';

const App = () => {
  return (
    <SafeAreaView>
      {/* <StatusBar /> */}
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>DEMAT Breizh</Text>
          <Button
            bgColor="tomato"
            onMyButtonPressedAction={(arg: String) => {
              Alert.alert('Mon 1er button clicked,->', JSON.stringify(arg));
            }}>
            <View>
              <Text>Benjamin le button</Text>
            </View>
          </Button>
          <Button
            onMyButtonPressedAction={arg => {
              Alert.alert('Mon 2eme button clicked,->', JSON.stringify(arg));
            }}>
            <View>
              <Text>Benjamin le button</Text>
            </View>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
