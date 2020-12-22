import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

import PickerButton from '../components/PickerButton'


const ColorPickerScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    return (
        <View style={{flex: 1}}>
            <Text>Color Picker</Text>
            <PickerButton
                str='red'
                color={red}
                setter={setRed}
            />
            <PickerButton
                str='green'
                color={green}
                setter={setGreen}
            />
            <PickerButton
                str='blue'
                color={blue}
                setter={setBlue}
            />
            <View style={style.colorsContainer}>
                <View style={[style.square, {backgroundColor: `rgb(${red}, ${green}, ${blue})`}]}></View>
                <Text>{`${red}, ${green}, ${blue}`}</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
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