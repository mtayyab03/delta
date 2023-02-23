import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View, Text, TextInput } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export default function App() {
  const [text, onChangeText] = useState('');
  return (
    <View style={styles.container}>
      <ImageBackground
             style={styles.imgbg}
             source={require('./assets/deltaimg.png')} >
                 <View style={styles.containerinput}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder='Insert text here'
                        placeholderTextColor={'#ffffff'}
                    />
                    </View>
             </ImageBackground>
    </View> 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input:{
    height: RFPercentage(20),
    width: '70%',
    fontSize:RFPercentage(10),
    color: "#ffffff",
    borderRadius: RFPercentage(1.5)
},

 containerinput:{ width:'100%',
        marginTop: RFPercentage(3),
        alignItems:'center',
        justifyContent:'center' 
      },

 imgbg:{
       width:'100%',
       height:'100%'
      },


});
