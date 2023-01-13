import React, { Component, setState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textoFrase: '',
            img: require('./src/biscoito.png')
        };

        this.quebrar = this.quebrar.bind(this)

        this.frases = [
            'O importante não é vencer todos os dias, mas lutar sempre.',
            'Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!',
            'É melhor conquistar a si mesmo do que vencer mil batalhas.',
            'Quem ousou conquistar e saiu pra lutar, chega mais longe!'
        ];
    }

    quebrar() {
        let numAleatorio = Math.floor(Math.random() * this.frases.length);

        this.setState({
            textoFrase: '"' + this.frases[numAleatorio] + '"',
            img: require('./src/biscoitoAberto.png')
        });

    }

    render() {

        return (
            <View style={styles.container}>
                <Image
                    source={this.state.img}
                    style={styles.img}
                />

                <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

                <TouchableOpacity style={styles.botao} onPress={this.quebrar}>
                    <View style={styles.btnArea}>
                        <Text a
                            style={styles.btnTexto}>Quebrar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    img: {
        height: 250,
        width: 250
    },
    textoFrase: {
        fontSize: 20,
        color: '#dd7b22',
        margin: 30,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    botao: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: '#dd7b22',
        borderRadius: 25,

    },
    btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#dd7b22"

    }

})

export default App;