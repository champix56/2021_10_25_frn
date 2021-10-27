/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

interface Props {
    children: ReactElement | String | Array<ReactElement | ReactNode>;
    bgColor?: String;
    onMyButtonPressed: Function;
}

// Un composant doit faire max 50 lignes - si plus, ça devient trop volumineux.
const Button: React.FC<Props> = props => {
    console.log(props);
    return (
        <TouchableHighlight onPress={() => {
            props.onMyButtonPressed('Yop');
            console.log('pressed');
        }}>
            <View style={{
                ...styles.container,
                ...styles.containerBorder,
                backgroundColor: props.bgColor,
            }}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </TouchableHighlight>
    );
};

Button.propTypes = {
    children: PropTypes.any.isRequired,
    bgColor: PropTypes.string,
};

Button.defaultProps = {
    bgColor: 'skyblue',
};


const styles = StyleSheet.create({
    container: {
        padding: 5,
         marginHorizontal: 25,
    },

    text: {
        color: 'white',
        fontSize:15,
        textAlign: 'center',
        fontWeight: '900',
    },

    // pour la forme - permet de coupler plusieurs styles avec le spread -> créé un objets qu'on populate avec les 2
    containerBorder: {
        // borderRadius: 10,
        borderStyle: 'solid',
    },
});

export default Button;
