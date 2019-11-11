export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
//export const GET_DECKS = 'GET_DECKS'

export function addDeck (deck) {
    return{
        type: ADD_DECK,
        deck
    }
}

export function receiveDecks (deck){
    return{
        type: RECEIVE_DECKS,
        deck
    }
}

export function addCard (deck){
    return{
        type: ADD_CARD_TO_DECK,
        deck
    }
}

