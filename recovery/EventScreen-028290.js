import React, {Component} from 'react';
import { View, Text,SafeAreaView,ScrollView, StyleSheet,Button} from 'react-native';
import {Header, Left, Right} from 'native-base';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon  from "../components/icons.js";
import {Ionicons,AntDesign} from "@expo/vector-icons";
import * as AddCalendarEvent from 'react-native-add-calendar-event';

const eventConfig = {
  title,
  // and other options
};

onAddpress() {
  AddCalendarEvent.presentEventCreatingDialog(eventConfig)
  .then((eventInfo: { calendarItemIdentifier: string, eventIdentifier: string }) => {
    // handle success - receives an object with `calendarItemIdentifier` and `eventIdentifier` keys, both of type string.
    // These are two different identifiers on iOS.
    // On Android, where they are both equal and represent the event id, also strings.
    // when { action: 'CANCELED' } is returned, the dialog was dismissed
    console.warn(JSON.stringify(eventInfo));
  })
  .catch((error: string) => {
    // handle error such as when user rejected permissions
    console.warn(error);
  });
};
class EventScreen extends Component{
  static navigationOptions = {
      headerBackTitle: null,
    drawerIcon : ({tintColor}) => (
      <Icon.FontAwesome name= "spoon" style = {{fontSize:24, color:tintColor}}/>
    )
  }
  render(){
    return(
      <SafeAreaView >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Icon.FontAwesome name = "bars" style = {styles.menuIcon} size ={24} onPress={ () => this.props.navigation.openDrawer()}/>
             <AntDesign name="plussquareo" size={24} style = {styles.mdmore} onPress = {()=> this.props.navigation.navigate('Event')}/>
             <View style = {{marginTop:60, alignItems:"center"}}>
                 <Text> EventScreen</Text>
             </View>
      </ScrollView>
    </SafeAreaView>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({},dispatch)
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(EventScreen)
