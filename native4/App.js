import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
  super(props);
    this.state = { text: '', data: []}
  }

  buttonAdd = () => {
          this.setState({data: [...this.state.data, {key: this.state.text}], text: ''})
      };

      buttonClear = () => {
          this.setState({data: []})
  }



  render() {
    return (
      <View style={styles.container}>

      <TextInput style={{width:200, borderColor: 'black', borderWidth: 1}} onChangeText={(text) => this.setState({text})} value={this.state.text}/>

      <View style = {styles.button}>
      <Button  onPress={this.buttonAdd} title= "ADD" />
      <Button  onPress={this.buttonClear} title= "CLEAR" />
      </View>

      <Text style = {{fontSize: 15, fontWeight: 'bold', marginTop: 30, textDecorationLine: 'underline'}}>Shopping List</Text>
      <FlatList data={this.state.data} renderItem={({item}) => <Text>{item.key}</Text>} />




      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:250,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button : {
  flexDirection: 'row',
  },

});
