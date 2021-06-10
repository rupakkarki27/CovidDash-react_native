import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {fetchData} from '../api/api';
import CountryCard from '../components/CountryCard';
import GlobalCases from '../components/GlobalCases';
import Search from '../components/Search';
import {globalStyles} from '../styles/Global';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const covidData = await fetchData();
    setData(covidData);
    setIsLoading(false);
  }, []);

  const handleSearch = searchText => {
    if (searchText) {
      setFilteredData(
        data.filter(item =>
          item.country.toLowerCase().includes(searchText.toLowerCase()),
        ),
      );
    } else {
      setFilteredData([]);
    }
  };

  const globalCases = data.reduce((acc, {cases}) => acc + cases, 0);
  const globalDeaths = data.reduce((acc, {deaths}) => acc + deaths, 0);

  if (isLoading) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
    return (
      <View style={globalStyles.container}>
        <Search onSearch={handleSearch} />
        <GlobalCases cases={globalCases} deaths={globalDeaths} />
        <FlatList
          data={filteredData && filteredData.length > 0 ? filteredData : data}
          keyExtractor={item => item.country}
          renderItem={({item}) => (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.push('Details', {item: item});
              }}>
              <CountryCard country={item} />
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    );
  }
};

export default Home;
