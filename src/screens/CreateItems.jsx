import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Text,
  FlatListComponent,
  FlatList,
} from 'react-native';

const CreateItems = ({data, setData}) => {
  const [itemName, setItemName] = useState('');
  const [stockAmount, setStockAmount] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [EditItemId, setEditItemId] = useState(null);

  const addItemHandler = () => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: stockAmount,
    };
    setData([...data, newItem]);
    setItemName('');
    setStockAmount('');
    setIsEdit(false);
  };

  const deleteItemHandler = id => {
    setData(data.filter(item => item.id !== id));
  };

  const EditItemHandler = item => {
    setIsEdit(true);
    setItemName(item.name);
    setEditItemId(item.id);
    setStockAmount(item.stockAmount);
  };

  const updateItemHandler = () => {
    setData(
      data.map(item =>
        item.id === EditItemId
          ? {...item, name: itemName, stock: stockAmount}
          : item,
      ),
    );
    setItemName('');
    setStockAmount('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an name..."
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={item => setItemName(item)}
      />
      <TextInput
        placeholder="Enter stock amount..."
        placeholderTextColor="#999"
        style={styles.input}
        value={stockAmount}
        onChangeText={item => setStockAmount(item)}
      />
      <Pressable
        style={styles.addButton}
        onPress={() => (isEdit ? updateItemHandler() : addItemHandler())}>
        <Text style={styles.buttonText}>
          {isEdit ? 'Edit Item in Stock' : 'Add Item in Stock'}
        </Text>
      </Pressable>
      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>All items in the Stock</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={[
                styles.itemContainer,
                {backgroundColor: item.stock < 20 ? '#FFCCCC' : '#D7F68F'},
              ]}>
              <Text style={styles.itemText}>{item.name}</Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Text style={styles.itemText}>{item.stock}</Text>
                <Pressable onPress={() => EditItemHandler(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteItemHandler(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{gap: 10}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: '10',
  },
  input: {
    borderWidth: 1.5,
    borderColor: 'green',
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderRadius: 7,
  },
  addButton: {
    backgroundColor: '#CABFEEFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  headingText: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  itemText: {
    fontWeight: '400',
    fontSize: 15,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default CreateItems;
