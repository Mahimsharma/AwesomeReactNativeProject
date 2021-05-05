import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Box from './Box';


export default function GameScreen() {

  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [isXChance, setIsXChance] = useState(true);
  const [winner, setWinner] = useState(null);
  const [header,setHeader] = useState('X chance');

  function PlayBox(no) {
    return( 
      <Box 
        no={no}
        boxInfo={{boxes, setBoxes}}
        chance={{ isXChance, setIsXChance }}
        winner={winner}
      />
    )
  }

  const winPosition = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8] ,[2,4,6]
  ]

  function calculateWin() {
    var header = isXChance ? 'X chance' : 'O chance' ; 
    setHeader(header);
    
    for (let i=0;  i<winPosition.length; i++) {
      if( 
        boxes[winPosition[i][0]] !== null &&
        boxes[winPosition[i][0]] === boxes[winPosition[i][1]]
        && boxes[winPosition[i][0]] === boxes[winPosition[i][2]]
       ) {
         setWinner(boxes[winPosition[i][0]]);
         setHeader(boxes[winPosition[i][0]]+' Won!');
         return;
       }
    }

    if( !boxes.includes(null) ){
      setHeader("It's a tie!")
    }
  }

  useEffect(() => {
    calculateWin();
  }, [isXChance])

  function resetValues() {
    setWinner(null);
    setBoxes(Array(9).fill(null));
    setIsXChance(true);
    setHeader('X chance');
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.header}>Tic-Tac-Toe</Text>
      <View style={styles.featureContainer}>
          <Text style={styles.primaryText}>{header}</Text> 
        <Ionicons 
          style={styles.resetIcon}
          name="reload-circle" 
          size={38} 
          color="black" 
          onPress={resetValues}
        />
      </View>
      <View style={styles.playBoard}>
        <View style={styles.rows}>
          {PlayBox(0)}
          {PlayBox(1)}
          {PlayBox(2)}
        </View>
        <View style={styles.rows}>
          {PlayBox(3)}
          {PlayBox(4)}
          {PlayBox(5)}
        </View>
        <View style={styles.rows}>
          {PlayBox(6)}
          {PlayBox(7)}
          {PlayBox(8)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  header:{
    fontSize: 45,
    fontWeight:'bold',
    marginBottom:50
  }
  ,
  playBoard: {
    borderWidth: 10,
    borderRadius: 10,
    borderColor: 'orange'
  },
  rows: {
    flexDirection: 'row',
  },
  resetIcon: {
    position: 'absolute',
    right: 20,
  },
  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  primaryText: {
    fontSize: 36,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'

  },
});