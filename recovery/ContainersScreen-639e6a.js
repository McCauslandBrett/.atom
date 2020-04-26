import React, {Component} from 'react';
import { Dimensions,View, Text, StyleSheet,SafeAreaView,
         ScrollView,TextInput,TouchableOpacity,ImageBackground,Image
        } from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import { Block,Card,theme } from 'galio-framework';
const { height, width } = Dimensions.get('screen');
class ContainersScreen extends Component{
state = { foo: false,}
render(){
  return(
  <Block flex center safe style={{width: width}}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.margins}>
    <Text style={{fontSize:25,marginBottom:15,fontWeight:'700'}}> Layouts </Text>

    <View>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </View>

    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 1 (flexDirection:'row') </Text>
    <View style={{flexDirection:'row'}}>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </View>

    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 1 galio Block row  </Text>
    <Block row>
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </Block>


    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 2 ( justifyContent: "space-between") </Text>
    <View style={{flexDirection:'row',justifyContent: "space-between"}}>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </View>



    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 3 ( justifyContent: "flex-end" ) </Text>
    <View style={{flexDirection:'row',justifyContent: "flex-end"}}>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </View>

    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 4 (alignSelf:'center')</Text>
    <View style={{flexDirection:'row',alignSelf:'center'}}>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </View>

    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 4 galio Block row middle </Text>
    <Block row middle >
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </Block>

    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 5 ( justifyContent:'space-evenly' )</Text>
    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </View>

    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 6 ( justifyContent:'space-evenly' ) </Text>
    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </View>

    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 7 </Text>
    <Block row style={{justifyContent:'space-evenly'}} >
     <ImageBackground imageStyle={{borderRadius:3}} style = {{height:100,width:100,borderWidth:0, shadowColor: theme.COLORS.BLACK,
     shadowOffset: { width: 0, height: 2 },shadowRadius: 4,shadowOpacity: 0.1, elevation: 2,}} source={{uri:'https://images.unsplash.com/photo-1519368358672-25b03afee3bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2004&q=80'}}/>
     <ImageBackground imageStyle={{borderRadius:3}} style = {{height:100,width:100,borderWidth:0, shadowColor: theme.COLORS.BLACK,
     shadowOffset: { width: 0, height: 2 },shadowRadius: 4,shadowOpacity: 0.1, elevation: 2,}} source={{uri:'https://images.unsplash.com/photo-1587736613350-3f121830084e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}}/>
    </Block>



    </ScrollView>

  </Block>
    );
  }
}
const randomRgb = () =>{
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red},${green},${blue})`;
};
const styles = StyleSheet.create({
 margins: {
  width: width - theme.SIZES.BASE * 2,
  paddingVertical: theme.SIZES.BASE,
},
shadow: {
  shadowColor: theme.COLORS.BLACK,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  shadowOpacity: 0.1,
  elevation: 2,
  borderWidth: 0,
},
});
export default ContainersScreen
