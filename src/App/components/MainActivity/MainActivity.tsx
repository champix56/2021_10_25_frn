import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import ProductEditor from '../ProductEditor/ProductEditor';
import ProductListWithSearch from '../ProductListWithSearch/ProductListWithSearch';
import style from './MainActivity.style';

interface IProps {}

interface DispatchProps {
  gotoList: Function;
  gotoEditor: Function;
}
//creation de l'interface composée des props + types des maps
type Props = DispatchProps & IProps;

const MainActivity: React.FunctionComponent<Props> = props => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Ma super App</Text>
      <View style={style.buttons}>
        <TouchableOpacity
          style={style.button}
          onPress={() => {
            props.gotoList();
          }}>
          <View>
            <Image source={require('../../img/list.png')} style={style.image} />
            <Text style={style.textButton}>List Produit</Text>
          </View>
        </TouchableOpacity>

        <View style={style.button}>
          <TouchableOpacity
            onPress={() => {
              props.gotoEditor();
            }}>
            <Image
              source={require('../../img/editor.png')}
              style={style.image}
            />
            <Text style={style.textButton}>List Produit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = (state, own) => {
  return own;
};
const mapDispatchToProps = (dispatch: Function) => {
  return {
    gotoList: () =>
      dispatch({type: 'SET_WINDOW', value: <ProductListWithSearch />}),
    gotoEditor: () =>
      dispatch({
        type: 'SET_WINDOW',
        value: (
          <ProductEditor produit={{name: '', img: '', prix: 0, desc: ''}} />
        ),
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainActivity);
