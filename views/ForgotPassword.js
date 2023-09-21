import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, Pressable } from 'react-native';
import logoITEEM from './Login/imgITEEM.png'
import { firebase, firebase_auth} from '../components/config';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';


export default function ForgotPassword(props) {


    const [email, setEmail] = useState(String);
    const auth = getAuth();
   

   const resetPassword = ()=>{
    if(email == null){
        alert('Preencha o email para resetar senha')
    }else{
    sendPasswordResetEmail(auth, email) 
    .then(() =>{
        alert('Email para resetar senha enviado')
        props.navigation.navigate('Login')
    }).catch((error) =>{
        alert(error)
    })
    }
   }

    return(

        

        <View style={styles.container}> 

        <View style={styles.topContainer}>
        <Image
       style={styles.imageLogo}
       source={logoITEEM}     
        />
        </View>
        
        <Text style={{marginBottom: 20, marginLeft: 50}}>
        <Text style={styles.cabecalho}>Insira o Email para recuperar a senha</Text> 
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


        <View style={styles.bottomContainer}>

        <Pressable style={styles.button} onPress={()=>resetPassword()}>
            <Text style ={styles.buttonText}>Enviar Email</Text>
        </Pressable>

        </View>
        
          

                  
        </View>



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
        marginBottom:40,
        width: "100%"
      },

    imageLogo: {
        width: 275, 
        height: 250, 
        alignSelf: 'center', 
        
    },

    cabecalho: {
        fontSize: 15, 
        color: 'gray',
        
        
    },

    register: {
        fontSize: 12, 
        color: 'gray',
        textDecorationLine: 'underline',
        fontWeight: 'bold' 
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