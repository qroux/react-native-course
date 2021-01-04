import React, {useState, useEffect} from 'react'
import { ScrollView, View, Text, Image, FlatList, StyleSheet } from 'react-native'
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Spacing, Fonts } from '../abstracts/main';
import yelp from "../api/yelp";

const ShowScreen = ({route}) => {
    const [result, setResult] = useState([])
    const {name, review_count, rating} = result

    const getResult = async (restaurantId) => {
        const res = await yelp.get(`/${restaurantId}`)
        setResult(res.data);

    }

    useEffect(() => {
        getResult(route.params.id)
    }, [])

    


    return (
        <ScrollView contentContainerStyle={style.fullContainer}>
            <View style={style.header}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
                <View>
                    <Text>{review_count} <Ionicons name="person" size={Fonts.small} color="black" /> | {rating} <AntDesign name="staro" size={Fonts.small} color="black" /></Text>
                </View>
            </View>
            <View>
                <Text style={{color: 'black'}}>{route.params.address}</Text>
            </View>
            <FlatList
                contentContainerStyle={style.imagesContainer}           
                data={result.photos}
                keyExtractor={image => image}
                renderItem={({item}) => {
                    return <Image style={style.image} source={{ uri: item, height: 170, width: 300 }} />
                }}
            />
        </ScrollView>
    )
}

const style = StyleSheet.create({
    fullContainer: {
        padding: Spacing.regular

    },
    imagesContainer: {
        alignItems: 'center',
        marginTop: Spacing.regular
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        marginVertical: Spacing.small
    }
})

export default ShowScreen;