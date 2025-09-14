import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from "react-native";

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [erroSenha, setErroSenha] = useState('');

    const realizarLogin = () => {
        setErroSenha(''); // limpa mensagem anterior

        if (email.trim() === '') {
            Alert.alert("Erro", "O campo de e-mail está vazio");
            return;
        }
        if (senha.trim() === '') {
            setErroSenha("O campo de senha está vazio");
            return;
        }
        if (senha.length < 6) {
            setErroSenha("A senha deve conter pelo menos 6 caracteres");
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigation.navigate('TelaIncial', { email });
        }, 2000);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo</Text>

            <Text style={styles.label}>Email:</Text>
            <TextInput
                placeholder="Digite seu e-mail"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Text style={styles.label}>Senha:</Text>
            <TextInput
                placeholder="Digite sua senha"
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                autoCapitalize="none"
            />

            {erroSenha !== '' && <Text style={styles.errorText}>{erroSenha}</Text>}

            <TouchableOpacity style={styles.button} onPress={realizarLogin} disabled={loading}>
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Login</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#f5f5f5'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
        color: '#333'
    },
    label: {
        fontSize: 16,
        marginBottom: 6,
        color: '#555'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        marginBottom: 8,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    errorText: {
        color: 'red',
        marginBottom: 16
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default LoginScreen;
