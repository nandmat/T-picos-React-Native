import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Slider from '@react-native-community/slider';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peso: 0,
            altura: 0,
            resultado: 0
        };

        this.calcular = this.calcular.bind(this)
    }

    calcular() {
        let imc = this.state.peso / (this.state.altura * this.state.altura)
        let s = this.state
        s.resultado = imc
        if (s.resultado < 16) {
            s.resultado = 'Muito abaixo do peso'
        }
        else if (s.resultado < 17) {
            s.resultado = 'Moderadamente abaixo do peso'
        }
        else if (s.resultado < 18.5) {
            s.resultado = 'Abaixo do peso'
        }
        else if (s.resultado < 25) {
            s.resultado = 'Saudável'
        }
        else if (s.resultado < 30) {
            s.resultado = 'Sobrepeso'
        }
        else if (s.resultado < 35) {
            s.resultado = 'Obesidade Grau 1°'
        }
        else if (s.resultado < 40) {
            s.resultado = 'Obesidade Grau 2°'
        }
        else {
            s.resultado = 'Obesidade Grau 3°'
        }
        this.setState(s)
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.titulo}>Cálculo de IMC</Text>
                    <View style={styles.viewImg}>
                        <Image
                            source={require('./src/imclogo.png')}
                            style={styles.imgLogo}
                        />
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.viewAltura}>
                        <Text style={styles.subtitulos}>
                            Informe sua altura
                        </Text>
                        <Slider
                            minimumValue={0}
                            maximumValue={3}
                            onValueChange={(value) => this.setState({ altura: value })}
                            value={this.state.altura}
                            minimumTrackTintColor='#B0011C'
                            maximumTrackTintColor="#ff0000"
                        />
                        <Text style={styles.subtitulos}>{this.state.altura.toFixed(2)}</Text>
                    </View>
                    <View style={styles.viewPeso}>
                        <Text style={styles.subtitulos}>
                            Informe seu peso
                        </Text>
                        <Slider
                            minimumValue={0}
                            maximumValue={200}
                            onValueChange={(value) => this.setState({ peso: value })}
                            value={this.state.peso}
                            minimumTrackTintColor='#B0011C'
                            maximumTrackTintColor="#ff0000"
                        />
                        <Text style={styles.subtitulos}>{this.state.peso.toFixed(2)}</Text>
                    </View>
                    <View style={styles.viewResultado}>
                        <Text style={styles.textoResultado}>{this.state.resultado != 0 ? this.state.resultado : ''}</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.btn} onPress={this.calcular}>
                        <Text style={styles.btnTexto}>Calcular</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewResultado: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoResultado: {
        color: '#000',
        fontSize: 30
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#2B2B2B',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    body: {
        flex: 2.5,
        marginTop: 10,
        marginBottom: 10,
    },
    titulo: {
        fontSize: 30,
        color: '#FFF'
    },
    imgLogo: {
        width: 100,
        height: 100,
    },
    viewAltura: {
        marginTop: 20,
    },
    viewPeso: {
        marginTop: 20,
    },
    subtitulos: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5
    },
    footer: {
        flex: 0.4,

    },
    btn: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B2B2B',
        height: 40,
    },
    btnTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }

})

export default App;
