import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ImageDetail = ({ title, url }) => {
    return (
        <View style={style.fullContainer}>
            <Image
                style={style.image}
                source={{
                    uri: url,
                    height: 100,
                    width: 100
                }} />
            <Text style={style.text}>{title}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    fullContainer: {
        flexDirection: 'row',
        marginBottom: 20
    },
    image: {

    },
    text: {
        flex: 1,
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
        paddingLeft: 50

    }
})

export default ImageDetail;