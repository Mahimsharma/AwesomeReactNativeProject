import * as React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// const clickHandler = () =>{
// }

function RegisterScreen({ navigation }) {
  const [name,setName] = React.useState('');
  const [number,setNumber] = React.useState('');
  const [showRegisterScreen, setShowRegisterScreen] = React.useState(true); 

  const clickRegister = () =>{
    setShowRegisterScreen(false);
  }  

  if(showRegisterScreen){
    return (
      <View style={styles.container}>
        <Text style={styles.boldText}>Enter Name:</Text>
        <TextInput 
          onChangeText={(val)=>setName(val)}
          style={styles.input}
          value={name}
          placeholder="e.g Mahim Sharma">  
        </TextInput>

        <Text style={styles.boldText}>Enter Number:</Text>
        <TextInput 
          onChangeText={(val)=>setNumber(val)}
          keyboardType='phone-pad'
          style={styles.input}
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
      <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.boldText}>Hello, Mr. {name}!</Text>
    <Text style={styles.boldText}>Your registered number is: </Text>
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
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.boldText}>Welcome to my First App!</Text>
    </View>
    <View>
    <Button 
      onPress={() => navigation.navigate('RegisterScreen')}
      color='#A41584'
      title="Go ahead" >
    </Button>
      </View>
  </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
           name="Home" 
           component={HomeScreen} 
           options={{ title: 'Welcome' }}
           />
        <Stack.Screen 
          name="RegisterScreen" 
          component={RegisterScreen}
          options={{ title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'pink',
    alignItems: 'flex-start',
    padding: 10,
  },
  boldText:{
   fontSize: 25,
   fontWeight:'bold', 
  },
  input:{
    borderWidth: 1,
    borderRadius:60,
    borderColor:'pink',
    padding: 8,
    margin:10,
    width:300,
  }
});
