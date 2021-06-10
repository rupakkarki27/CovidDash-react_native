import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A4255',
    justifyContent: 'center',
  },
  headerStyle: {backgroundColor: '#3A4255', elevation: 0},
  headerTitleStyle: {color: 'white'},
});

export const images = {
  active_cases: require('../assets/active-cases.png'),
  deaths: require('../assets/deaths.png'),
  recovered: require('../assets/recovered.png'),
  total_cases: require('../assets/total-cases.png'),
};
