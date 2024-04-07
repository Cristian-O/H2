import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, RefreshControl, Text, View } from 'react-native';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
//field graph links
import { WebView } from 'react-native-webview';

const field1 = 'https://thingspeak.com/channels/2342903/charts/1?bgcolor=%23ffffff&color=%23d62020&min=0&title=Temperature+%28C%29&yaxismax=80&yaxismin=-10'
const field2 = 'https://thingspeak.com/channels/12397/charts/4?&results=720&dynamic=true'
const field3 = 'https://thingspeak.com/channels/12397/charts/2?&results=720&dynamic=true'
const field4 = 'https://thingspeak.com/apps/matlab_visualizations/266449?height=200&width=450'

const graph_styles = StyleSheet.create({
  WebView:{
    flex: 0,
    //borderWidth: 5, borderColor: "FFFFFF",
    
  },
});

export default function Graph1() {

  return (
    <SafeAreaView style={{flex: 1}}>
    <ScrollView>
 

<View style={{height: 175, width: 790}}>
  <WebView
    scalesPageToFit={true}
    style={{ resizeMode: 'cover', flex: 1 }}
    source={{uri:field1 }}
  />
</View>

<View style={{height: 175, width: 790}}>
  <WebView
    scalesPageToFit={true}
    source={{uri:field1 }}
  />
</View>



<View style={{height: 175, width: 790}}>
  <WebView
    scalesPageToFit={true}
    source={{uri:field2 }}
  />
</View>

<View style={{height: 175, width: 790}}>
  <WebView
    scalesPageToFit={true}
    source={{uri:field3 }}
  />
</View>

<View style={{height: 175, width: 790}}>
  <WebView
    scalesPageToFit={true}
    source={{uri:field4 }}
  />
</View>


</ScrollView>
    </SafeAreaView>

  );
}



/*
export default function Data() {
  return (
    <View style={styles.container}>
      <Text>Our data page!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/