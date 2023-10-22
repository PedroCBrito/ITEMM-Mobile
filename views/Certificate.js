import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, Pressable, Platform, TouchableOpacity } from 'react-native';
import logoITEEM from './Login/imgITEEM.png'
import { firebase_auth } from '../components/config';


export default function Certificate(props) {


    return(

        <View style={styles.container}> 

        <View style={styles.topContainer}>
        <Image
       style={styles.imageLogo}
       source={logoITEEM}     
        />
        </View>
      <View style={styles.midContainer}>
        <Text style={styles.certificado}>
        Certificado PDF
        </Text>
        
      </View>

      <View style={styles.bottomContainer}>

        <Pressable style={styles.button} onPress={()=>props.navigation.navigate('Home')} >
            <Text style ={styles.buttonText}>Baixar Certificado</Text>
        </Pressable>

        <Pressable style ={styles.text} onPress={()=>props.navigation.navigate('Home')}>
            <Text style ={styles.back}>Cancelar Certificado</Text>
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
        justifyContent:"flex-end",
        marginBottom:10,
        width: "100%",

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
          marginBottom: 130,

          
        },

  
        imageLogo: {
            width: 250, 
            height: 225, 
            alignSelf: 'center', 
            
        },

  
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#98C45A',
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


    text: {
        
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
        marginRight: 25,
        marginLeft: 25,
        
    },
    cabecalho: {
        fontSize: 15, 
        color: 'gray',
        marginHorizontal:40,
        marginTop:10
        
    },

    placeholder: {
      borderWidth: 1,
      borderColor: 'gray',
      height: 50,
      borderRadius: 8,
      fontSize: 14,
      marginHorizontal:40,
      padding:17,
      marginTop:8

  },

  certificado: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 400,
    borderRadius: 8,
    marginHorizontal:40,
    padding:17,
    marginTop:200,
    fontSize: 15, 
    color: 'blue',
    textDecorationLine: 'underline',
    fontWeight: 'bold', 
    textAlign:'center',
    textAlignVertical:'center'

},

      scores:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginHorizontal:30,
        width: "50%",
      },

      boxDropdown:{
        marginHorizontal:35,
        width:100,
        marginTop:5


      },

      back: {
        fontSize: 15, 
        color: '#262950',
        textDecorationLine: 'underline',
        fontWeight: 'bold' 
    },
    datePicker:{

      height:120,
      marginTop:-10,

    },
    
  


  });