import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {IProduct} from '../../../interfaces/IProduct';
interface Props {
  product: IProduct;
  onProductPressed?: Function;
}
const ProductItemList: React.FC<Props> = (props: Props) => {
  return (
    <TouchableOpacity>
      <View style={style.container}>
        <Image
          source={{uri: props.product.img}}
          style={{width: 100, height: 100}}
        />
        <View>
          <Text style={style.center}>{props.product.name}</Text>
        </View>
        <View>
          <Text style={{...style.center, ...style.prix}}>
            {props.product.prix}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  center: {textAlign: 'center'},
  prix: {fontWeight: '900'},
  container: {
    alignItems: 'center',
    minWidth: 150,
    height: 170,
    marginLeft: 5,
    marginBottom: 8,
  },
});
export default ProductItemList;
