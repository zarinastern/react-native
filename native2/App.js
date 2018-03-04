import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TextInput,Keyboard, keyboardType, clearButtonMode, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      randomNum: '',
      inputNum: '',
      count: 1,
      label: "Guess the number between 1-100",
    };
}
    buttonPressed = () => {
     const inputnumber = this.state.inputNum;
     const randomnumber = this.state.randomNum;
     const tries = this.state.count;

      const check = (randomnumber < inputnumber)? "Too high, Try again!" : "Too low, Try again!"


      if (randomnumber === inputnumber) {
       this.setState(
         {count: tries + 1}
       );
       Alert.alert('Awesome! You guessed it in ' + parseInt(tries) + ' guesses');
      }
      else {
        this.setState(
          {count: tries + 1,
          label: check}
        );
        //Alert.alert("Try again");
      }
    }

    componentDidMount() {
      let number = Math.floor(Math.random() * 100) + 1;
      this.setState({randomNum: parseInt(number)});
    }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container} behavior="padding">

    

      {/*The intial instructions and dynamic status*/}
      <Text style = {{fontSize:20, fontWeight: 'bold'}}>{this.state.label}</Text>

      {/*Inputting the number*/}
      <TextInput clearButtonMode={'always'} keyboardType={'number-pad'} style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText= {(input) => this.setState({inputNum: parseInt(input)})}
      value={this.state.inputNum}/>

        {/*Adding a button*/}
      <Button onPress={this.buttonPressed} title="Make guess" />

      </View>
              </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
