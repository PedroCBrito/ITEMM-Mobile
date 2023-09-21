import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, Pressable } from 'react-native';
import logoITEEM from './Login/imgITEEM.png'
import { firebase_auth } from '../components/config';


export default function Home(props) {


    return(

        <View style={styles.container}> 

        <View style={styles.topContainer}>
        <Image
       style={styles.imageLogo}
       source={logoITEEM}     
        />
        </View>

        <View style={styles.midContainer}>

        <Pressable style={styles.button} onPress={()=>props.navigation.navigate('Avaliate')}>
            <Text style ={styles.buttonText}>Avaliar Desempenho</Text>
        </Pressable>

        <Pressable style ={styles.button} onPress={()=>props.navigation.navigate('Info')}>
            <Text style ={styles.buttonText}>Informações do Jovem</Text>
        </Pressable>

        <Pressable style ={styles.button} onPress={()=>props.navigation.navigate('Certificate')}>
            <Text style ={styles.buttonText}>Gerar Certificado</Text>
        </Pressable>

        </View>

        <View style={styles.bottomContainer}>

        <Pressable style ={styles.text} onPress={()=> firebase_auth.signOut()}>
            <Text style ={styles.backLogin}>Sair da conta</Text>
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
      bottomContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent:"flex-end",
        marginBottom:20,
        width: "100%"
      },

      topContainer: {
          flex: 1,
          backgroundColor: 'white',
          justifyContent:"flex-start",
          alignItems: "flex-end",
          marginTop: 25,
          width: "100%"
          
      },
  
  
      midContainer: {
          flex: 1,
          backgroundColor: 'white',
          justifyContent:"center",
          
          width: "100%",
          marginBottom: 125
          
        },

  
      imageLogo: {
          width: 75, 
          height: 75, 
          marginRight: 20

          
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
        height: 50,
        marginTop: 35
      },

      buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
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
  


  });