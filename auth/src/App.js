import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDGvgmlb5GvX5gXuYoW8dTKG2YCSfhzNFw",
            authDomain: "auth-b3b1d.firebaseapp.com",
            databaseURL: "https://auth-b3b1d.firebaseio.com",
            projectId: "auth-b3b1d",
            storageBucket: "auth-b3b1d.appspot.com",
            messagingSenderId: "221767404302"
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