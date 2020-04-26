import React, {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';
// import {Header, Left, Right} from 'native-base';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon  from "../components/icons.js";


class TemplateCardScreen extends Component{
  static navigationOptions = {
    headerTintColor: 'black',
    headerBackTitle: null,
    headerStyle: {

      borderBottomColor:'transparent',
      borderBottomWidth: 0,

    },
  }
  render(){
    return(
      <View >
      <View>
          <Text> Template Card Screen </Text>
      </View>
  </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({},dispatch)
}
const mapStateToProps = (state) => {
  return {
    counter: state
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TemplateCardScreen)
