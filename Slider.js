import React, { Component } from "react";
import { View, Text, StyleSheet, } from "react-native";
import Slider from '@react-native-community/slider';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valor: 30
        };

    }

    render() {

        return (
            <View style={styles.container}>

                <Slider
                minimumValue={0}
                maximumValue={100}
                onValueChange={(value) => this.setState({valor: value})}
                value={this.state.valor}
                minimumTrackTintColor='#ff0000'
                maximumTrackTintColor="#00ff00"
                />

                <Text style={{fontSize:30}}>{this.state.valor.toFixed(0)}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
})

export default App;

