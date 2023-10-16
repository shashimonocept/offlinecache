import React from 'react';
import { useReactiveVar } from '@apollo/client';
import { View, Text, FlatList } from 'react-native';
import { leadsVar } from './LeadOperation';  // importing the reactive var

const LeadList: React.FC = () => {
    // const cartItems = useReactiveVar(cartItemsVar);
  const leads = leadsVar();  // directly accessing the reactive var

  console.log('list', leads)

  return (
    <FlatList 
      data={leads}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.mobileNo}</Text>
        </View>
      )}
    />
  );
};

export default LeadList;