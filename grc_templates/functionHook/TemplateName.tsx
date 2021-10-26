import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import style from './TemplateName.style';
interface Props {}

const initialState = {};
const TemplateName = (props: Props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <View>
      <Text>templateName</Text>
    </View>
  );
};

export default TemplateName;
