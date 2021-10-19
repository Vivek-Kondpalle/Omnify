import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native"

const h = Dimensions.get('window').height

const News = (props) => {

    const navigation = useNavigation()

    const onPressNews = () => {
        navigation.navigate('OneNews', {details: props.details})
    }

    return (
        <TouchableOpacity style={styles.newsContainer} onPress={onPressNews}>
            <View style={styles.imgContainer}>
                <Image
                    source={{ uri: props?.urlToImage }}
                    style={styles.image}
                />
            </View>
            <View style={styles.titleDescriptionContainer}>
                <Text style={styles.title}>{props?.title}</Text>
                <Text style={styles.description}>{props?.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    newsContainer:{
        marginHorizontal: 5,
        marginVertical: 10,
        // backgroundColor: 'red',
        padding: 10,
        // paddingVertical: 15,
        height: h * 0.5,
        // borderBottomWidth: 1,
        // borderBottomColor: 'gray'
        // elevation: 5
    },
    imgContainer:{
        width: '100%',
        height: '55%'
    },
    titleDescriptionContainer:{
        marginVertical: 5,
        // marginBottom: 10
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    description:{
        fontSize: 14
    },
    image:{
        width: '100%',
        height: '100%'
    }
})

export default News

