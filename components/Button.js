import React from 'react'
import{ View, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function Button({onPress, styles, text, color}) {
    return (
        <TouchableOpacity onPress ={onPress}
                          style={[styles. iosBtn, {backgroundColor: color}]}>
                    <Text style= {styles.submitBtnText}>{text}</Text>
         </TouchableOpacity>
    )

}