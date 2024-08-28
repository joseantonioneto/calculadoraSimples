import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';


export default function App() {
  const [insereValor, setInsereValor] = useState('');
  const [resultado, setResultado] = useState('');
  const aoApertar = (valor) => {
    setInsereValor (insereValor + valor);
  };
  const zerarConta = () =>{
    setResultado('');
    setInsereValor('');
  };
  const handleEqual = () => {
      setResultado(eval(insereValor).toString());
  };

  return (
    <View style={styles.container}>
      <Text  style={styles.resultado}>{resultado || insereValor || '0'}</Text>
      <View style={styles.row}>
        <Button theme={{ colors: { primary: 'white' } }} mode="outlined" onPress={() => aoApertar('7')}>7</Button>
        <Button theme={{ colors: { primary: 'white' } }} mode="outlined" onPress={() => aoApertar('8')}>8</Button>
        <Button theme={{ colors: { primary: 'white' } }} mode="outlined" onPress={() => aoApertar('9')}>9</Button>
        <Button theme={{ colors: { primary: 'black' } }} mode="contained" onPress={() => aoApertar('/')}>/</Button>
      </View>
      <View style={styles.row}>
        <Button theme={{ colors: { primary: 'white' } }} mode="outlined" onPress={() => aoApertar('4')}>4</Button>
        <Button theme={{ colors: { primary: 'white' } }} mode="outlined" onPress={() => aoApertar('5')}>5</Button>
        <Button theme={{ colors: { primary: 'white' } }} mode="outlined" onPress={() => aoApertar('6')}>6</Button>
        <Button theme={{ colors: { primary: 'black' } }} mode="contained" onPress={() => aoApertar('*')}>*</Button>
      </View>
      <View style={styles.row}>
        <Button theme={{ colors: { primary: 'white' } }} mode="outlined" onPress={() => aoApertar('1')}>1</Button>
        <Button theme={{ colors: { primary: 'white' } }} mode="outlined" onPress={() => aoApertar('2')}>2</Button>
        <Button theme={{ colors: { primary: 'white' } }} mode="outlined" onPress={() => aoApertar('3')}>3</Button>
        <Button theme={{ colors: { primary: 'black' } }} mode="contained" onPress={() => aoApertar('-')}>-</Button>
      </View>
      <View style={styles.row}>
        <Button theme={{ colors: { primary: 'white' } }} mode="outlined" onPress={() => aoApertar('0')}>0</Button>
        <Button theme={{ colors: { primary: 'white' } }} mode="outlined" onPress={zerarConta}>Zerar</Button>
        <Button theme={{ colors: { primary: 'white' } }} mode="outlined" onPress={handleEqual}>=</Button>
        <Button theme={{ colors: { primary: 'black' } }} mode="contained" onPress={() => aoApertar('+')}>+</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent: 'center',
    backgroundColor: '#7e2d17',
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin: 10,
    padding: 10,
  },
  resultado:{
    textAlign:'right',
    fontSize: 48,
    margin:10,
    backgroundColor:'#99442c'
    
  },
});
