// import { StatusBar } from 'expo-status-bar';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Cat from './components/Cat.jsx';
import Cats from './components/Cats.jsx';
import { View, Text, StatusBar } from 'react-native';

const App = () => {
  return (
    <View>
      {/* <Text>catCafe</Text>
      <Cat name='Vasya' weight={21} hungry={2}/>
      <Cat name='Feday' weight={21} hungry={2}/>
      <Cat name='Masha' weight={21} hungry={2}/>
      <StatusBar hidden></StatusBar> */}
      <Text>catCafe</Text>
      <Text>Hello im <Cats name='Vasya' /> </Text>
      <Text><Cat weight={1} hungry={0.4} /></Text>
      <Text>Hello im <Cats name='Vasya'/> </Text>
      <Text><Cat weight={1} hungry={0.4} /> </Text>
      <Text>Hello im <Cats name='Vasya'/> </Text>
      <Text><Cat weight={1} hungry={0.4} /> </Text>
      <StatusBar hidden></StatusBar>
    </View>
  );
}

export default App;
