import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Switch, TextInput, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valuePicker: 0,
            generos: [
                { key: 1, genero: 'Masculino' },
                { key: 2, genero: 'Feminino' },
                { key: 3, genero: 'Prefiro não dizer' },
            ],
            idade: 0,
            nome: '',
            valor: 0,
            studante: false
        };

        this.cadastrar = this.cadastrar.bind(this)

    }

    cadastrar(){
        // if(this.state.nome == '' || this.state.idade <= 0 || this.state.valor <= 0 || this.state.valuePicker == 0){
        //     alert('Dados incorretos');
        //     return
        // } else {
            alert(
                'Nome: '+ this.state.nome + '\n' +
                'Idade:' + this.state.idade + '\n',
                'Estudante? ' + this.studante ? 'Sim' : 'Não' + '\n' +
                'Gênero: ' + this.state.generos[this.state.valuePicker].genero + '\n' +
                "Limite desejado:" + this.state.valor

            );
        // }
    }

    render() {

        let generosPicker = this.state.generos.map((value, key) => {
            return <Picker.Item key={key} value={key} label={value.genero} />
        })

        return (
            <View style={styles.container}>
                <View style={styles.header}>

                    <Image
                        style={styles.logo}
                        source={require('./src/react.png')}
                    />

                </View>
                <View style={styles.body}>

                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu nome'
                        onChangeText={(texto) => this.setState({ nome: texto })}
                    />

                    <View style={styles.switch}>
                        <Text>Você é estudante?</Text>
                        <Switch
                            value={this.state.studante}
                            onValueChange={(valor) => this.setState({ studante: valor })}
                            thumbColor="#ff0000"
                        />
                    </View>

                    <View style={styles.picker}>

                        <TextInput
                            style={styles.input}
                            placeholder='Digite sua idade'
                            onChangeText={(texto) => this.setState({ idade: texto })}
                        />
                        <Text style={{ textAlign: 'center', color: '#000', fontSize: 15 }}>Gênero:</Text>
                        <Picker
                            selectedValue={this.state.valuePicker}
                            onValueChange={(itemValue, itemIndex) => this.setState({ valuePicker: itemValue })}
                        >
                            {generosPicker}
                        </Picker>


                    </View>

                    <Slider
                        minimumValue={0}
                        maximumValue={10000}
                        onValueChange={(value) => this.setState({ valor: value })}
                        value={this.state.valor}
                        minimumTrackTintColor='#ff0000'
                        maximumTrackTintColor="#00ff00"
                        style={{ marginBottom: 15, marginTop: 20 }}
                    />
                    <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 10 }}>


                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={{ fontSize: 30, marginTop: -20 }}>
                                {this.state.valor.toFixed(2)}
                            </Text>

                        </View>
                    </View>
                    <View style={styles.box}>

                        <TouchableOpacity style={styles.botao} onPress={this.cadastrar}>
                            <View style={styles.btnArea}>
                                <Text a
                                    style={styles.btnTexto}>CADASTRAR</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    body: {
        
    },
    footer: {

        backgroundColor: '#aaa'
    },
    logo: {
        height: 130,
        width: 130,
        borderRadius: 80
    },
    box: {
        alignItems:'center',
        margin: 10
    },
    switch: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 40
    },
    picker: {
        // flexDirection:'row'
    },
    input: {
        height: 45,
        borderRadius: 30,
        backgroundColor: '#CEDEE6',
        margin: 15,
        fontSize: 20,
        padding: 10,
        color: ''
    },
    botao: {
        width: 100,
        height: 100,
        borderColor: '#FF103E',
        borderWidth:1.3,
        borderRadius: 80,
        margin: -10,

    },
    btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTexto: {
        fontSize: 13,
        fontWeight: 'bold',
        color: "#FF103E"

    }
})

export default App;

