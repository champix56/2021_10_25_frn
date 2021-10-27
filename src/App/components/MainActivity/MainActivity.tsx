import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './MainActivity.style';
interface Props {}

const initialState = {};
const MainActivity: React.FunctionComponent<Props> = props => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <View style={style.container}>
      <Text style={style.title}>Ma super App</Text>
      <View style={style.buttons}>
        <View style={style.button}>
          <TouchableOpacity>
            <Image source={require('../../img/list.png')} style={style.image} />
            <Text>List Produit</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../img/editor.png')}
              style={style.image}
            />
            <Text>List Produit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MainActivity;
