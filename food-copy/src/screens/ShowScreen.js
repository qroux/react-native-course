import React, {useState, useEffect} from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import yelp from "../api/yelp";

const ShowScreen = ({route}) => {
    // const [images, setImages] = useState([])

    // const searchImages = async (restaurantId) => {
    //     const res = await yelp.get('/businesses', {params: {id: restaurantId}})
    //     setImages(res.data.photos);

    // }

    // useEffect(() => {
    //     searchImages(route.params.id)
    // }, [])


    return (
        <View>
            <Text>Show Screen: {route.params.id} | images: 0</Text>
            {/* <FlatList
                data={images}
                keyExtractor={image => image}
                renderItem={({item}) => {
                    <Image source={{ uri: image
                    , height: 100, width: 270 }} />
                }}
            /> */}
        </View>
    )
}


export default ShowScreen;