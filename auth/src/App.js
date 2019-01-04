import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            // API KEY
          });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication"></Header>
                <LoginForm />
            </View>
        );
    }
}
export default App;
