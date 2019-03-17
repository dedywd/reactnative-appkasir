import React from 'react';
import { StyleSheet, Text,TextInput, View, Button,Image, TouchableHighlight} from 'react-native';


export default class KasirPenjualan extends React.Component {
  constructor(props){
    super(props);
    this.state={
      kode:0,
      jumlahbeli:0,
      jumlahharga:0,
      total:0,
      bayar:0,
      kembalian:0,
    }
  }
  render() {
    return (
      <View style={styles.vMain} >

        <View style={styles.vHeader4}>
          <Text style={styles.txtHeader4}>Data Barang</Text>
        </View>

        <View style={styles.vInput}>
          <View style={styles.vItemInput}>
            <Text style={styles.txtLabelInput}>Kode Barang</Text>
            <TextInput style={styles.txtInput} keyboardType = 'numeric'
            onChangeText = {
              (txtKode) => this.setState({kode:txtKode})
            }/>
          </View>
          <View style={styles.vItemInput}>
            <Text style={styles.txtLabelInput}>Jumlah Beli</Text>
            <TextInput style={styles.txtInput} keyboardType = 'numeric'
            onChangeText = {
              (txtJumlahBeli) => this.setState({jumlahbeli:txtJumlahBeli})
            }/>
          </View>
          <View style={styles.vItemInput}>
            <Text style={styles.txtLabelInput}>Jumlah Harga</Text>
            <TextInput style={styles.txtInput} keyboardType = 'numeric'
            onChangeText = {
              (txtJumlahHarga) => this.setState({jumlahharga:txtJumlahHarga})
            }/>
          </View>

        </View>

        <View style={styles.vItemButton}>
          <Button
          onPress={() => {
            let nilaiTotal = this.state.jumlahbeli * this.state.jumlahharga;
            this.setState({total:nilaiTotal});

            let nilaiKembalian = this.state.bayar - this.state.total;
            this.setState({kembalian:nilaiKembalian});
          }}
          color="#0D47A1"
          title="Hitung"
          accessibilityLabel="Hitung"/>
        </View>

        <View style={styles.vHasil}>
          <Text style={styles.txtDataHasil}>Total Belanja Adalah {this.state.total} </Text>

          <View style={styles.vItemHasil}>
            <Text style={styles.txtLabelHasi}>Uang Bayar</Text>
            <TextInput style={styles.txtHasil} keyboardType = 'numeric'
            onChangeText = {
              (txtBayar) => this.setState({bayar:txtBayar})
            }/>
          </View>

          <Text style={styles.txtDataHasil}>Kembalian Adalah {this.state.kembalian}</Text>
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

 vHeader4: {
 flex:1,
 backgroundColor:'#0D47A1',
 alignItems:'center',
 justifyContent:'center',
 margin: 10
 },

 txtHeader4: {
 color:'#fff',
 fontSize:30,
 margin: 20
 },

 vInput: {
 flex:2,
 backgroundColor:'white',
 justifyContent:'center',
 alignItems:'center',
 margin: 10
 },

 vItemInput: {
 flexDirection:'row',
 margin:10,
 },

 txtLabelInput: {
 flex:2,
 height:40,
 marginLeft:10
 },

 txtInput: {
 flex:4,
 height:40,
 backgroundColor:'#fff',
 borderColor: 'gray',
 borderWidth: 1
 },

 vItemButton: {
 flex:1,
 margin: 10,
 justifyContent:'center'
 },

 vHasil: {
 flex:2,
 backgroundColor:'white',
 margin: 10
 },

 vItemHasil: {
 flexDirection:'row',
 justifyContent:'center',
 alignItems:'center',
 margin:10,
 },

 txtLabelHasil: {
 flex:2,
 height:40,
 marginLeft:10
 },

 txtDataHasil: {
   margin: 10
 },

 txtHasil: {
 flex:4,
 height:40,
 backgroundColor:'#fff',
 borderColor: 'gray',
 borderWidth: 1,
 marginLeft:15
 },

});
