import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import Card from './components/Card';
import store_items from './components/store_items.json';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header_text}>PATIKASTORE</Text>
      </View>
      <View>
        <TextInput style={styles.search_container} placeholder="Ara..." />
      </View>

      <FlatList
        keyExtractor={item => item.id}
        numColumns={2}
        data={store_items}
        renderItem={({item}) => <Card card={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    margin: 10,
  },
  header_text: {
    color: 'purple',
    fontSize: 40,
    textAlign: 'center',
  },
  search_container: {
    backgroundColor: 'lightgray',
    margin: 10,
    borderRadius: 20,
  },
});

export default App;
