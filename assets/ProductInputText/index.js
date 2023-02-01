import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, TextInput, View, FlatList } from "react-native";
const TextInputExample =()=>{
    const [text, onChangeText] = useState('');
    const[number, onChangeNumber] = useState('');
    const[isShow, setShow]= useState(true);
    return(
        <SafeAreaView style={styles.container}>
            {
                isShow
                ?<>
                <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder='Nhập tên'
            
            />
            <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder='Nhập Msv'
            keyboardType="numeric"/>
            <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder='link anh'
            
            />
            <View style={styles.button}>
            <Button 
            title="Hủy"
            onPress={()=>setShow(!isShow)}/>
           
           <Button
           title="Lưu"/>
            </View>
            
            </>
            
                :null
            }
        </SafeAreaView>
       
    );
};
const styles = StyleSheet.create({
    container:{
        flex:2
    },
    input:{
        height:40,
        margin:12,
        borderWidth:1,
        padding:10,
    },
    button:{
        justifyContent:'center',
        flexDirection:"row",
    },
    
});
export default TextInputExample;


