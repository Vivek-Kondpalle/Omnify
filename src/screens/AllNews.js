import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import NetInfo from "@react-native-community/netinfo";
import axios from 'axios'
import moment from 'moment'

import DatePickerComponent from '../components/DatePicker/DatePickerComponent';
import News from '../components/News/News'
import { storeNews, getNewsAsync } from '../utils/storage'
import {API_KEY, URL} from '../constants'

const AllNews = () => {
    const [allNews, setAllNews] = useState([])
    const [pageSize, setPageSize] = useState(5)

    const [startDate, setStartDate] = useState(moment().add(-10, 'd').format('YYYY-MM-DD'))
    const [endDate, setEndDate] = useState(moment().format('YYYY-MM-DD'))
    const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
    const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

    const showStartDatePicker = () => {
        setStartDatePickerVisibility(true);
    };

    const showEndDatePicker = () => {
        setEndDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setStartDatePickerVisibility(false);
        setEndDatePickerVisibility(false);
    };

    const confirmStartDate = (date) => {
        setStartDate(moment(date).format('YYYY-MM-DD'))
        hideDatePicker();
    };

    const confirmEndDate = (date) => {
        setEndDate(moment(date).format('YYYY-MM-DD'))
        hideDatePicker();
    };

    const getNews = async (pageSize) => {
        try {
            const config = {
                headers: {
                    'Authorization': API_KEY 
                }
            }
            const { data } = await axios.get(`${URL}?pageSize=${pageSize}&q=bitcoin&from=${startDate}&to=${endDate}`, config)
            setAllNews(data?.articles)
            await storeNews(allNews)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        NetInfo.fetch().then(state => {
            // console.log("Is connected?", state.isConnected);
            if (state.isConnected) {
                getNews(pageSize)
                const storeItem = getNewsAsync()
                console.log('storeItem', storeItem)
            } else {
                getNewsAsync().then(data => setAllNews(data))
            }
        });
    }, [startDate, endDate])

    // console.log('array', allNews)
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <DatePickerComponent
                    date={moment(startDate).format('DD-MM-YYYY')}
                    isVisible={isStartDatePickerVisible}
                    onConfirm={confirmStartDate}
                    onCancel={hideDatePicker}
                    setDatePickerVisible={showStartDatePicker}
                    title='Start Date'
                />
                <DatePickerComponent
                    date={moment(endDate).format('DD-MM-YYYY')}
                    isVisible={isEndDatePickerVisible}
                    onConfirm={confirmEndDate}
                    onCancel={hideDatePicker}
                    setDatePickerVisible={showEndDatePicker}
                    title='End Date'
                />
            </View>
            <FlatList
                data={allNews}
                renderItem={(itemData) => (
                    <News
                        details={itemData.item}
                        urlToImage={itemData.item.urlToImage}
                        title={itemData.item.title}
                        description={itemData.item.description}
                    />
                )}
                contentContainerStyle={{ paddingBottom: 20 }}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    setPageSize(pageSize + 5)
                    getNews(pageSize)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default AllNews

