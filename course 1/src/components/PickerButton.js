import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const PickerButton = ({ str, color, setter }) => {
    return (
        <View>
            <TouchableOpacity
                style={[style.button, style.odd, {backgroundColor: str}]}
                onPress={() => setter(color + 10)}
            >
                <Text>More {str}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[style.button, style.even, {backgroundColor: str}]}
                onPress={() => setter(color - 10)}
            >
                <Text>Less {str}</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    button: {
        color: "white",
        padding: 15,
    },
    odd: {
        marginTop: 20
    },
    even: {
        marginBottom: 20
    }
})

export default PickerButton;