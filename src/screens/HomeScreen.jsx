import React from 'react';
import { StyleSheet,Text,View,Pressable,useState } from 'react-native';
import AllItems from './AllItems';
import LowStocks from './LowStocks';
import CreateItems from './CreateItems';

const HomeScreen = () => {
    const [view,setView] = useState(0);
    return(
        <View style={styles.container}>
            <Text style = {styles.title}>HomeScreen</Text>
            <View style={styles.buttonContainer}>
                <Pressable onPress={()=>setView(0)}>
                    <Text style = {styles.button}>All Items</Text>
                </Pressable>
                <Pressable onPress={()=>setView(2)}>
                    <Text style = {styles.button}>Low Stocks</Text>
                </Pressable>
                <Pressable onPress={()=>setView(3)}>
                    <Text style = {styles.button}>Create Items</Text>
                </Pressable>
                {view === 0 && <AllItems/>}
                {view === 2 && <LowStocks/>}
                {view === 3 && <CreateItems/>}
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        padding:'4%',
        backgroundColor:'#ffffff',
    },
    title:{
        fontSIze:24,
        fontWeight:'bold',
        color:'#333',
    },
    buttonContainer:{
        flexDirection :'row',
        gap:14,
        paddingVertical:5,
    },
    button:{
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'green',
    },
    buttonText:{
        color:'green',
        fontWeight:'400',
        fontSize:12,
    },

});
