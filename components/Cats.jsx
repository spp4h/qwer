import React from 'react';
import {Text, View} from 'react-native';

const Cat = ({ name }) => {
    return (
      <View>
        <Text style={{color: 'green'}}>{name}</Text>
      </View>
    )
  }

  export default Cat;  