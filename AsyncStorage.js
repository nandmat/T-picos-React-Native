import React, { Component } from "react";
import {Keyboard, View, Text, StyleSheet, Image, Switch, TextInput, TouchableOpacity } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            nome: ''
        };

        this.gravaNome = this.gravaNome.bind(this)

    }

    //ComponentDidMount = Quando o componente é montado em tela
    async componentDidMount(){
        await AsyncStorage.getItem('nome').then((value) =>{
            this.setState({nome: value});
        })
    }

    //componentDidUpdate = tda vez q um state é atualizado faz algo

    async componentDidUpdate(_, prevState){
        const nome = this.state.nome;
        if(prevState !== nome){
            await AsyncStorage.setItem('nome', nome);

        }
    }

    gravaNome(){
        this.setState({
            nome:this.state.input
        });
        alert('Gravado com sucesso');
        Keyboard.dismiss();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewInput}>
                    <TextInput
                        value={this.state.input}
                        underlineColorAndroid='transparent'
                        onChangeText={(texto) => this.setState({ input: texto })}
                        style={styles.input}
                    />

                    <TouchableOpacity onPress={this.gravaNome}>
                        <Text style={styles.botao}> + </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.nome}>
                    {this.state.nome}
                </Text>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center'
    },
    viewInput: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        width: 350,
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        padding: 10
    },
    botao: {
        backgroundColor: '#222',
        color: '#fff',
        height: 40,
        padding: 10,
        marginLeft: 10
    },
    nome: {
        marginTop:15,
        fontSize: 20
    }

})

export default App;

