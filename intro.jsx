import React from 'react';
import { Text, Image, Button,TouchableOpacity, Alert,Pressable, SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

const Intro = () => {
  const theme = useColorScheme();

  console.log(theme);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>how old are you</Text>
      <Image
        style={styles.imageSize}
        source={{
          uri: 'https://images.unsplash.com/photo-1748519707841-df414b70a215?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
        }}
      />
      <Button title="Press me"/>
      <TouchableOpacity
        style = {styles.touchable}
        onPress={()=> Alert.alert('pressed')}
      >
        <Text>Button</Text>
      </TouchableOpacity>
      <Pressable
        style = {styles.pressableStyle}
      >
        <Text>Pressing</Text>
      </Pressable>
    </SafeAreaView>
  );
};


export default Intro;


const styles = StyleSheet.create({
  container:{
      width:'100%',
      height:'100%',
      backgroundColor:'#555',
      padding:5,
      gap:10,
  },
  text:{
    color:'white',
    fontSize:35,
    fontWeight:'bold',
  },
  imageSize:{
    width:200,
    height:200,
  },
  touchable:{
    padding:10,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 20,
  },
  pressableStyle:{
    padding:10,
    backgroundColor: 'yellow',
  },
}
);


