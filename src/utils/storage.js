import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeNews(value){
    try {
        const newsArray = JSON.stringify(value)
        await AsyncStorage.setItem('@newsArray', newsArray)
    } catch (error) {
        console.log(error)
    }
}

export async function getNewsAsync(){
    try {
        const newsArray = await AsyncStorage.getItem('@newsArray')
        if(newsArray !== null){
            console.log('in storage', JSON.parse(newsArray))
            parsedNewsArray = JSON.parse(newsArray)
            return parsedNewsArray
        }
    } catch (error) {
        console.log(error)
    }
    return null
}