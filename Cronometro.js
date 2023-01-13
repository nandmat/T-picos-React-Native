import React, { Component, setState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            status: 'INICIAR',
            ultimoTimer: null
        };
        //Variável do timer do relógio
        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai() {

        if (this.timer != null) {
            //Aqui vai parar o timer
            clearInterval(this.timer);
            this.timer = null;
            this.setState({ status: 'RETORNAR' })

        } else {
            //Começar a girar o timer
            this.timer = setInterval(() => {
                this.setState({ numero: this.state.numero + 0.1 })
            }, 100);
            this.setState({ status: 'PARAR' })
        }
    }
    limpar() {
        if (this.timer != null) {
            clearInterval(this.timer);
            this.timer = null;
        }

        this.setState({ 
            ultimoTimer: 'Último tempo: ' + this.state.numero.toFixed(2),
            numero: 0, 
            status: 'INICIAR'})
    }


    render() {

        return (
            <View style={styles.container}>

                <Image
                    source={require('./src/cronometro.png')}
                    style={styles.cronometro}
                />

                <Text style={styles.timer}>{this.state.numero.toFixed(2)}</Text>

                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btn} onPress={this.vai}>
                        <Text style={styles.btnTexto}>{this.state.status}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={this.limpar}>
                        <Text style={styles.btnTexto}>LIMPAR</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.areaUltimo}>
                    <Text style={styles.textoUltimo}>{this.state.ultimoTimer}</Text>
                </View>

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
    timer: {
        marginTop: -160,
        color: '#fff',
        fontSize: 65,
        fontWeight: 'bold'
    },
    btnArea: {
        flexDirection: 'row',
        marginTop: 70,
        height: 40
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 40,
        margin: 17,
        borderRadius: 9
    },
    btnTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    areaUltimo:{
        marginTop: 40,
    },
    textoUltimo:{
        fontSize: 25,
        fontStyle: 'italic',
        color: '#fff'
    }

})

export default App;