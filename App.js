import React, { useEffect } from 'react';
import { View } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import LeadForm from './src/LeadForm';
import LeadList from './src/LeadList';


const App= () => {
  // useEffect(() => {
  //   // Check for network status
  //   const unsubscribe = NetInfo.addEventListener((state: { isConnected: any; }) => {
  //     if (state.isConnected) {
  //       // When online, check for leads with dummy ID and send to server
  //       const offlineLeads = leadsVar().filter(lead => lead.id.startsWith('dummy_'));
  //       offlineLeads.forEach(async lead => {
  //         try {
  //           const response = await fetch('https://your-api-endpoint.com/leads', {
  //             method: 'POST',
  //             headers: {
  //               'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify(lead),
  //           });
  //           const data = await response.json();
  //           // Replace dummy lead with actual data from server
  //           const updatedLeads = leadsVar().map(l => l.id === lead.id ? data : l);
  //           leadsVar(updatedLeads);
  //         } catch (error) {
  //           console.error('Failed to sync lead:', error);
  //         }
  //       });
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <View>
      <LeadForm />
      <LeadList />
    </View>
  );
};

export default App;