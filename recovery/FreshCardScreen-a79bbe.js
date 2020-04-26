import React, {Component} from 'react';
import { View, Text, StyleSheet,SafeAreaView,
        ScrollView,TextInput,TouchableOpacity,
        } from 'react-native';
import {Header, Left, Right} from 'native-base';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon  from "../components/icons.js";
import {Ionicons} from "@expo/vector-icons";
import styles from '../styles.js'
import {updateCoverText,updateBodyoneText,updateBodytwoText} from '../actions/card.js'
class FreshCardScreen extends Component{
  // static navigationOptions = {
  //
  // }

  render(){
    return(
      <SafeAreaView >
         <ScrollView showsVerticalScrollIndicator={false}>

         <TextInput style={{ height: 150,}}
         value = {this.props.card.cover_text}
         onChangeText = {input_cover => this.props.updateCoverText(input_cover)}
         placeholder = 'Cover'
        />
        <TextInput style={{ height: 150,}}
        value = {this.props.card.body_one_text}
        onChangeText = {input_body_one=> this.props.updateBodyoneText(input_body_one)}
        placeholder = 'Body One'
       />
       <TextInput style={{ height: 150 }}
       value = {this.props.card.body_two_text}
       onChangeText = {input_body_two => this.props.updateBodytwoText(input_body_two)}
       placeholder = 'Body Two'
      />

      <View style = {styles.statsContainer}>
      <TouchableOpacity style = {styles.stat} onPress = {()=> this.props.navigation.navigate('Invitations')}>
        <Icon.FontAwesome name= "gift" style = {styles.cardElement} color = "#DFD8C8"/>
        <Text style = {styles.statTitle}>Gift</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.stat} onPress = {()=> this.props.navigation.navigate('Invitations')}>
        <Icon.FontAwesome name= "camera" style = {{fontSize:24}}/>
        <Text style = {styles.statTitle}>Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.stat} onPress = {()=> this.props.navigation.navigate('Invitations')}>
        <Icon.FontAwesome name= "video-camera" style = {{fontSize:24}}/>
        <Text style = {styles.statTitle}>Video</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.stat} onPress = {()=> this.props.navigation.navigate('Invitations')}>
        <Icon.FontAwesome name= "microphone" style = {{fontSize:24}}/>
        <Text style = {styles.statTitle}>Audio</Text>
      </TouchableOpacity>

      </View>

      <View>
      <TouchableOpacity  onPress = {()=> this.props.navigation.navigate('Invitations')}>
        <Ionicons name= "md-clock" style = {{fontSize:24}}/>
      </TouchableOpacity>
       <Text> Deliverd Date June 2, 2020</Text>
      </View>

         </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateCoverText,updateBodytwoText,updateBodyoneText},dispatch)
}
const mapStateToProps = (state) => {
  return {
   // user: state.user,
   card: state.card,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(FreshCardScreen)
