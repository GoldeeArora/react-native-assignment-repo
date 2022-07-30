import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {useEffect} from 'react';
export default function AxiosScreen() {
  const [location, setLocation] = useState('');
  const [data, setData] = useState();
  const fetchApi = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=12a4d2322fc3d7e13eee682681df299d`;
    const res = await axios.get(url);
    console.log(res.data.name);
    setData(res.data);
  };
  const giveInfo = () => {
    fetchApi();
  };
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your location here"
          onChangeText={enteredText => setLocation(enteredText)}
        />
        <TouchableOpacity onPress={() => giveInfo()}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dataContainer}>
        {data && (
          <View>
            <Text>{data.name}</Text>
            <Text>{data.weather[0].description}</Text>
            <Text>{data.weather[0].main}</Text>
            <Text>{data.wind.speed} m/s</Text>
          </View>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 45,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonText: {
    borderRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: 'grey',
    backgroundColor: '#ADD8E6',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  dataContainer: {},
});
