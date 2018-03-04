import React from 'react';
import {StyleSheet, Text, View, Button, Alert, TextInput, Image} from 'react-native';

export default class App extends React.Component {
constructor(props) {
super(props);
  this.state = { num1: '' , num2: '', result: '',}
}

//Add function
 buttonadd = () => {
   let result = parseInt(this.state.num1) + parseInt(this.state.num2)
    //Alert.alert('Hello');
    this.setState (() => {
    return {result: result}
  });
}

//Subtract function
buttonsubtract = () => {
let result = parseInt(this.state.num1) - parseInt(this.state.num2)
    this.setState(() => {
      return {result: result}
    });
}


  render() {

    return (
      <View style = {styles.whole}>
      <Text style ={{fontSize:45,fontWeight: 'bold', marginBottom: 40,}}> Calculator </Text>

      <Text>Number 1</Text>
      <TextInput style={{width:200, borderColor: 'black', borderWidth: 1}} onChangeText={(num1) => this.setState({num1})} value={this.state.num1}/>
      <Text>Number 2</Text>
      <TextInput style={{width:200, borderColor: 'black', borderWidth: 1}} onChangeText={(num2) => this.setState({num2})} value={this.state.num2}/>

      <View style = {styles.button}>
      <Button  onPress={this.buttonadd} title= "+" />
      <Button  onPress={this.buttonsubtract} title= "-" />
      </View>

      <Text> Result: {this.state.result} </Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({

  //Style Whole Body
  whole: {
  marginTop: 60,
  flex: 1,
  alignItems: 'center',
  },

  //Style Button
  button : {
  flexDirection: 'row',
  },

});
