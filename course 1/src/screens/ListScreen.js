import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'


const ListScreen = () => {
    const people = [
        { name: 'A'},
        { name: 'B'},
        { name: 'C'},
        { name: 'D'},
        { name: 'E'},
        { name: 'F'}
    ]

    return (
        <View>
            <Text>List Screen</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(person) => person.name}
                data={people}                
                renderItem={({ item }) => {
                    return <Text style={style.itemStyle}>{item.name}</Text>
                }}
            />
        </View>
    );
}

const style = StyleSheet.create({
    itemStyle: {
        margin: 50
    }
})

export default ListScreen;