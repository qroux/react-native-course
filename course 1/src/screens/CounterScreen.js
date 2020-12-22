import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const CounterScreen = () => {
    const [counter, setCounter] = useState(0)

    return (
        <View>
            <Text>Counter Screen</Text>
            <Text>Counter: {counter}</Text>
            <TouchableOpacity style={style.button} onPress={() => {setCounter(counter + 1)}}>
                <Text style={style.text}>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={() => {setCounter(counter - 1)}}>
                <Text style={style.text}>Decrease</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    button: {
        backgroundColor: '#1e90ff',
        color: "white",
        marginVertical: 10,
        height: 70,
        justifyContent: 'center',
        alignItems: "center"
    },
    text: {
        color: "white",
        textTransform: "uppercase"
    }
})

export default CounterScreen;