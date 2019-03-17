import React from 'react';
import { StyleSheet, Text,TextInput, View, Button,Image} from 'react-native';


export default class KasirAbout extends React.Component {

  render() {
    return (
      <View style={styles.vMain} >

        <View style={styles.vHeader2}>
          <Text style={styles.txtHeader2}>Tentang Kami</Text>
        </View>

        <View style={styles.vAbout}>
          <View style={styles.vItemAbout}>
            <Image style={styles.gambar} source={require('../images/bio.jpg')}/>
            <View style={styles.vBiodata}>
              <Text style={styles.textBio}>Nama: I Putu Dedy Wira Darmawan</Text>
              <Text style={styles.textBio}>NIM: 1715051017</Text>
              <Text style={styles.textBio}>Skill: Noob</Text>
            </View>
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

 vHeader2: {
 flex:1,
 backgroundColor:'#0D47A1',
 alignItems:'center',
 justifyContent:'center',
 margin: 10
 },

 txtHeader2: {
 color:'#fff',
 fontSize:30,
 margin: 20
 },

 vAbout: {
 flex:4,
 backgroundColor:'white',

 },

 vItemAbout: {
 flexDirection:'row',
 },

 gambar: {
   flex: 2,
   backgroundColor: 'white',
   margin: 15
 },

 vBiodata: {
   flex: 2,
   backgroundColor: 'white',
   marginTop: 15
 },

 textBio: {
 marginLeft: 5,
 marginTop: 15,
 marginRight: 5,
 borderColor: 'gray',
 borderWidth: 1
 },

});
