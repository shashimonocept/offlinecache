import React, {useState} from 'react';
import { makeVar } from '@apollo/client';
import { useReactiveVar } from '@apollo/client';
import { View, TextInput, Button, Alert } from 'react-native';
import { leadFormVar, leadsVar} from './LeadOperation'; // importing the reactive var

const LeadForm: React.FC = () => {
  const lead = leadFormVar();  // directly accessing the reactive var
  const leadItems = leadsVar();

  const [name, setName] = useState();
  const [mobileNo, setMobileNo] = useState();

  const handleChange=(newText: any)=>{
    setName(newText)
  }

  const handleChangeMob =(newMob: any)=>{
    setMobileNo(newMob)
  }

  const handleSave = () => {
    if(name && mobileNo){
        leadFormVar({ ...lead, name: name, mobileNo:mobileNo })
        
        leadItems([...leadItems,lead])
        
    // if (lead.name && lead.mobileNo) {
      // Reset the form after saving depends upon scenario
      //leadFormVar({ id: '', name: '', mobileNo: '' });
      
    //   add to (export const leadsVar = makeVar<Lead[]>([]);) List as well
      // Call POST Query to update on backend
      console.log("leadss",leadInputs
    } else {
      Alert.alert('Error', 'Please fill out all fields.');
    }
    
  };

  

  return (
    <View>
      <TextInput 
        placeholder="Name"
        value={name}
        onChangeText={handleChange}
        // onChangeText={(text) => leadFormVar({ ...lead, name: text })}
      />
      <TextInput 
        placeholder="Mobile No"
        value={mobileNo}
        onChangeText={handleChangeMob}
        // onChangeText={(text) => leadFormVar({ ...lead, mobileNo: text })}
      />
      <Button 
        title="Add Lead" 
        onPress={handleSave}
      />
    </View>
  );
};

export const leadsVar = makeVar<Lead[]>([])

export default LeadForm;