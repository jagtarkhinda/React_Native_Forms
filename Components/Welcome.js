import React, {Fragment} from 'react';
import App from '../App'
import {
    TextInput,
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';




export default class Welcome extends React.Component{
    constructor(){
        super()
      
    }

    render(){
        return (
             <View>
               
                <Text>Welcome</Text>
                <Button 
                title = "go back"
                onPress = { () => this.props.navigation.goBack()}
                />


            </View>
        )
    }

}


