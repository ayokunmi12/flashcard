import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import DeckView from './components/DeckView'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'
import {vivid, white} from './utils/colors'
import AddDeck from './components/AddDeck'
import DeckPic from './components/DeckPic'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {createStore} from 'redux'
import AddCard from './components/AddCard'
import  constants  from 'expo-constants'
import Flashcard from './components/Flashcard'
import { createAppContainer } from 'react-navigation'



export function MyStatusBar ({ backgroundColor,...props}){
  return(
    <View style = {{ backgroundColor, height: constants.StatusBarHeight}}>
        <StatusBar translucent backgroundColor = {backgroundColor}{...props} />
    </View>
  )
}
const AppContainer = createAppContainer (createBottomTabNavigator)({
//const Tabs = createBottomTabNavigator({
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor}) => <MaterialCommunityIcons name='cards' size={30} color={tintColor}/>
    }
  },

    AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor}) => <FontAwesome name = 'plus-square' size={30} color={tintColor}/>
    }
  }
},
{
  tabBarOptions: {
    activeTintColor: vivid,
    style:{
      height: 56,
      backgroundColor: white,
    }
  }
})


const MainNavigator = createStackNavigator ({
     Home: {
       screen: Tabs,
       navigationOptions: {
         header: null
       }
     },
     DeckPic: {
  
      screen: DeckPic,
       navigationOptions: {
         title: 'Deck Clue',
         headerTintColor: white,
         headerStyle:{
           backgroundColor:vivid
         }

       }
     },

     AddCard: {
         screen: AddCard,
         navigationOptions: {
           title: 'Add Card',
           headerTintColor: white,
           headerStyle: {
             backgroundColor: vivid
           }
         }
     },
     Flashcard: {
        screen: Flashcard,
        navigationOptions: {
          title: Flashcard,
            headerTintColor: white,
            headerStyle:{
            backgroundColor: vivid
          }
        }
      }
})




export default class App extends React.Component {

  componentDidMount(){
    setLocalNotification()
  }

  render() {
    //const { createBottomTabNavigator } = this.props.navigation
  
    return (
      <Provider store =  {createStore(reducer)}>
      <View style={{flex: 1}}>
          <MyStatusBar  backgroundColor = {vivid}  barStyle= 'Light-content'/>
          <MainNavigator/>
      </View>
      </Provider>
    );
  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
/*});*/

