
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import Back from 'react-native-vector-icons/Ionicons'
import Forward from 'react-native-vector-icons/Ionicons'
import Star from 'react-native-vector-icons/FontAwesome'
import Color from './color'
import {styles} from './Styles'

class CustomPINKeyboard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pinArray: [],
      pinArrayLength:0,
    }
  }

  handleKeyPress = (key) => {


    if (!(key == 'B') && !(key == 'F') && this.state.pinArray.length < 4) {

      // this.setState((state) => {
      //   state.pinArray.push(key)
      // })
      this.setState({
        pinArrayLength:this.state.pinArray.push(key),
        pinArray:this.state.pinArray
      })

    } else if ((key == 'B') && this.state.pinArray.length > 0) {
      
      this.state.pinArray.splice(-1, 1)
      this.setState( {
        pinArrayLength: this.state.pinArray.length,
        pinArray: this.state.pinArray
      })

    } else if ((key == 'F') && this.state.pinArray.length == 4) {
      alert('Entered PIN is:'+this.state.pinArray)
    }else{
      alert('Please enter 4-digit PIN')
    }
  }

  render() {


    var numRow = [];
    var count = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    for (let i = 0; i < 3; i++) {

      var numkeys = [];

      for (let j = 0; j < 3; j++) {

        numkeys.push(
          <TouchableOpacity style = {{height:60,width:60,alignItems:'center',justifyContent:'center'}} key={count[i][j]} onPress={() => this.handleKeyPress(count[i][j])}><Text style={styles.numKeyStyle}>{count[i][j]}</Text></TouchableOpacity>
        )
      }

      numRow.push(
        <View style={styles.numRow} key={i}>{numkeys}</View>
      )
    }

    return (

      <View style={{ flexDirection: "column", flex: 1 }}>

        <View style={styles.pinView}>

          <View><Text style = {styles.textViewStyle}>Please enter 4-digit PIN</Text></View>
          
          <View style={styles.pinViewInput}>
            
            <View style={styles.pinDotStyle}>
              {this.state.pinArrayLength >= 1 ? <Star name='circle' size={25} color={Color.BLACK} /> : <Star name='circle-thin' size={25} color={Color.BLACK} />}
            </View>

            <View style={styles.pinDotStyle}>
            {(this.state.pinArrayLength >= 2) ? <Star name='circle' size={25} color={Color.BLACK} /> : <Star name='circle-thin' size={25} color={Color.BLACK} />}
            </View>

            <View style={styles.pinDotStyle}>
            {(this.state.pinArrayLength >= 3) ? <Star name='circle' size={25} color={Color.BLACK} /> : <Star name='circle-thin' size={25} color={Color.BLACK} />}
            </View>

            <View style={styles.pinDotStyle}>
            {(this.state.pinArrayLength == 4) ? <Star name='circle' size={25} color={Color.BLACK} /> : <Star name='circle-thin' size={25} color={Color.BLACK} />}
            </View>

          </View>


        </View>

        <View style={styles.keyView}>
          {numRow}

          <View style={styles.numRow}>
            <TouchableOpacity onPress={() => this.handleKeyPress('B')}>
              <Back name='ios-backspace' size={40} color={Color.THEME_FONT_COLOR} />
            </TouchableOpacity>
            <TouchableOpacity style = {{height:60,width:60,alignItems:'center',justifyContent:'center'}} onPress={() => this.handleKeyPress(0)}><Text style={styles.numKeyStyle}>0</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleKeyPress('F')}>
              <Forward name='ios-checkmark-circle' size={40} color={Color.THEME_FONT_COLOR} />
            </TouchableOpacity>
          </View>
        </View>

      </View>


    )
  }
}



export default CustomPINKeyboard

