import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Cases from '../components/Cases';
import {globalStyles, images} from '../styles/Global';
import moment from 'moment';

const Details = ({route, navigation}) => {
  const item = route.params.item;

  return (
    <View style={globalStyles.container}>
      <Cases img={images.total_cases} title="Total Cases" data={item.cases} />
      <Cases img={images.deaths} title="Total Deaths" data={item.deaths} />
      <Cases
        img={images.recovered}
        title="Total Recovered"
        data={item.recovered}
      />
      <Cases
        img={images.active_cases}
        title="Active Cases"
        data={item.active}
      />
      <View style={styles.divider} />
      <Cases
        img={images.total_cases}
        title="New Cases"
        data={'+ ' + item.todayCases.toString()}
      />
      <Cases
        img={images.deaths}
        title="New Deaths"
        data={'+ ' + item.todayDeaths.toString()}
      />
      <Cases
        img={images.recovered}
        title="New Recovered"
        data={'+ ' + item.todayRecovered.toString()}
      />
      <View style={styles.divider} />
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            navigation.push('More Details', {item: item});
          }}>
          <Text style={styles.button}>Click for more info</Text>
        </TouchableOpacity>
        <Text style={styles.lastUpdated}>
          Last Updated: {moment(item.updated).fromNow()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  footer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    color: 'orange',
    fontWeight: 'bold',
  },
  lastUpdated: {
    color: 'grey',
    fontSize: 12,
  },
});

export default Details;
