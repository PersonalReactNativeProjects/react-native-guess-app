import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Button} from 'react-native'; 
import NumberContainer from '../components/NumberContainer';
import Cards from '../components/Cards';



const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }else {
        return rndNum;
    }
}
    
    
const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice) );

    const [rounds,  setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver} = props;

    useEffect( () => {
        if ( currentGuess === userChoice) {
            onGameOver(rounds);
        }
    },  [currentGuess, userChoice, onGameOver ]);

const  nextGuessHandler = direction => {
    if  (
        (direction === 'Lower' && currentGuess < props.userChoice) ||  (direction === 'Higher' && currentGuess > props.userChoice))  {
    
    Alert.alert( "Don't Lie !!!", "You know that this is wrong..." , [ {text: 'sorry', style: 'cancel'}  ] );
    return;
    }

    if (direction === 'Lower') {
       currentHigh.current = currentGuess;
    }else {
        currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(curRounds => curRounds + 1);
};


    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Cards style={ styles.buttonContainer}>
                <Button title="LOWER"  onPress = {nextGuessHandler.bind(this, 'Lower')}/>
                <Button title="HIGHER" onPress={nextGuessHandler.bind(this, 'Higher')} />
            </Cards>
        </View>
    )
};
    
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width:300,
        maxWidth: '80%',
    }
});
    
export default GameScreen;