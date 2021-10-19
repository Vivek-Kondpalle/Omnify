import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'

const DatePickerComponent = (props) => {
  return (
    <View style={styles.dateContainer}>
      <TouchableOpacity onPress={props.setDatePickerVisible}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{props.title}</Text>
        <Text> {props.date} </Text>
      </TouchableOpacity>
      <DateTimePicker
        isVisible={props.isVisible}
        mode="date"
        onConfirm={props.onConfirm}
        onCancel={props.onCancel}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  dateContainer:{
    flex: 1, 
    marginHorizontal:10, 
    marginVertical: 5
  }
})

export default DatePickerComponent

