import React from 'react';
import {View} from 'react-native';
import MoreDetailsCard from '../components/MoreDetailsCard';
import {globalStyles} from '../styles/Global';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {details_fields} from './more_details_data';

const MoreDetails = ({route}) => {
  const item = route.params.item;
  return (
    <View style={globalStyles.container}>
      <ScrollView>
        {details_fields.map((i, index) => (
          <MoreDetailsCard
            icon={
              <Icon
                name={i.icon}
                size={60}
                color={i.icon_color}
                type={i.type}
              />
            }
            key={index}
            title={i.title}
            data={
              i.title === '% Infected'
                ? Math.round((item.cases / item.population) * 100 * 1000) / 1000
                : item[`${i.data}`]
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MoreDetails;
