import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Pessoas from "./src/Pessoas/Pessoas";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed:[
                {id: '1', nome: 'Matheus', idade: 25, email: 'nanderson@gmail.com'},
                {id: '2', nome: 'Artur', idade: 1, email: 'artur@gmail.com'},
                {id: '3', nome: 'Mariana', idade: 22, email: 'mariana@gmail.com'},
                {id: '4', nome: 'Aurora', idade: 1, email: 'aurora@gmail.com'},
                {id: '5', nome: 'Augusto', idade: 1, email: 'augusto@gmail.com'},
            ]
        };

    }

    render() {

        return (
            <View style={styles.container}>
                <FlatList 
                data={this.state.feed}
                keyExtractor={(item) => item.id}
                renderItem={ ({item}) => <Pessoas data={item} /> }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box1: {
        height: 250,
        backgroundColor: 'red'
    },
    areaPessoa:{
        backgroundColor: "#222",
        height: 200,
        marginBottom: 15
    },
    textoPessoa:{
        color:'#fff',
        fontSize: 20
    }
})

export default App;

