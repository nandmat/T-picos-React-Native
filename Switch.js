import { View, Text, StyleSheet, Switch} from "react-native";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false
        };

    }

    render() {

        return (
            <View style={styles.container}>
                <Switch
                value={this.state.status}
                onValueChange={(valor) => this.setState({status: valor})}
                thumbColor="#ff0000"
                />
                <Text style={{textAlign:'center', fontSize:30}}>{(this.state.status) ? "Ativo" : 'Inativo'}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})

export default App;

