import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PerfilScreen from './PerfilScreen';

function HomeScreen () {
    return (<View>
                <Text>Ola Mundo Pessoal!</Text>
                <PerfilScreen/>
            </View>
    );
};

export default HomeScreen;