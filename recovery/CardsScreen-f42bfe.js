import React, {Component} from 'react';
import { View, Text, StyleSheet,SafeAreaView,
         ScrollView,TextInput,TouchableOpacity
        ,Dimensions,Image} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import { Block,Card,theme } from 'galio-framework';
const { height, width } = Dimensions.get('screen');
class CardsScreen extends Component{
state = { foo: false,}
render(){
  return(
    <SafeAreaView>
    <ScrollView >

    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Galio Cards </Text>
    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 1 </Text>

    <Block row={horizontal} card flex style={cardContainer}>
      <Block flex style={imgContainer}>
        <Image source={{uri: item.image}} style={imageStyles} />
      </Block>
    <Block flex space="between" style={styles.cardDescription}>
      <Text size={14} style={styles.cardTitle}>{item.title}</Text>
      <Text size={12} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} bold>{item.cta}</Text>
    </Block>
  </Block>

  <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 2 </Text>
    <Card
      flex
      borderless
      style={styles.card}
      title="Christopher Moon"
      caption="139 minutes ago"
      location="Los Angeles, CA"
      avatar="http://i.pravatar.cc/100?id=skater"
      imageStyle={styles.cardImageRadius}
      imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
      image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
    />
    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 2 </Text>
    <Card
      flex
      borderless
      // style={styles.card}
      title="Christopher Moon"
      caption="139 minutes ago"
      location="Los Angeles, CA"
      avatar="http://i.pravatar.cc/100?id=skater"
      // imageStyle={styles.cardImageRadius}
      imageBlockStyle={{
      width: 'auto'}}
      image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
    />

    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 3 </Text>
    <Card
      flex
      borderless
      style={styles.card}
      title="Christopher Moon"
      caption="139 minutes ago"
      location="Los Angeles, CA"
      avatar="http://i.pravatar.cc/100?id=skater"
      imageStyle={{
         borderRadius: 3,
         elevation: 1,
         overflow: 'hidden'}}
      imageBlockStyle={{
      width: 'auto'}}
      image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
    />


    <Text style={{fontSize:25,marginBottom:15,fontWeight:'700',paddingHorizontal:20,marginTop:35}}> Cards </Text>
<Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 7 Card </Text>

<View style={{flexDirection:'row',justifyContent:'space-evenly'}}>

<View style={{flexDirection:'row'}}>
  <Image style = {{height:100,width:100}} source={{uri:"https://images.unsplash.com/photo-1587668925082-0f0dd93a9d3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}} style = {{height:100,width:100}}/>
  <View style = {{height:100,width:100,backgroundColor:randomRgb()}}>
    <Text style={{fontSize:15,marginTop:5}}> TITLE</Text>
    <Text style={{fontSize:10,marginTop:5}}> Body of the card</Text>
  </View>
</View>

<View style={{flexDirection:'row'}}>
  <Image style = {{height:100,width:100}} source={{uri:"https://images.unsplash.com/photo-1558384639-8fe9aec456fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}} style = {{height:100,width:100}}/>
  <View style = {{height:100,width:100,backgroundColor:randomRgb()}}>
    <Text style={{fontSize:15,marginTop:5}}> TITLE</Text>
    <Text style={{fontSize:10,marginTop:5}}> Body of the card</Text>
  </View>
</View>

</View>
<Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 8 Card </Text>

<View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
<View style={{flexDirection:'row',shadowOpacity:0.1,shadowRadius:2,elevation:3}}>
 <View style = {{  borderRadius: 3, elevation: 1,overflow: 'hidden'}}>
    <Image style = {{height:122,width:100}} source={{uri:"https://images.unsplash.com/photo-1558384639-8fe9aec456fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}}/>
 </View>

  <View style = {{height:122,width:100,backgroundColor:randomRgb(),borderRadius: 3}}>
    <Text style={{fontSize:15,marginTop:5}}> TITLE</Text>
    <Text style={{fontSize:10,marginTop:5}}> Body of the card</Text>
  </View>

</View>

</View>

    </ScrollView>
    </SafeAreaView>

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
  imageContainer: {
   borderRadius: 3,
   elevation: 1,
   overflow: 'hidden',
 },
 articles: {
  width: width - theme.SIZES.BASE * 2,
  paddingVertical: theme.SIZES.BASE,
},
 card: {
  backgroundColor: theme.COLORS.WHITE,
  marginVertical: theme.SIZES.BASE,
  borderWidth: 0,
  minHeight: 114,
  marginBottom: 16
},
 horizontalImage: {
  height: 122,
  width: 'auto',
},
horizontalStyles: {
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
},
verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
fullImage: {
height: 215
},
shadow: {
  shadowColor: theme.COLORS.BLACK,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  shadowOpacity: 0.1,
  elevation: 2,
},

});
export default CardsScreen
