import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
  return <View style={styles.card}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#525D6F',
    borderRadius: 10,
    elevation: 5,
    padding: 8,
    marginHorizontal: 16,
    marginVertical: 8,
  },
});

export default Card;
