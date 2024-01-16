import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = button => {
    if (button === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if(button === '<='){
      setInput((prevInput) => prevInput.slice(0, -1));
    } else if (button === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(prevInput => prevInput + button);
    }
  };

  const renderButtons = () => {
    const buttons = [
      ['C','%','<=','/'],
      ['7', '8', '9', '*'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['00', '0', '.', '='],
    ];

    return (
      <FlatList
        data={buttons}
        renderItem={({item, index}) => (
          <View key={index} style={styles.row}>
            {item.map(button => (
              <TouchableOpacity
                key={button}
                style={styles.button}
                onPress={() => handleButtonPress(button)}>
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>{renderButtons()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  displayText: {
    fontSize: 30,
  },
  resultText: {
    fontSize: 24,
    color: 'gray',
  },
  buttonsContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    // padding: 20,
    borderRadius: 5,
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
  },
});

export default App;
