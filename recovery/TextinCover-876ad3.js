import React from 'react';
import PropTypes from 'prop-types';
import {TextInput,Text, StyleSheet,View} from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateCoverText,updateBodyoneText,updateBodytwoText,updateCoverItalic} from '../actions/card.js'
import palette from '../palette.js'
import * as Font from 'expo-font';
class Textin extends React.Component{
  // componentDidMount() {
  //     Font.loadAsync({
  //       'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  //     });
  //   }
state = {
  align:null,
  defaultAlign :'center', //default

}
textA = () => {

 return (
   <TextInput multiline = {true}
   style={[
        {
          fontSize: (this.props.card.cover_font_size == null) ?
          32 : this.props.card.cover_font_size
          , color:palette.LIGHT_GRAY,
          fontWeight:this.props.card.cover_bold,
          fontStyle:this.props.card.cover_italic,
          fontFamily:this.props.card.cover_font,
          alignItems:'center',
          justifyContent: 'center',
          margin:20,
          textAlign: (this.props.card.cover_text_align == null) ?
          this.state.defaultAlign :
          this.props.card.cover_text_align
        }
     ]}
     value = {this.props.card.cover_text}
     onChangeText = {input_cover => this.props.updateCoverText(input_cover)}
     placeholder = 'Cover'
     />
)
}
 render(){
         var message = this.textA()
        return (<View>{message}</View>);
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
export default connect(mapStateToProps,mapDispatchToProps)(Textin)
