import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';

const Search = ({onSearch}) => {
  return (
    <View style={styles.search}>
      <Icon name="search" type="material" size={30} color="white" />
      <TextInput
        placeholder="Search"
        style={styles.input}
        onChangeText={value => onSearch(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#525D6F',
    margin: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  input: {
    marginLeft: 10,
  },
});

export default Search;
