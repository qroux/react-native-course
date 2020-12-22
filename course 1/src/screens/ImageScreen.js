import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    const list = [
        {title: "A", url: "https://picsum.photos/100"},
        {title: "B", url: "https://picsum.photos/101"},
        {title: "C", url: "https://picsum.photos/102"},
        {title: "D", url: "https://picsum.photos/103"},
        {title: "E", url: "https://picsum.photos/104"},
        {title: "F", url: "https://picsum.photos/105"},
        {title: "G", url: "https://picsum.photos/106"},
        {title: "H", url: "https://picsum.photos/107"},
        {title: "I", url: "https://picsum.photos/108"},
        {title: "J", url: "https://picsum.photos/109"},
    ]

    return (
        <View>
            <Text>
                ImageScreen
            </Text>
            <View style={style.imagesContainer}>
                <FlatList
                    data={list}
                    renderItem={({item}) => {
                        console.lo
                        return <ImageDetail
                            title={item.title}
                            url={item.url}
                        />

                    }}


                />


            </View>
        </View>

    );
}

const style = StyleSheet.create({
    imagesContainer: {
        paddingVertical: 50
    }

})

export default ImageScreen;