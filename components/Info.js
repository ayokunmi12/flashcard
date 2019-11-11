import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'



export function Info ({ onPress, style, text}){
    return(
        <TouchableOpacity onPress = {onPress}>
            <Text> style = {style}>{text}</Text>
        </TouchableOpacity>
    )
}
