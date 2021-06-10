import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from './Card';

const MoreDetailsCard = ({icon, title, data}) => {
  return (
    <Card>
      <View style={styles.mainContent}>
        {icon}
        <View style={styles.secContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.data}>{data}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  secContent: {
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  data: {
    fontSize: 18,
    color: 'white',
  },
});

export default MoreDetailsCard;
