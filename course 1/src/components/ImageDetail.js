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
            <Text>{title}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    fullContainer: {
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        marginBottom: 20
    },
    image: {
        marginRight: 50
    }
})

export default ImageDetail;