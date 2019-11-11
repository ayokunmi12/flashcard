import React from 'react'
import{ StyleSheet, View, Text} from 'react-native'
import {getData} from '../utils/api'
import {connect} from 'react-redux'
import Button from './Button'
import { Vivid, white, cyan, orange} from '../utils/colors'




class DeckPic extends React.Component{
    render(){
        const deck = this.props.navigation.state.params.entryId
        const {decks} = this.props
        const questions = decks[deck].questions
        return (
            <View style = {styles.container}>
                <View  style = {styles.card}>
                    <Text style= {styles.mainText}>{decks[deck].title}</Text>
                    <Text style= {styles.SubText}>{decks[deck].questions.length}</Text>

                     <Button styles = {styles} text={'Add Card'} color ={vivid }
                             onPress={() => this.props.navigation.navigate('AddCard', {entryId: deck})}/>
                     <Button styles = {styles} text={'Start Flashcard'} color ={cyan}
                             onPress={() => this.props.navigation.navigate('Flashcard', {entryId: deck})}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: white,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
    iosBtn:{
        padding: 10,
        borderRadius:7,
        height:45,
        margin:5,
        width:170
    },
    submitBtnText:{
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    card: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: orange,
        margin: 8,
        height:200,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,0.34)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 4,
        shadowOpacity:1
    },
    cardText:{
        fontSize: 4,
        shadowOpacity: 1
    },
    mainText: {
        fontSize: 40,
        color: white
    },
    SubText:{
        fontSize: 30,
        color: white,
        marginBottom: 160
    }

  })

  function mapStateToProps({decks}){
      return {
          decks
      }
  }

  export default connect(mapStateToProps)(DeckPic);