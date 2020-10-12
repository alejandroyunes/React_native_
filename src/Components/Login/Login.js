import React, { Component  } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native';
import firebaseSDK from '../../Firebase/FirebaseSDK';
import Loading from '../Loading/Loading'

export default class Login extends Component{

    state = {
        name: 'Alice',
        email: 'test@test.com',
        password: '123456789',
        avatar: '',
        loading: ''

    }
    login = async () =>{
        this.setState ({loading:true})
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            avatar: this.state.avatar
        };
        const response = firebaseSDK.login(user, this.loginSuccess, this.loginFailed)
    }

    loginSuccess = () => {
        console.log('login successful, navigate to chat.');
        this.setState ({loading:false})
        this.props.navigation.navigate('Home');
    };

    loginFailed = () => {
        alert('Error al entrar, usuarios incorrectos');
    };
    render(){
    return (
        <>
        <View style={styles.container}>
            <TextInput
                style={styles.inputBox}

                onChangeText={email => this.setState({email})}
            value={this.state.email}
            />
            <TextInput
            style={styles.nameInput}
            onChangeText={password => this.setState({password})}
            value={this.state.password}
            placeholder='Password'
             />
            <TouchableOpacity 
            style={styles.button}
            onPress={this.login}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Button title="Don't have an account yet? Sign up" />  
                </View> 
                {(this.state.loading && this.state.loading != '')?<Loading/>:<Text></Text>}
        </>
    )
}
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