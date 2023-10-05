import React from 'react';
import {Text, View} from 'react-native';



const Cat = ({name}) => {

    let hungry ;
    if (hungry < 0.5 )
    {hungryStatus= "hungry"}
    else
    {hungryStatus = "Full"};

    

    
    return <Text style={{color: 'white' }}>Hello, I am {name}your !{weight} {hungryStatus}</Text>;

    
    
  };
  
  export default Cat;