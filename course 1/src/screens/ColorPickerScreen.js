import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'


const ColorPickerScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    return (
        <View style={{flex: 1}}>
            <Text>Color Picker</Text>
            <TouchableOpacity
                style={[style.button, style.odd]}
                onPress={() => setRed(red + 10)}
            >
                <Text>More Red</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[style.button, style.even]}
                onPress={() => setRed(red - 10)}
            >
                <Text>Less Red</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[style.button, style.odd]}
                onPress={() => setGreen(green + 10)}
            >
                <Text>More Green</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[style.button, style.even]}
                onPress={() => setGreen(green - 10)}
            >
                <Text>Less Green</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[style.button, style.odd]}
                onPress={() => setBlue(blue + 10)}
            >
                <Text>More Blue</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[style.button, style.even]}
                onPress={() => setBlue(blue - 10)}
            >
                <Text>Less Blue</Text>
            </TouchableOpacity>
            <View style={style.colorsContainer}>
                <View style={[style.square, {backgroundColor: `rgb(${red}, ${green}, ${blue})`}]}></View>
                <Text>{`${red}, ${green}, ${blue}`}</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    button: {
        backgroundColor: '#1e90ff',
        color: "white",
        padding: 30,
    },
    odd: {
        margintop: 20
    },
    even: {
        marginBottom: 20
    },
    colorsContainer: {
        paddingVertical: 30,
        height: 200,
        borderColor: "rgba(212, 212, 212, 0.5)",
        borderWidth: 0.7
    },
    square: {
        height: 100,
        width: 100,
        marginHorizontal: 10,
        borderColor: "rgba(212, 212, 212, 0.5)",
        borderWidth: 0.5
    }
})

export default ColorPickerScreen;