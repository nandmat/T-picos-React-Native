import React, { Component, setState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: require('./src/onepiece/16.png'),
            trocar: 0,
            imgs : [
                require('./src/onepiece/1.png'),
                require('./src/onepiece/2.png'),
                require('./src/onepiece/2.png'),
                require('./src/onepiece/3.png'),
                require('./src/onepiece/4.png'),
                require('./src/onepiece/5.png'),
                require('./src/onepiece/6.png'),
                require('./src/onepiece/7.png'),
                require('./src/onepiece/8.png'),
                require('./src/onepiece/9.png'),
                require('./src/onepiece/10.png'),
                require('./src/onepiece/11.png'),
                require('./src/onepiece/12.png'),
                require('./src/onepiece/13.png'),
                require('./src/onepiece/14.png'),
                require('./src/onepiece/15.png'),
                require('./src/onepiece/16.png')
            ]

        };

        this.trocar = this.trocar.bind(this)

    }

    trocar() {
        let numAleatorio = Math.floor(Math.random() * this.state.imgs.length);

        this.setState({
            image: imgs[numAleatorio]
        });
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>One Piece</Text>
                <View>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={this.trocar}>
                        <Image
                            style={{ height: 350, width: 350, borderRadius: 70 }}
                            source={this.state.image}
                        />
                    </TouchableOpacity>
                    <Text style={styles.descritivo}>Clique na imagem para mudar o personagem</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        color: '#fff',
        fontSize: 35,
        fontFamily: 'baskerville',
        fontWeight: 'bold',
        marginBottom: 30
    },
    descritivo: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontFamily:'baskerville'
    }

})

export default App;