import React, {useEffect, useState} from 'react';
import {View, Text, Image, TextInput, Button, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {IProduct} from '../../../interfaces/IProduct';
import {PRODUCTS_ACTIONS} from '../../store/store';
import MyButton from '../Button/Button';
import style from './ProductEditor.style';
interface IProps {
  produit: IProduct;
}
//declaration auto des interface des maps
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
//creation de l'interface composée des props + types des maps
type Props = StateProps & DispatchProps & IProps;
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
        <MyButton
          onMyButtonPressed={() => {
            props.save(state);
          }}
          bgColor="skyblue">
          save
        </MyButton>
      </View>
      <View style={style.button}>
        <MyButton
          onMyButtonPressed={() => {
            props.goHome();
          }}
          bgColor="tomato">
          cancel
        </MyButton>
      </View>
    </ScrollView>
  );
};
const mapStateToProps = (state, own) => {
  return {...own};
};
const mapDispatchToProps = dispatch => {
  return {
    goHome: () => dispatch({type: 'GO_HOME'}),
    save: (pr: IProduct) =>
      dispatch({type: PRODUCTS_ACTIONS.SAVE_CURRENT, value: pr}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductEditor);
