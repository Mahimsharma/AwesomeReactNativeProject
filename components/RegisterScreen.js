import * as React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import globalstyles from '../styles/globalstyles';

export default function RegisterScreen({ navigation }) {
    const [name,setName] = React.useState('');
    const [number,setNumber] = React.useState('');
    const [showRegisterScreen, setShowRegisterScreen] = React.useState(true); 
  
    const clickRegister = () =>{
      setShowRegisterScreen(false);
    }  
  
    if(showRegisterScreen){
      return (
        <View style={globalstyles.container}>
          <Text style={globalstyles.boldText}>Enter Name:</Text>
          <TextInput 
            onChangeText={(val)=>setName(val)}
            style={globalstyles.input}
            value={name}
            placeholder="e.g Mahim Sharma">  
          </TextInput>
  
          <Text style={globalstyles.boldText}>Enter Number:</Text>
          <TextInput 
            onChangeText={(val)=>setNumber(val)}
            keyboardType='phone-pad'
            style={globalstyles.input}
            value={number}
            placeholder="+91 9536023456">
          </TextInput>
  
          <Button 
            color='#641584'
            onPress={clickRegister}
            title="Done!" >
          </Button>
          </View>
      );
    }
    else {
      return (
      <View style={globalstyles.container}>
        <View style={globalstyles.header}>
          <Text style={globalstyles.boldText}>Hello, Mr. {name}!</Text>
          <Text style={globalstyles.boldText}>Your registered number is: </Text>
          <Text style={{color:'white', fontSize:25, fontWeight:'bold'}}>{number}</Text>
        </View>
      <View>
      <Button 
        onPress={() => setShowRegisterScreen(true)}
        color='#841584'
        title="Update" >
      </Button>
        </View>
      </View>
      );
    }
  }