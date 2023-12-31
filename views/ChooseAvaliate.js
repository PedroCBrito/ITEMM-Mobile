import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, Pressable } from 'react-native';
import logoITEEM from './Login/imgITEEM.png'
import { SelectList } from 'react-native-dropdown-select-list';
import { firebase_auth } from '../components/config';


export default function ChooseAvaliate(props) {

    const [selected, setSelected] = React.useState("");
  
    const data = [
      {key:'1', value:'Mobiles'},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers'},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]


    return(

        <View style={styles.container}> 

        <View style={styles.topContainer}>
        <Image
       style={styles.imageLogo}
       source={logoITEEM}     
        />
        </View>

        <View style={{marginHorizontal:40}}>
         <Text style={styles.cabecalhoLogin}>Nome do aluno a ser Avaliado</Text>   
        <SelectList 
        setSelected={setSelected} 
        data={data}
        dropdownStyles={{marginLeft:10, marginRight:10}}
        dropdownItemStyless={{marginHorizontal:10}}
        />
        </View>



        <View style={styles.bottomContainer}>

        <Pressable style={styles.button} onPress={()=>props.navigation.navigate('Avaliate')}>
            <Text style ={styles.buttonText}>Selecionar</Text>
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
        marginBottom:80,
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
          marginBottom: 125
          
        },

  
        imageLogo: {
            width: 275, 
            height: 250, 
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
    cabecalhoLogin: {
        fontSize: 15, 
        color: 'gray',
        
        
    },
    
  


  });