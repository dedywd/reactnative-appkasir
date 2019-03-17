import React from 'react';
import { StyleSheet, Text,TextInput, View, Button,Image} from 'react-native';


export default class KasirDataBarang extends React.Component {

  render() {
    return (
      <View style={styles.vMain} >

        <View style={styles.vHeader3}>
          <Text style={styles.txtHeader3}>Data Barang</Text>
        </View>

        <View style={styles.vItemData}>

        <View style={styles.vData}>
          <Text style={styles.txtData1}>Kode 001</Text>
          <Text style={styles.txtData1}>Kopi Nescafe</Text>
        </View>

        <View style={styles.vData}>
          <Text style={styles.txtData1}>Kode 002</Text>
          <Text style={styles.txtData1}>Sabun Mandi</Text>
        </View>

        <View style={styles.vData}>
          <Text style={styles.txtData1}>Kode 003</Text>
          <Text style={styles.txtData1}>Indomie</Text>
        </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
 vMain: {
 flex:1,
 backgroundColor:'white',
 },

 vHeader3: {
 flex:1,
 backgroundColor:'#0D47A1',
 alignItems:'center',
 justifyContent:'center',
 margin: 10
 },

 txtHeader3: {
 color:'#fff',
 fontSize:30,
 margin: 20
 },

 vItemData: {
 flex:3,
 },

 vData: {
 flex:1,
 backgroundColor:'#e0e0e0',
 margin: 10
 },

 txtData1: {
 fontSize:30,
 },

 txtData2: {
 color:'black',
 fontSize:30,
 fontWeight:'bold'
 },

});
