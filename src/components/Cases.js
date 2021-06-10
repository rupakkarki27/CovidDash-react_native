import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Cases = ({img, title, data}) => {
  return (
    <View style={styles.cases}>
      <View style={styles.row}>
        <Image source={img} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.data}>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cases: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
  },
  title: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  data: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default Cases;
