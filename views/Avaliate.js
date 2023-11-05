import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, Pressable, Platform, TouchableOpacity } from 'react-native';
import logoITEEM from './Login/imgITEEM.png'
import { SelectList } from 'react-native-dropdown-select-list';
import { db } from '../components/config';
import DateTimePicker from '@react-native-community/datetimepicker';
import { doc, setDoc, collection } from "firebase/firestore";
import { useRoute } from '@react-navigation/native';



export default function Avaliate(props) {

  const route = useRoute();
  const id = route.params.id;
  const nome = route.params.nome;

  const [coment, setComent] = useState("");
  const [date, setDate] = useState(new Date());
  const [cruDate, setCruDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [participate, setParticipate] = React.useState("");
  const [relation, setRelation] = React.useState("");
  const [hability, setHability] = React.useState("");
  const [metas, setMetas] = React.useState("");



  function createAvaliate() {

    // Add a new document in collection "cities"
    setDoc(doc(db, "usuarios", id, "nota", date ), {
      coment: coment,
      date: date,
      participate: participate,
      relation: relation,
      hability: hability,
      metas: metas,
      total: (Number(metas) + Number(hability) + Number(relation) + Number(participate))
    });


  }





  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    console.log(`${type}`)
    if (type == "set") {

      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setCruDate(currentDate);
        setDate(formatDate(currentDate));
      }

    } else {
      toggleDatePicker();
    }
  };

  const confirmIOSDate = () => {
    setDate(formatDate(date));
    toggleDatePicker();
  }

  const formatDate = (rawDate) => {
    let date = new Date(rawDate);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${day}-${month}-${year}`;

  }



  const data = [
    { key: '0', value: '0' },
    { key: '1', value: '1' },
    { key: '2', value: '2' },

  ]

  return (

    <View style={styles.container}>

      <View style={styles.topContainer}>
        <Image
          style={styles.imageLogo}
          source={logoITEEM}
        />
      </View>
      <View style={styles.midContainer}>

        <Text style={styles.cabecalho}>
          Nome
        </Text>
        <Text style={styles.placeholder}>
          {nome}
        </Text>


        <View>
          <View style={styles.scores}>


            <View>
              <Text style={styles.cabecalho}>Participação</Text>
              <SelectList
                setSelected={setParticipate}
                data={data}
                dropdownStyles={{ marginLeft: 10, marginRight: 10 }}
                dropdownItemStyless={{ marginHorizontal: 10 }}
                boxStyles={styles.boxDropdown}
                defaultOption={{ key: '0', value: '0' }}   //default selected option
              />
            </View>

            <View>
              <Text style={styles.cabecalho}>Relacionameto</Text>
              <SelectList
                setSelected={setRelation}
                data={data}
                dropdownStyles={{ marginLeft: 10, marginRight: 10 }}
                dropdownItemStyless={{ marginHorizontal: 10 }}
                boxStyles={styles.boxDropdown}
                defaultOption={{ key: '0', value: '0' }}   //default selected option
              />
            </View>


          </View>

          <View style={styles.scores}>


            <View >
              <Text style={styles.cabecalho}>Háb. Tecnica</Text>
              <SelectList
                setSelected={setHability}
                data={data}
                dropdownStyles={{ marginLeft: 10, marginRight: 10 }}
                dropdownItemStyless={{ marginHorizontal: 10 }}
                boxStyles={styles.boxDropdown}
                defaultOption={{ key: '0', value: '0' }}   //default selected option
              />
            </View>

            <View>
              <Text style={styles.cabecalho}>Cumprir Metas</Text>
              <SelectList
                setSelected={setMetas}
                data={data}
                dropdownStyles={{ marginLeft: 10, marginRight: 10 }}
                dropdownItemStyless={{ marginHorizontal: 10 }}
                boxStyles={styles.boxDropdown}
                defaultOption={{ key: '0', value: '0' }}   //default selected option
              />
            </View>


          </View>

        </View>


        <Text style={styles.cabecalho}>
          Comentário
        </Text>
        <TextInput


          style={styles.placeholder}
          value={coment}

          onChangeText={(text) => {
            setComent(text);

          }}
        />

        <Text style={styles.cabecalho}>
          Data
        </Text>

        {showPicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={cruDate}
            onChange={onChange}
            style={styles.datePicker}

          />
        )}

        {showPicker && Platform.OS === "ios" && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}
          >

            <TouchableOpacity style={[styles.button]}>
              <Text>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button]}
              onPress={confirmIOSDate}
            >
              <Text>Confirm</Text>
            </TouchableOpacity>

          </View>



        )}

        {!showPicker && (
          <Pressable
            onPress={toggleDatePicker}
          >
            <TextInput

              style={styles.placeholder}
              onChangeText={setDate}
              value={date}
              editable={false}

            />
          </Pressable>

        )}

      </View>


      <View style={styles.bottomContainer}>

        <Pressable style={styles.button} onPress={createAvaliate} >
          <Text style={styles.buttonText}>Enviar</Text>
        </Pressable>

        <Pressable style={styles.text} onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.back}>Cancelar envio</Text>
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
    justifyContent: "flex-end",
    marginBottom: 10,
    width: "100%",

  },

  topContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "flex-start",
    marginBottom: 25,
    marginTop: 25,
    width: "100%"

  },


  midContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "center",

    width: "100%",
    marginBottom: 20,
    marginTop: 50

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
    marginHorizontal: 40,
    marginTop: 10

  },

  placeholder: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 50,
    borderRadius: 8,
    fontSize: 14,
    marginHorizontal: 40,
    padding: 17,
    marginTop: 8

  },

  scores: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    width: "50%",
  },

  boxDropdown: {
    marginHorizontal: 35,
    width: 100,
    marginTop: 5


  },

  back: {
    fontSize: 15,
    color: '#262950',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
  datePicker: {

    height: 120,
    marginTop: -10,

  },




});