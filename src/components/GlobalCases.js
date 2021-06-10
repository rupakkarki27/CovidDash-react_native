import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GlobalCases = ({cases, deaths}) => {
  return (
    <View style={styles.globalCases}>
      <Text style={styles.text}>Global Cases: {cases}</Text>
      <Text style={styles.text}>Global Deaths: {deaths}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  globalCases: {
    backgroundColor: '#525D6F',
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});

export default GlobalCases;
