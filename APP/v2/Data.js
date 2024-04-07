
import { StyleSheet, Text, View } from 'react-native';

import { useEffect, useState } from "react";
import { db, ref, onValue } from "./firebase";

const Weather = () => {
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [tempp, setTempp] = useState(0);
  const [light, setLight] = useState(0);
  const [PH, setPH] = useState(0);
  const [LLD, setLLD] = useState(0);
  const [HALL, setHALL] = useState(0);

  useEffect(() => {
    const data = ref(db);

    onValue(data, (snapshot) => {
      setTemp((snapshot.val().temp));//Math.round(snapshot..)
      setHumidity((snapshot.val().humidity));
      setTempp((snapshot.val().tempp));
      setLight((snapshot.val().light));
      setPH((snapshot.val().PH));
      setLLD((snapshot.val().LLD));
      setHALL((snapshot.val().HALL));
    });
  }, [db]);
  return (
      <View>
        <Text>{'\n'}{'\n'} {'\n'}</Text>
        <Text style={styles.Title}> {'Temperatură:'} {(temp)}°</Text>

        <Text>{'\n'} {'\n'}</Text>
        <Text style={styles.Title} > {'Umiditate:'} {(humidity)}%</Text>

        <Text>{'\n'} {'\n'} </Text>
        <Text style={styles.Title} > {'UV:'} {(light)}</Text>

        <Text>{'\n'} {'\n'}</Text>
        <Text style={styles.Title}> {'Temperatură:'} {(tempp)}°</Text>
        <Text style={styles.Title}> {'  (sondă)'}</Text>

        <Text>{'\n'} {'\n'} </Text>
        <Text style={styles.Title}> {'PH:'} {(PH)}</Text>
        <Text>{'\n'} {'\n'}</Text>

        <Text style={styles.Title}> {'LLD:'} {(LLD)}</Text>
        <Text>{'\n'} {'\n'}</Text>

        <Text style={styles.Title}> {'HALL:'} {(HALL)}</Text>
        <Text>{'\n'} {'\n'} </Text>
      </View>

  );
};

export default Weather;

/*
export default function Advanced() {
  return (
    <View style={styles.container}>
      <Text>Pagina de date preluate din Firebase!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/


const styles = StyleSheet.create({
  Title: {
    fontFamily: 'monospace',
    textAlign: 'left',
    fontSize: 20,// a little bit bigger than normal text
    fontWeight: 'bold',// highlights the title in order to not increase the size too much
    color: '#67AB9F',
    paddingLeft: 30
  },
  Text: {
    fontFamily: 'monospace',//supported on android and web
    fontSize: 17,//size of font (18 is best suited for general text as is easyly readable on phone)
    color: '#9AC7BF',//custom color (Hex)//#D09040
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
