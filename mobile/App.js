import React from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import Header from './components/Header';

const App= () => {


  const [text, setText]= React.useState('');
  const [password, setPass]= React.useState('');
  const [Redo, setRe]= React.useState('');
  const [Birth, setBirth]= React.useState('');
  const [Height, setHeight]= React.useState('');
  const [Weight, setWeight]= React.useState('');


  return (
    <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>

      <Header/>
      
      <Text style={{color: 'darkslateblue', fontSize: 23}}>Welcome to the Pulse PT App, please enter your information</Text>
      <Text>Email</Text>
      <TextInput
      style={{height: 40}}
      placeholder="Enter your Email"
      onChangeText={text=>setText(text)}
      defaultValue={text}
      />

      <Text>password</Text>
      <TextInput
      style={{height: 40}}
      placeholder="Enter your password"
      onChangeText={password=>setPass(password)}
      defaultValue={password}
      />




      <Text>Confirm password</Text>
      <TextInput
      style={{height: 40}}
      placeholder="Retype your password"
      onChangeText={Redo=>setRe(Redo)}
      defaultValue={Redo}
      />


     <Text>Birthday</Text>
      <TextInput
      style={{height: 40}}
      placeholder="Enter your birthday"
      onChangeText={Birth=>setBirth(Birth)}
      defaultValue={Birth}
      />


     <Text>Height</Text>
      <TextInput
      style={{height: 40}}
      placeholder="Enter your Height"
      onChangeText={Height=>setHeight(Height)}
      defaultValue={Height}
      />



     <Text>Weight</Text>
      <TextInput
      style={{height: 40}}
      placeholder="Enter your Weight"
      onChangeText={Weight=>setWeight(Weight)}
      defaultValue={Weight}
      />


      <Button
      onPress={()=> {
        alert('Welcome to Pulse PT')
      }}
      title="Sign in/Register"
      />



    </View>
    
  );
};

export default App;