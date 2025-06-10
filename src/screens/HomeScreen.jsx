import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import AllItems from './AllItems';
import LowStocks from './LowStocks';
import CreateItems from './CreateItems';


const HomeScreen = () => {
  const [view, setView] = useState(0);
  const [data , setData] = useState([
  {
    id: 1,
    name: 'wheat',
    stock: 5,
    unit: 'kg',
  },
  {
    id: 2,
    name: 'Rice',
    stock: 55,
    unit: 'kg',
  },
  {
    id: 3,
    name: 'Sugar',
    stock: 25,
    unit: 'kg',
  },
  {
    id: 4,
    name: 'Onion',
    stock: 105,
    unit: 'kg',
  },
  {
    id: 5,
    name: 'Ginger',
    stock: 2,
    unit: 'kg',
  },
]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            view === 0 ? {backgroundColor: 'green'} : null,
          ]}
          onPress={() => setView(0)}>
          <Text
            style={[styles.buttonText, view === 0 ? {color: 'white'} : null]}>
            All Items
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            view === 2 ? {backgroundColor: 'green'} : null,
          ]}
          onPress={() => setView(2)}>
          <Text
            style={[styles.buttonText, view === 2 ? {color: 'white'} : null]}>
            Low Stocks
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            view === 3 ? {backgroundColor: 'green'} : null,
          ]}
          onPress={() => setView(3)}>
          <Text
            style={[styles.buttonText, view === 3 ? {color: 'white'} : null]}>
            Create Items
          </Text>
        </Pressable>
      </View>
      {view === 0 && <AllItems data={data} />}
      {view === 2 && <LowStocks data={data.filter((item) => item.stock <= 5)} />}
      {view === 3 && <CreateItems data = {data} setData={setData}/>}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: '4%',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSIze: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 14,
    paddingVertical: 5,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'green',
  },
  buttonText: {
    color: 'green',
    fontWeight: '400',
    fontSize: 12,
  },
});
