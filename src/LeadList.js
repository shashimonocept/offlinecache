import React from 'react';
import { useReactiveVar } from '@apollo/client';
import { View, Text, FlatList } from 'react-native';
import { leadsVar } from './LeadOperation';  // importing the reactive var

const LeadList = () => {
    const leads = useReactiveVar(leadsVar); // directly accessing the reactive var
   

  

  return (
    <>
     <Text>Leads:</Text>
    <FlatList 
      data={leads}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.mobileNo}</Text>
        </View>
        
      )}
    />
    </>
  );
};



export default LeadList;