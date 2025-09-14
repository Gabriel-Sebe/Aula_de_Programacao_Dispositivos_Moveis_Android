import React from "react";
import { View, Text, StyleSheet } from "react-native";

function TelaIncial ({ route }){
    const { email } = route.params;

    return ( <View style={styles.container}>
            <Text style={styles.textoInicial}>Bem Vindo, {email}!</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoInicial: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default TelaIncial;