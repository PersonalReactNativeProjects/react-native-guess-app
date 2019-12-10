import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native'; 
    
    
const GameOverScreen = props => {
    
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>The Game is Over !</Text>
            <Text style={styles.text}>Number of rounds: {props.roundsNumber} </Text>
            <Text style={styles.text}>Number was: {props.userNumber}</Text>
            <Button  title="Start New Game" onPress={props.onRestart}/>
        </View>
    )
};
    
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginBottom: 20,
    }
});
    
export default GameOverScreen;