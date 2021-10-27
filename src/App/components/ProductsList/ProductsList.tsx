import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {IProduct} from '../../../interfaces/IProduct';
import ProductEditor from '../ProductEditor/ProductEditor';
// import style from './ProductsList.style';
import ProductItemList from '../ProductItemList/ProductItemList';
interface IProps {}
//declaration auto des interface des maps
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
//creation de l'interface composée des props + types des maps
type Props = StateProps & DispatchProps & IProps;
const ProductsList = (props: Props) => {
  console.log(props);
  return (
    <ScrollView>
      <View style={style.listContainer}>
        {props.products.map((e: IProduct, i: number) => (
          <ProductItemList
            onProductPressed={() => {
              props.goEditor(e);
            }}
            product={e}
            key={'prod-' + i}
          />
        ))}
      </View>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
const mapStateToProps = (state: any, own: IProps) => {
  return {
    products: state.datas.filtredProducts,
    ...own,
  };
};
const mapDispatchToProps = dispatch => {
  goEditor: propduit =>
    dispatch({type: 'SET_WINDOW', value: <ProductEditor produit={produit} />});
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
