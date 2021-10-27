import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {PRODUCTS_ACTIONS} from '../../store/store';
interface IProps {}
//declaration auto des interface des maps
type StateProps = ReturnType<typeof mapStateProps>;
type DispatchProps = typeof mapsDispatchToProps;
//creation de l'interface composée des props + types des maps
type Props = StateProps & DispatchProps & IProps;
const ProductSearch = (props: Props) => {
  console.log(props);
  return (
    <View style={style.container}>
      <TextInput
        placeholder="Recherche"
        value={props.searchValue}
        style={style.searchInput}
        onChangeText={textValue => {
          console.log(textValue);
          props.changeSearchValue(textValue);
        }}
      />
      {/* <View style={style.searchButton}>
        <Button title="go" />
      </View> */}
    </View>
  );
};
const style = StyleSheet.create({
  searchButton: {
    width: 45,
  },
  searchInput: {
    flexGrow: 1,
    borderWidth: 1,
    height: 35,
  },
  container: {
    flexDirection: 'row',
    marginBottom: 5,
  },
});
//connexion au store avec mapping des values //functions dans les props
function mapStateProps(state: any, own: any) {
  return {searchValue: state.datas.search, ...own};
}
function mapsDispatchToProps(dispatch: Function) {
  return {
    changeSearchValue: (value: string) =>
      dispatch({type: PRODUCTS_ACTIONS.SET_SEARCH, value: value}),
  };
}
export default connect(mapStateProps, mapsDispatchToProps)(ProductSearch);
