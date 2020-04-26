#! /bin/bash
function menu() {
cat << creativ
  Options:
[name] [-h] (creates hook name in components folder )
[name] [-c] (creates class name in components folder)
[name] [-s] (creates class name in screens folder)
[name] [-s] [ -d] (creates class  name, in screens folder and adds it to Drawer Navigator)
[name] [-s] [ -b] (creates class  name, in screens folder and adds it to Bottom Tab Navigator)
[name] [-s] [ -s] (creates class  name, in screens folder and adds it to Stack Navigator)
creativ
}
function CreateHook() {
  echo $1
  touch $1
  cat << EOF > $1
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export const ${2} = () => {
  const [foo, setFoo] = useState(30);
  useEffect(() => {
    if (foo >= 42) {
      setFoo(42);
      }
    }, [foo])
   return (
      <View>
        <Text>Foo is {foo}.</Text>
        <Button onPress={() => setFoo(foo + 1)} title='Increase Foo!' />
      </View>
    )
}
EOF
}
function CreateClass() {
  echo $1
  touch $1
  cat << EOF > $1
import React, {Component} from 'react';
import { View, Text, StyleSheet,SafeAreaView,
         ScrollView,TextInput,TouchableOpacity,
        } from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {AntDesign} from "@expo/vector-icons";

class ${2} extends Component{
state = { foo: false,}
render(){
  return(
    <View>
      <Text> ${2} </Text>
    </View>
    );
  }
}
const localstyles = StyleSheet.create({});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({},dispatch)
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(${2})
EOF
}

name=$1
type=$2

case $type in

  -h)
    path="./components/"${name}".js"
    if [[ -d "./components" && ! -f "$path"  ]]; then
       #file doesnt exist and parent directory does exist
       echo "hook"
       CreateHook "$path" $name
    fi

    ;;

  -c)
    path="./components/"${name}".js"
    if [[ -d "./components" && ! -f "$path"  ]]; then
       #file doesnt exist and parent directory does exist
       echo "class"
       CreateClass "$path" $name
    fi
    ;;

  -sd)
    if [[ -d "./screens" && ! -f "$path" ]]; then
      path="./screens/"${name}".js"

      #file doesnt exist and parent directory does exist
      CreateClass "$path" $name

      l=${#name}
      if [[ $l -gt 6 ]]; then
        n=${name:0:$l-6}
        else
          n=$name
      fi

      code="  <Drawer.Screen name=\""${n}"\" component={"${name}"} /> \\
      </Drawer.Navigator>"

       import="import "${name}" from '../screens/"${name}".js'; \\
"
      echo "${import}"

      # To check permissions uncoment line below
      # ls -l ${drawer}

      # If you have permission issues uncoment line below
      # chmod 744 ${drawer}

      #Add import
      sed -i -e "1 s|^|$import|" "./navigation/DrawerNavigator.js"

      #Put inside of nav
      sed -i -e "s|</Drawer.Navigator>|$code|" "./navigation/DrawerNavigator.js"
    fi
    ;;
    -s)
      if [[ -d "./screens" && ! -f "$path" ]]; then
        path="./screens/"${name}".js"
        #file doesnt exist and parent directory does exist
        CreateClass "$path" $name

      fi
      ;;

  *)
    menu
    ;;
esac
