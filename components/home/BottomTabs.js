import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomTabs = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                margin: 10,
                marginHorizontal: 30,
                justifyContent: "space-between",
            }}
        >
          <Icon Icon="home" text='Home' />
          <Icon Icon="search" text='Browse' />  
          <Icon Icon="shopping-bag" text='Grocery' />  
          <Icon Icon="receipt" text='Orders' />  
          <Icon Icon="user" text='Account' />    
        </View>
    )
}

const Icon = (props) => (
    <TouchableOpacity>
      <View>
        <FontAwesome5
          name={props.icon}
          size={25}
          style={{
            marginBottom: 3,
            alignSelf: "center",
          }}
        />
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );

export default BottomTabs
