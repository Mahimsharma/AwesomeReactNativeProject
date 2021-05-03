import * as React from 'react';
import { Button, Text, View } from 'react-native';
import globalstyles from '../styles/globalstyles';

function HomeScreen({ navigation }) {
    return (
    <View style={globalstyles.container}>
        <View style={globalstyles.header}>
            <Text style={globalstyles.boldText}>Welcome to my First App!</Text>
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
 