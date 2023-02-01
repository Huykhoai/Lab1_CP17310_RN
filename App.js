import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import TextInputExample from './assets/ProductInputText';
export default function App() {
  const [isShow, setShow]= useState(true)
  return (
    <View style={styles.container}>
      <View style= {styles.title}>
      <Text style={styles.chu}>Họ Tên: Nguyễn Quang Huy</Text>
      <Text style={styles.chu}>MSV: PH23792</Text>
      <Button
      title='thêm mới'
      onPress={()=> setShow(!isShow)}
      />
      {
        isShow
        ?<TextInputExample/>
        :null
      }
      </View>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    padding:24,
    
  },
  title:{
    height:300,
    borderRadius:6,
    borderWidth:3,
    padding:20,
    backgroundColor:'#61dafb',
  },
  chu:{
    fontWeight:'bold',
    fontSize:20,
  },
  
});
