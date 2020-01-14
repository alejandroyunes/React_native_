import React, { useState  } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native';

export default function UselessTextInput() {
    const [value, onChangeText] = useState('useless');



    return (
        <>
        <TextInput
            style={styles.nameInput}
            onChangeText={text => onChangeText(text)}
            value={value}
        />


        <View style={styles.container}>
            <TextInput
                style={styles.inputBox}

                placeholder='Email'
                autoCapitalize='none'
            />
            <TextInput
                style={styles.inputBox}

                placeholder='Password'
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Button title="Don't have an account yet? Sign up" />
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#F6820D',
        borderColor: '#F6820D',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    }
})