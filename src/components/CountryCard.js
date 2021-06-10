import React, {memo} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import Card from './Card';

const CountryCard = ({country}) => {
  return (
    <Card>
      <View style={styles.countryContent}>
        <Image source={{uri: country.countryInfo.flag}} style={styles.flag} />
        <View style={styles.textContent}>
          <Text style={styles.countryName}>{country.country}</Text>
          <Text style={styles.countryCases}>Total Cases: {country.cases}</Text>
        </View>
        <Icon
          name="arrow-forward-ios"
          type="material"
          style={styles.icon}
          color="white"
          size={15}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  countryContent: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  flag: {
    height: 60,
    width: 90,
  },
  textContent: {
    marginLeft: 18,
    justifyContent: 'center',
  },
  countryName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  countryCases: {
    color: 'white',
    fontSize: 16,
  },
  icon: {
    paddingLeft: 50,
  },
});

export default memo(CountryCard);
