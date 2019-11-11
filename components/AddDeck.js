import React from 'react'
import{StyleSheet, View, Text, Button, TextInput} from 'react-native'
import {saveDeckTitle} from '../utils/api'
import {addDeck} from '../actions'
import { connect } from 'react-redux'
import SubmitButton from './SubmitButton'
import {orange} from '../utils/colors'



class AddDeck extends React.Component{

    state = {
        text: ''
    }

    submitName = () => {
        const {text} = this.state

        saveDeckTitle(title)
        this.props.dispatch(addDeck(text))
        this.props.navigation.navigate('DeckView', {entryId: text})
        this.setState({ text: ''})
    }
     
    render(){
        return(
            <view style= {styles.container}>
                <Text style={styles.title}>Hello from the Add Deck Component</Text>
                <TextInput style={styles.input}
                           onChangeText = {(text) => this.setState({text: text})} 
                           value ={this.state.text}>
                </TextInput>
                <SubmitButton style = {styles.SubmitBtn} onPress = {(this.submitName)}/>
                
            </view>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        width: 200,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: '#757575',
        margin: 50,
        borderRadius: 8
    },
    title: {
        fontSize: 30,
        color: '#333',
        textAlign: 'center'
    },
    SubmitBtn:{
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        padding: 10,
        backgroundColor: orange,
        borderRadius: 7,
        overflow: 'hidden'

    }
  })


  export default connect()(AddDeck);