import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'


const ColorsScreen = () => {
    const [colors, setColors] = useState([])

    return (
        <View style={{flex: 1}}>
            <Text>Colors Screen: {colors.length}</Text>
            <TouchableOpacity
                style={style.button}
                onPress={() => setColors([`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`, ...colors,])}
            >
                <Text>Add random colors</Text>
            </TouchableOpacity>
            <View style={style.colorsContainer}>
                <FlatList
                    horizontal
                    data={colors}
                    keyExtractor={(color) => color}
                    renderItem={({ item }) => {
                        return (
                            <View style={[style.square, {backgroundColor: item}]}>
                                <Text>{item}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    button: {
        backgroundColor: '#1e90ff',
        color: "white",
        padding: 30,
        marginVertical: 50

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

export default ColorsScreen;