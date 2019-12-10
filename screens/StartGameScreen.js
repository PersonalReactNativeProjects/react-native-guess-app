import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native'; 
 import Cards  from '../components/Cards';
import  Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer'
    
const StartGameScreen = props => {
    
    const [enteredValue, setEnteredValue] = useState( '');
    
    const [confirmed, setConfirmed] = useState(false);

    const [selectedNumber, setSelectedNumber] = useState();


    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () =>  {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {

        const chosenNumber = parseInt(enteredValue);
        if ( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', "Number has to be a number between 1 and 99.", [{text: 'Okay', style: 'destructive', onPress:resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };
    let confirmedOutput;
    if ( confirmed ) {
        confirmedOutput = 
        <Cards style ={styles.summaryContainer}>
            <Text>You Selected </Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button  title="START GAME" onPress = {() => props.onStartGame(selectedNumber)}/>
        </Cards>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss(); }}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start A New Game!!!</Text>
            <Cards style={styles.inputContainer}>
                <Text>Select A Number</Text>
                <Input  style={styles.input}
                keyboardType='number-pad'
                 blurOnSubmit
                  autoCapitalize='none' 
                  autoCorrect={false} 
                  maxLength={2}
                  onChangeText={numberInputHandler}
                  value={enteredValue} />

                <View style={styles.buttonContainer}>

                 {/* this is my reset button */}
                    <View style={styles.buttonSubContainer}>
                        <Button title="reset" onPress={resetInputHandler} color={Colors.primaryColor} />
                    </View>
    
                {/* This is my confirm button */}
                   <View style={styles.buttonSubContainer}>
                       <Button title="confirm" onPress={confirmInputHandler}/>
                    </View>

                </View>
            </Cards>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
};
    
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 15,
    },

    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        marginVertical: 20,
    },

    buttonSubContainer: {
        width: '40%',
    },

    input: {
        width: 50,
        textAlign: 'center',
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});
    
export default StartGameScreen;