import {StyleSheet} from 'react-native';

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