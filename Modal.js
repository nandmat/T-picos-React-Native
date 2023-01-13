// Para esse código temos a Component ENTRAR, então consultar src/Entrar.js

import React, { Component } from "react";
import { Keyboard, View, Text, StyleSheet, TextInput, Platform, Button, Modal } from "react-native";
import Entrar from "./src/Entrar";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };

        this.entrar = this.entrar.bind(this);
        this.fechar = this.fechar.bind(this);

    }

    fechar(statusModal) {
        this.setState({ modalVisible: statusModal })
    }

    entrar() {
        this.setState({ modalVisible: true })
    }
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Entrar"
                    onPress={this.entrar}
                />

                <Modal
                    animationType="slide"
                    visible={this.state.modalVisible}
                    transparent={true}
                >
                    <View style={{margin: 15, flex: 1, alignItems: "center", justifyContent: 'center'}}>
                        <Entrar fechar={() => this.fechar(false)} />
                    </View>

                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default App;

