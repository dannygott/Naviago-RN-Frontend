import { StyleSheet } from 'react-native';
module.exports = StyleSheet.create({
      container: {
        flex: 1,
      },
      textjaun: {
        flex: 0,
      //  backgroundColor:"#22B473",
        height: 70,
      },

      footr: {
        flex: 1,
        backgroundColor:"rgba(40, 28, 217, 0.37)",
        marginTop : 50,
        justifyContent : "flex-end",

      },

      smllIcon: {
        height: 50,
        width:50,
      },

      bigIcon: {
        height: 60,
        width:60,


      },

      onTop:{
          zIndex : 100,
          position: "absolute",
      },




      inlineContainer: {
          flexWrap: 'wrap',
          flexDirection:'row',
      },

      inlineContent: {
          flexDirection:'column',
      },




      locationImage:{
        flex : 1,        
        flexDirection:"row",
        flexWrap:"wrap",
        alignSelf:"center",
      },

      dayContainer:{
        width:100,
        backgroundColor:"rgb(210, 34, 122)",

      },

      starContainer:{
        marginTop: 10,
        marginLeft:10,
        marginBottom: 10,
      },

      iconContainer: {
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop : 20,
        marginBottom : 20,
        marginLeft: 5,
        alignItems: 'center',
      },

      middleFlex: {
        flex: 1,
        backgroundColor:"rgba(40, 28, 217, 0)",

      },

      sumPage: {
        flex: 0,
        backgroundColor:"rgba(0, 0, 0, 0.82)",
        justifyContent: "space-between",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginTop : 50,
        marginBottom : 50,
        width: 105,
        height : 400,
        justifyContent: "center",
      },

      whatever:{
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
      },

      side:{
        width : 50,
        height: 200,
        backgroundColor:"rgb(235, 87, 175)",
                flexDirection:"column",
                marginTop : 50,
      },

      centerBar:{
        alignSelf : "center",
        marginLeft: 24,
        marginTop : 50,
        marginBottom : 50,
        backgroundColor:"rgba(162, 156, 156, 1)",
        width : 12,
        height: 650,
        position: "absolute",
        zIndex : -4,
      },

      dayText : {
        color: "white",
        marginLeft: 5,
      },

      dayContain : {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
      },

      dayInline : {
        flexDirection:"column",
      },

      itinBar: {
        borderRadius: 10,
        marginTop : 50,
        marginBottom : 50,
          flex: 1,
          backgroundColor:"rgba(0, 0, 0, 0.82)",
          width: 360,
      },

      textUpper: {
        height: 100,
        fontSize: 50,
      },

      map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    });