import React from 'react';
import {StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList} from 'react-native';

export default class App extends React.Component {
constructor(props) {
super(props);
  this.state = { num1: '' , num2: '', result: '',data: []}
}

//Add function
 buttonadd = () => {
   let result = parseInt(this.state.num1) + parseInt(this.state.num2)
   let list = (this.state.num1)+ '+' + (this.state.num2) + '=' + (result)
    //Alert.alert('Hello');


    this.setState (() => {return {result: result}});
    this.setState ({data: [...this.state.data, {key: list}], list: ''});
}

//Subtract function
buttonsubtract = () => {
let result = parseInt(this.state.num1) - parseInt(this.state.num2)
let list = (this.state.num1)+ '-' + (this.state.num2) + '=' + (result)

    this.setState(() => {return {result: result}});
    this.setState ({data: [...this.state.data, {key: list}], list: ''});
}


  render() {

    return (


      <View style = {styles.whole}>
      {/* Heading */}
      <Text style ={{fontSize:45,fontWeight: 'bold'}}> Calculator </Text>
      <Text style= {{marginBottom: 40}}>Saved Calculations</Text>

       {/* Input numbers */}
      <Text>Number 1</Text>
      <TextInput style={{width:200, borderColor: 'black', borderWidth: 1}} onChangeText={(num1) => this.setState({num1})} value={this.state.num1}/>
      <Text>Number 2</Text>
      <TextInput style={{width:200, borderColor: 'black', borderWidth: 1}} onChangeText={(num2) => this.setState({num2})} value={this.state.num2}/>

       {/* Buttons */}
      <View style = {styles.button}>
      <Button  onPress={this.buttonadd} title= "+" />
      <Button  onPress={this.buttonsubtract} title= "-" />
      </View>

       {/* Result Text */}
      <Text style = {{fontSize: 25, fontWeight: 'bold'}}> Result: {this.state.result} </Text>

       {/* List Text */}
      <Text style = {{fontSize: 15, fontWeight: 'bold', marginTop: 30, textDecorationLine: 'underline'}}>History</Text>
      <FlatList data={this.state.data} renderItem={({item}) => <Text>{item.key}</Text>} />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  //Style Whole Body
  whole: {
  marginTop: 60,
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  },
  //Style Button
  button : {
  flexDirection: 'row',
  },

});
