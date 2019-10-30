import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

    pinView: {
      flex: 3,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: 'center'
    },
  
    keyView: {
      flex: 3,
      flexDirection: 'column',
      backgroundColor: Color.THEME_KEYPAD_BACKGROUND,
      justifyContent: 'space-around'
    },
    numRow: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
  
    numKeyStyle: {
      fontSize: 35,
      color: Color.THEME_FONT_COLOR,
    },
  
    pinViewInput: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  
    pinDotStyle: {
      marginHorizontal: 8,
      marginTop:60,
      
      alignItems: 'center',
      justifyContent:'center',
      padding:5
  
    },
    textViewStyle:{
      marginTop:10,
      fontFamily:'sans-serif-condensed',
      fontSize:17
    }
  })