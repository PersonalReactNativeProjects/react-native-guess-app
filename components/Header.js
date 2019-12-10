import React from 'react'
import  {View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';


const Header =(props) => {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerTitle}>{props.title}</Text>
            </View>

            <View>
                <Text style={styles.headerTitle}>{props.userNumber}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 90,
        paddingTop: 20,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: 'black',
        fontSize: 20,
        
    },
})

export default Header;
