import React from 'react'
import {NavigationActions} from 'react-navigation'
import { StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import { cyan, white,pink,orange, vivid} from '../utils/colors'
import {SubmitButton} from './SubmitButton'
import {connect} from 'react-redux'
import Button from './Button'
import {Info} from './Info.js'


class Flashcard extends React.Component {

    state = {
        questionNumber: 0,
        showQuestion: false,
        Correct: 0,
        Incorrect: 0
    }

showAnswer = () => (
    !this.state.showQuestion ? this.ListeningStateChangedEvent({showQuestion: true})
    :this.setState ({showQuestion: false})

)

submitAnswer = (answer) => {
    const { questionNumber} = this.state
    const deck = this.props.navigation.state.params.entryId
    const decks = this.props.decks
    const Correct = deck[decks].questions[questionNumber].correctAnswer.toLowerCase()

    if(answer === Correct){
        this.setState({ Correct: this.state.Correct + 1   })
    }else{
        this.setState({Incorrect: this.state.Incorrect + 1})
    }
    this.setState({ questionNumber: this.state.questionNumber + 1, showQuestion: false})
}

    render(){
        const decks = this.props.decks
        const deck = this.props.Navigation.state.params.entryId
        const number = this.state.questionNumber +1
        const questionNumber = this.state.questionNumber

        if (questionNumber === decks[decks].questions.length) {
            return(
                <View>
                    <View>
                        <Text> you got {this.state.Correct} out of {decks[decks].questions.length}</Text>
                        { this.state.Correct > this.state.Incorrect? <Text style= {{fontSize: 90}}> Happy</Text>
                           :<Text style= {{fontSize: 90}}> Happy</Text> }                                         
                    </View>
                </View>
            )
        }

        return(
            <View style = {styles.container}>

                <View style = {styles.card}>
                    <Text style = {styles.questions}>{number} /{decks[decks].questions.length}</Text>
                     { ! this.state.showQuestion ?  <Text style = {styles.mainText}>{decks[decks].question[questionNumber].question}</Text>
                       :  <Text style = {styles.mainText}>{decks[decks].question[questionNumber].answer}</Text> }

                     { ! this.state.showQuestion ?  <Info style = {styles.answer} text = {'Show Answer'} onPress = {this.showAnswer}></Info>
                       :  <Info style = {styles.answer} text = {'Show Answer'} onPress = {this.showAnswer}></Info>}

                    <Button color = {pink} styles = {styles} text = {'Correct'}  onPress = {() => this.submitAnswer('true')}/>
                    <Button color = {pink} styles = {styles} text = {'Incorrect'} onPress = {() => this.submitAnswer('false')}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: white,
      alignItems: 'center',
      justifyContent: 'center',
      //padding: 10
    },
    iosBtnayo:{
        padding: 10,
        borderRadius:7,
        height:45,
        margin:5,
        width:160
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
    answer:{
        color: white,
        fontSize: 20,
        margin: 20,
    },
    question:{
        top: 0,
        alignSelf:'flex-start',
        left: 0,
        color: white,
        fontSize: 20,
        margin: 5,
        position: 'absolute'
    },
    submitBtnText:{
        color: white,
        fontSize: 26,
        textAlign: 'center'
    },
    mainText:{
        fontSize: 40,
        color: white,
        marginTop: 40,
        textAlign: 'center'

    }
})

function mapStateToProps(decks){
    return{
        decks
    }
}

export default connect(mapStateToProps)(Flashcard);