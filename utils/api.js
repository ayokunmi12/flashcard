import {AsyncStorage} from 'react-native'

const FLASHCARDS_STORAGE_KEY = 'flashcards: decks'









const initialData = {
    ComputerScience:{
      title: 'Computer Science',
      questions: [
          {
              questions: 'How many departments does it have?',
              answer: 'It has four departments',
              correctAnswer: 'true'
          },
          {
            questions: 'How many master program does it have?',
            answer: 'It has five master programs',
            correctAnswer: 'false'
          },
          {
            questions: 'How many bachelor programs does it have?',
            answer: 'It has six bachelor programs',
            correctAnswer: 'false'
          }
        ]
    },

    Education: {
        title: 'Education',
        questions: [
        {
            questions: 'How many departments does it have?',
              answer: 'It has five departments',
              correctAnswer: 'true'
        },
        {
            questions: 'How many master programs does it have?',
              answer: 'It has five departments',
              correctAnswer: 'true'
        },
        {
            questions: 'How many bachelor program does it have?',
              answer: 'It has seven departments',
              correctAnswer: 'true'
            }

        ]
    }

},

      
export const getData = () => {
     return initialData

 }

 export function getDecks (deck) {
   return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
   .then(results =>{
     if (results === null){
       AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initialData))
       return initialData
     } else{
       return JSON.parse(results)
     }
   })
  }

 export function saveDeckTitle (title){
  return AsyncStorage.mergetItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    }
  }))
 }

 
 export function addCardToDeck (name, card){
   return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
   .then(results => JSON.parse(results))
   .then(results => {
     results[name].questions.push(card)
     AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY,JSON.stringify(results))
       return results
   }) 
 }
