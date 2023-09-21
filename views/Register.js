import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, Pressable, KeyboardAvoidingView } from 'react-native';
import { firebase_auth } from '../components/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import logoITEEM from './Login/imgITEEM.png';




export default function Register(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const auth = firebase_auth;



    const signUp = async() =>{
    if (password == confirmPassword){

        try{
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response); 
            props.navigation.navigate('Login')     
        }catch(error) {
            console.log(error);
            alert('Erro ao criar conta:' + error.message);
        }
    }else{
        alert('As senhas não são iguais');
    }

    }

    return(

        <KeyboardAvoidingView 
        behavior='padding'
        style={styles.container}> 


        <View style={styles.topContainer}>
        <Image
       style={styles.imageLogo}
       source={logoITEEM}     
        />
        </View>

        <View style={styles.midContainer}>
      
        
        <Text style={styles.cabecalhoBox}>
        Email
        </Text>
        <TextInput

            
            style={styles.placeholder}
            value={email}

            onChangeText={(email) => {
            setEmail(email);          

        }}
       />


        <Text style={styles.cabecalhoBox}>
        Senha
        </Text>
        <TextInput

            secureTextEntry={true}
            style={styles.placeholder}
            value={password}

            onChangeText={(password) => {
            setPassword(password);          

        }}
       />


        <Text style={styles.cabecalhoBox}>
        Confirmar senha
        </Text>
        <TextInput

            secureTextEntry={true}
            style={styles.placeholder}
            value={confirmPassword}

            onChangeText={(confirmPassword) => {
            setconfirmPassword(confirmPassword);          

        }}
       />

        </View> 
       

        <View style={styles.bottomContainer}>

        <Pressable style={styles.button} onPress={signUp} >
            <Text style ={styles.buttonText}>Criar Conta</Text>
        </Pressable>

        <Pressable style ={styles.text} onPress={()=>props.navigation.navigate('Login')}>
            <Text style ={styles.backLogin}>Já tem uma conta?</Text>
        </Pressable>

        </View>
        
          

                  
        </KeyboardAvoidingView>



    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: "100%"
        
      },
      topContainer: {
          flex: 1,
          backgroundColor: 'white',
          justifyContent:"flex-start",
          marginBottom: 25, 
          marginTop: 25,
          width: "100%"
          
      },
  
  
      midContainer: {
          flex: 1,
          backgroundColor: 'white',
          justifyContent:"center",
          width: "100%",
          height:"100%"
          
        },
  
      bottomContainer: {
          flex: 1,
          backgroundColor: 'white',
          justifyContent:"flex-end",
          marginBottom:20,
          width: "100%",
        },
  
      imageLogo: {
          width: 275, 
          height: 250, 
          alignSelf: 'center', 
          
      },
  
      cabecalhoLogin: {
          fontSize: 15, 
          color: 'gray',
          
          
      },
  
      backLogin: {
          fontSize: 15, 
          color: 'gray',
          textDecorationLine: 'underline',
          fontWeight: 'bold' 
      },
  
      text: {
          
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          elevation: 3,
          marginRight: 25,
          marginLeft: 25,
          
      },
  
      cabecalhoBox: {
          fontSize: 14, 
          color: 'gray',
          marginLeft: 50,
          marginBottom: 2,
          marginTop: 10
      },
 
      placeholder: {
          borderWidth: 1,
          height: 50,
          borderRadius: 4,
          borderColor: 'black', 
          fontSize: 12,
          marginRight: 50,
          marginLeft: 50,
          padding:10
  
      },
  
      button: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 3,
          backgroundColor: '#252B4F',
          marginRight: 60,
          marginLeft: 60,
          height: 50
        },
  
        buttonText: {
          fontSize: 16,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
        },
  


  });