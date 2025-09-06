import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-web';

function PerfilScreen () {
    return (<View>
                <Text>
                Aqui é Somente o perfil.
                <Button title='Clique aqui' onPress={() => alert("Botão Pressionado")}/>
                </Text>
            </View>
    );
};

export default PerfilScreen;