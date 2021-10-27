import React, {useEffect, useState} from 'react';
import {View, Text, Image, TextInput, Button, ScrollView} from 'react-native';
import {IProduct} from '../../../interfaces/IProduct';
import MyButton from '../Button/Button';
import style from './ProductEditor.style';
interface Props {
  produit: IProduct;
}

const initialState = {};
const ProductEditor = (props: Props) => {
  const [state, setstate] = useState(props.produit);
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <ScrollView>
      <View style={style.container}>
        <Text>{JSON.stringify(state)}</Text>
        <Text style={style.title}>Edition Produit</Text>
        <View style={style.imgContainer}>
          <Image source={{uri: state.img}} style={style.img} />
          <TextInput
            value={state.img}
            onChangeText={t => {
              setstate({...state, img: t});
            }}
            placeholder="url de l'image"
          />
        </View>
        {state.id ? (
          <View>
            <Text>ID : {state.id}</Text>
          </View>
        ) : null}
        <View>
          <Text>nom</Text>
          <TextInput
            value={state.name}
            onChangeText={text => {
              setstate({...state, name: text});
            }}
          />
        </View>
        <View>
          <Text>Prix</Text>
          <TextInput
            value={String(state.prix)}
            onChangeText={text => {
              setstate({...state, prix: parseFloat(text)});
            }}
          />
        </View>
        <View>
          <Text>description</Text>
          <TextInput
            multiline={true}
            value={state.description ? state.description : ''}
            onChangeText={text => {
              setstate({...state, description: text});
            }}
          />
        </View>
      </View>
      <View style={style.button}>
        <MyButton onMyButtonPressed={() => undefined} bgColor="skyblue">
          save
        </MyButton>
      </View>
      <View style={style.button}>
        <MyButton onMyButtonPressed={() => undefined} bgColor="tomato">
          cancel
        </MyButton>
      </View>
    </ScrollView>
  );
};

export default ProductEditor;
