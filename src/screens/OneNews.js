import React from 'react'
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'


const OneNews = () => {

    const { params } = useRoute()

    return (
        <View style={styles.oneNewsContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{params.details.title}</Text>
            </View>
            <View style={styles.imgContainer}>
                <Image
                    source={{ uri: params.details.urlToImage }}
                    style={styles.image}
                />
            </View>
            <View style={styles.mainBodyContainer}>
                <Text style={styles.descriptionText}>{params.details.description}</Text>
                <Text style={styles.contentText}>{params.details.content}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    oneNewsContainer: {
        margin: 10
    },
    titleContainer: {
        marginVertical: 5
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    imgContainer: {
        width: '100%',
        height: '40%',
        marginVertical: 5
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    mainBodyContainer: {
        marginVertical: 10
    },
    descriptionText: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10
    },
    contentText:{
        fontSize: 15
    }
})

export default OneNews

