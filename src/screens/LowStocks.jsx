import { View, Text,StyleSheet,FlatList } from 'react-native';
import React from 'react';

const LowStocks = ({data}) => {
  return (
      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Items</Text>
          <Text style={styles.headingText}>Quantity</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={[styles.itemContainer,{backgroundColor:item.stock < 20 ? '#FFCCCC' : '#D7F68F'}]}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>{item.stock}</Text>
            </View>
          )}

          contentContainerStyle = {{gap:10}}
        />
      </View>
    );
};

export default LowStocks;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // ✅ optional but useful
    paddingHorizontal: 15,
    paddingVertical:10,
  },

  headingText: {
    fontWeight: '500',
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical : 10,
    borderRadius: 7,
  },
  itemText:{
    fontWeight:'400',
    fontSize:15,
  },
});
