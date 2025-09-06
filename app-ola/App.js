import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import HomeScreen from './HomeScreen';
import { TextInput } from 'react-native-web';
import { useState } from 'react';

export default function App() {

  const[novoTexto, setNovoTexto] = useState('');
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
      <View style={styles.container}>
        <Image 
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={{width: 50, height: 50}}
        />

        <TextInput
          placeholder='Digite o texto'
          onChangeText={novoTexto => setNovoTexto(novoTexto)}
          value={novoTexto}
          style={styles.input}
        />

        <Text style={styles.texto}>
          Valor atual: {contador}
        </Text>

        <Button title="Incrementar" onPress={incrementar} />

        <HomeScreen/>

        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
