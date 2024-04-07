import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, ScrollView, View } from 'react-native';
import { Linking } from 'react-native';

export default function Info() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.Title} > </Text>
      <Text style={styles.Title} >Despre</Text>
      <Text style={styles.Text} >  
      {'    Aplicația permite conectarea la baza de date Firebase și vizualizarea datelor înregistrate de nod ce sunt trimise în baza de date prin intermediul gateway-ului.'}</Text>
      
      <Text style={styles.Text} >  
      {'    Aceasta este complementară lucrării Platformă modulară low-power pentru achiziția datelor de la senzori și transmiterea acestora folosind LoRa 2,4GHz realizată de Oprea Cristian în cadrul proiectului de diplomă pentru a permite accesarea ușoară a datelor preluate prin intermediul dispozitivelor mobile.'}</Text>
      
      
      <Text style={styles.Title} > </Text>
      <Text style={styles.Title} >Sistemul propus</Text>
      <Text style={styles.Text} >  
          {'    Arhitectura de bază a sistemului este formată dintr-un nod low power și un gateway alimentate din surse de energie regenerabile.'}
      </Text>
            
      <Text style={styles.Text} >  
      {'    Datele colectate de la senzori de către nod sunt transmise prin intermediul protocolului LoRa în banda de 2,4 GHz către gateway. Gateway-ul permite stocarea datelor primite în Cloud sau în memoria internă NFC (aceasta poate fi accesată folosind aplicația ST25NFCTap). Senzorii integrați pot fi schimbați cu ușurință, fiind posibilă integrarea în numeroase aplicații.'} {'\n'}</Text>
      
      <Image
        style={styles.img_normal}
        source={require('./assets/gateway_real.jpg')}
      />
            <Image
        style={styles.img_normal}
        source={require('./assets/node_real.jpg')}
      />

      <Text style={styles.Title} > </Text>
      <Text style={styles.Title} >Link-uri</Text>
      <Text style={styles.Title} > </Text>
       <Text style={{color: '#67AB9F', fontWeight: 'bold',fontStyle: 'italic',fontFamily: 'monospace', fontSize: 18}}
      onPress={() => Linking.openURL('https://console.firebase.google.com/u/0/project/test-6c0a0/database/test-6c0a0-default-rtdb/data')}> Firebase 

      <Text style={{color: '#67AB9F', fontWeight: 'bold',fontStyle: 'italic',fontFamily: 'monospace', fontSize: 18}}
      onPress={() => Linking.openURL('https://github.com/Cristian-O/H2')}>     Github 

      <Text style={{color: '#67AB9F', fontWeight: 'bold', fontStyle: 'italic',fontFamily: 'monospace', fontSize: 18}}
      onPress={() => Linking.openURL('http://google.com')}>     Articol 
      </Text> 
      </Text>
      </Text>
      <Text style={{color: '#67AB9F', fontWeight: 'bold',fontStyle: 'italic',fontFamily: 'monospace', fontSize: 18}}     
      onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.st.st25nfc&pli=1')}>{'\n'} ST25NFCTap
      </Text>

      <Image
        style={styles.img}
        source={require('./assets/icon.png')}
      />
      <Text style={styles.Title} >@2024</Text>
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
//ScrollView lets users scroll through content
//Despre
//Aplicație permite conectarea la baza de date Firebase și vizualizarea datelor înregistrate de nod trimise în baza de date prin intermediul gateway-ului. 
//Aceasta este complementară lucrării....realizate de... pentru a permite accesarea ușoară a datelor prin intermediul dispozitivelor mobile.

//Sistemul propus
//Arhitectura de bază a sistemului este formată dintr-un nod low power și un gateway alimentate din surse de energie regenerabile. Datele colectate de la senzori de către nod sunt transmise prin intermediul protocolului LoRa în banda de 
//2,4 GHz către gateway. Gateway-ul permite stocarea datelor primite în Cloud sau în memoria internă NFC. Senzorii integrați pot fi schimbați cu ușurință, fiind posibilă
// integrarea în numeroase aplicații.
//~~Imagine Nod~~
//~~Imagine Module~~
//~~Imagine Gateway~~

//Structura aplicației
//Date -vizualizarea datelor din baza de date firebase (poate fi modificată astfel încât să acomodeze datele trimise de dispozitive)
//Avansat -permite vizualizarea grafică a datelor recepționate 
//Info -informațiile referitoare la proiect și la aplicație(poate include link către articol, baza de date și github)
//@2024
const styles = StyleSheet.create({
  Title: {
    fontFamily: 'monospace',
    textAlign: 'center',
    fontSize: 20,// a little bit bigger than normal text
    fontWeight: 'bold',// highlights the title in order to not increase the size too much
    color: '#67AB9F'
  },
  Text: {
    fontFamily: 'monospace',//supported on android and web
    fontSize: 17,//size of font (18 is best suited for general text as is easyly readable on phone)
    color: '#9AC7BF',//custom color (Hex)//#D09040
  },
  Link: {
    fontFamily: 'monospace',
    textAlign: 'center',
    fontSize: 20,// a little bit bigger than normal text
    fontWeight: 'bold',// highlights the title in order to not increase the size too much
    color: '#67AB9F',
  },
  img: {
    width: 100,//width of image
    height: 100,//height of image
    borderRadius: 100,//rounded corners of the image

    position: 'relative',//relative to previous text (will not overlap with other content)
    bottom: 0, //under text everytime
    alignSelf: 'center',//image in the center of the screen 
  },
  img_normal: {
    width: 230,//width of image
    height: 230,//height of image
    borderRadius: 20,//rounded corners of the image

    position: 'relative',//relative to previous text (will not overlap with other content)
    bottom: 0, //under text everytime
    left: 10, //under text everytime
    alignSelf: 'center',//image in the center of the screen 
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',//white background in the View
    //alignItems: 'center',//all text will be placed so that it fits the screen (kind of like justify)
    //justifyContent: 'center',//flex-start for content positioning from left corner
  },
});