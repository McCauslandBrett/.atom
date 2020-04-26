import React, {Component} from 'react';
import { View, Text, StyleSheet,SafeAreaView,ScrollView,TextInput} from 'react-native';
import {Header, Left, Right} from 'native-base';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon  from "../components/icons.js";
import {Ionicons} from "@expo/vector-icons";
import styles from '../styles.js'
import {updateCoverText} from '../actions/card.js'
class FreshCardScreen extends Component{
  // static navigationOptions = {
  //
  // }

  render(){
    return(
      <SafeAreaView >
         <ScrollView showsVerticalScrollIndicator={false}>

         <TextInput style={{ height: 150, borderColor: 'gray', borderWidth: 1 }}
         value = {this.props.card.cover_text}
         onChangeText = {input => this.props.updateCoverText(input)}
         placeholder = 'Cover'
        />
        <TextInput style={{ height: 150, borderColor: 'gray', borderWidth: 1 }}
        value = {this.props.card.cover_text}
        onChangeText = {input => this.props.updateCoverText(input)}
        placeholder = 'Cover'
       />
       <TextInput style={{ height: 150, borderColor: 'gray', borderWidth: 1 }}
       value = {this.props.card.cover_text}
       onChangeText = {input => this.props.updateCoverText(input)}
       placeholder = 'Cover'
      />
         </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateCoverText},dispatch)
}
const mapStateToProps = (state) => {
  return {
   // user: state.user,
   card: state.card,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(FreshCardScreen)
