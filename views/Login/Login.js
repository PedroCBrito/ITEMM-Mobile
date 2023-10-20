import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, Pressable, KeyboardAvoidingView } from 'react-native';
import logoITEEM from './imgITEEM.png';
import { firebase_auth } from '../../components/config';
import { signInWithEmailAndPassword } from 'firebase/auth';



export default function Login(props) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = firebase_auth;

    const signIn = async() =>{
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);  
            props.navigation.navigate('Home')     
        }catch(error) {
            console.log(error);
            alert('Erro ao entrar:' + error.message);
        }

    }


    return(

        <KeyboardAvoidingView 
        enabled={true}
        behavior='padding'
        style={styles.container}> 
        

        <View style={styles.topContainer}>
        <Image
       style={styles.imageLogo}
       source={logoITEEM}     
        />
        </View>
        
        <Text style={{marginBottom: 40, marginLeft: 50}}>
        <Text style={styles.cabecalhoLogin}>Faça login abaixo ou </Text> 
        <Pressable onPress={()=>props.navigation.navigate('Register')}>
            <Text style ={styles.register}>crie sua conta</Text>
        </Pressable>
        </Text>


        <Text style={styles.cabecalhoBoxEmail}>
        Email
        </Text>
        <TextInput

            
            style={styles.placeholder}
            value={email}

            onChangeText={(text) => {
            setEmail(text);          

        }}
       />

        
        <Text style={styles.cabecalhoBoxPassword}>
        Senha
        </Text>
        <TextInput

            secureTextEntry={true}
            style={styles.placeholder}
            value={password}

            onChangeText={(text) => {
            setPassword(text);          

        }}
       />


        <View style={styles.bottomContainer}>
        <Pressable style={styles.button} onPress={signIn}>
            <Text style ={styles.buttonText}>Logar</Text>
        </Pressable>

        <Pressable style ={styles.forgotPassword} onPress={()=>props.navigation.navigate('ForgotPassword')}>
            <Text style ={styles.register}>Esqueceu sua senha?</Text>
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
        width: "100%"
        
      },

    bottomContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent:"flex-end",
        marginBottom:20,
        width: "100%"
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

    register: {
        fontSize: 16, 
        color: 'gray',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        marginTop:7,
    },

    forgotPassword: {
        
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
        marginRight: 25,
        marginLeft: 25,
        
    },

    cabecalhoBoxEmail: {
        fontSize: 14, 
        color: 'gray',
        marginLeft: 50,
        marginBottom: 2
    },

    cabecalhoBoxPassword: {
        fontSize: 14, 
        color: 'gray',
        marginLeft: 50,
        marginBottom: 2,
        marginTop: 35
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