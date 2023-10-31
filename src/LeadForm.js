import React, {useState} from 'react';
import { useReactiveVar } from '@apollo/client';
import { View, TextInput, Button, Alert } from 'react-native';
import { leadsVar} from './LeadOperation'; // importing the reactive var



const LeadForm = () => {
  // const lead = leadsVar();  
  const lead = useReactiveVar(leadsVar); // directly accessing the reactive var
 

  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  

  const handleChange=(newText)=>{
    setName(newText)
  }

  const handleChangeMob =(newMob)=>{
    setMobileNo(newMob)
  }

  const  generateUUID=(digits)=> {
    let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';
    let uuid = [];
    for (let i = 0; i < digits; i++) {
        uuid.push(str[Math.floor(Math.random() * str.length)]);
    }
    return uuid.join('');
}

  const handleSave = () => {
    if(name && mobileNo){
        
        const newLead = {
          id: generateUUID(10),
          name:name,
          mobileNo:mobileNo,
        };
    
        leadsVar([...lead, newLead]);
      
        console.log('Submitting Lead:', lead);
        // Reset the form after saving depends upon scenario
        setMobileNo('');
        setName('')
      // Call POST Query to update on backend
      
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
      />
      <TextInput 
        placeholder="Mobile No"
        value={mobileNo}
        onChangeText={handleChangeMob}
      />
      <Button 
        title="Add Lead" 
        onPress={handleSave}
      />
    </View>
  );
};



export default LeadForm;