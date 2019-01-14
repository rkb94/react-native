import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };
    componentWillMount() {
        firebase.initializeApp({
            // API KEY
            apiKey: "AIzaSyDGvgmlb5GvX5gXuYoW8dTKG2YCSfhzNFw",
            authDomain: "auth-b3b1d.firebaseapp.com",
            databaseURL: "https://auth-b3b1d.firebaseio.com",
            projectId: "auth-b3b1d",
            storageBucket: "auth-b3b1d.appspot.com",
            messagingSenderId: "221767404302"
          });
          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              this.setState({ loggedIn: true });
            } else {
              this.setState({ loggedIn: false });
            }
          });
        }
      
        renderContent() {
          switch (this.state.loggedIn) {
            case true:
              return (
                  <CardSection>
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                  </CardSection>
              );
            case false:
              return <LoginForm />;
            default:
              return <Spinner size="large" />;
          }
        }
      
        render() {
          return (
            <View>
              <Header headerText="Authentication" />
              {this.renderContent()}
            </View>
          );
        }
      }
      
      export default App;
