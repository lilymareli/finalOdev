import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const styles = {
    login: StyleSheet.create({
        btn: {
            borderColor: '#f5f6fa',
            borderWidth: 1,
            padding: 10,
            marginTop: 10,
            textAlign: 'center'

        },
        label: {
            textAlign: 'center'
        },
        container: {
            alignItems: 'center'
        },
        contaierInput: {
            width: Dimensions.get('window').width / (10 / 9.5),
            marginTop: 20
        },
        input: {
            borderWidth: 1,
            borderColor: '#f5f6fa'
        },
        btnText: {
            color: '#f5f6fa',
            textAlign: 'center',
            fontWeight: 'bold'
        }

    }),
    signIn: StyleSheet.create({
        container: {
            flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#c23616'
        },
        logo: {
            fontSize: 20,
            color: '#f5f6fa',
            fontWeight: 'bold'
        },
        input: {
            width: Dimensions.get('window').width / (10 / 9.5), borderWidth: 1, borderColor: '#f5f6fa', marginTop: 30
        },
        btnContainer:{
            flexDirection:'row',justifyContent:'space-between',width:Dimensions.get('window').width/(10/9.5)
        },
        btnStyle:{
            borderWidth:1,borderColor:'#f5f6fa', padding:10, marginTop:10
        }
    }),
    mainPage:StyleSheet.create({
        containerColumn:{
            flexDirection:'column',
            width:Dimensions.get('window').width/1,
            height:Dimensions.get('window').height/1
            

        },
        containerHeader:{
            height:Dimensions.get('window').height / (10/0.8),
            width :Dimensions.get('window').width /1,
            borderWidth:1,
            borderColor:'black',
            flexDirection:'row',
            justifyContent:'space-between',
            padding:10

        },
        containerList:{
            height:Dimensions.get('window').height / (10/7.30),
            width:Dimensions.get('window').width / 1,
            alignSelf:'center'

            
        },
        containerFooter:{
            height:Dimensions.get('window').height / (10/3),
            width:Dimensions.get('window').width/1,
            flexDirection:'column'
        },
        headerUserName:{
            width:Dimensions.get('window').width / (10/8)
        },
        headerLogOut:{
            width:Dimensions.get('window').width / (10/2)
        },
        footerInputBtn:{
            flexDirection:'row',
            width:Dimensions.get('window').width/1,
            height:Dimensions.get('window').height/(10/1),
            
           
            
        },
        footerInput:{
            width:Dimensions.get('window').width/(10/8.5),
        },
        footerAddBtn:{
            height:Dimensions.get('window').height/(10/1.5)
        },
        footerNavigation:{
            width:Dimensions.get('window').width/1,
            
            flexDirection:'row',
            //position:'absolute',
            bottom:10
            
            
        },
        footerBtnNavigation:{
            width:Dimensions.get('window').width/2,
            
            
        },
        addBtn:{

            backgroundColor:'#2ecc71',
            padding:15,
            alignItems:'center'
        },
        addBtnTxt:{
            color:'white',
            fontWeight:'bold'
        },
        footerNavigationBtn:{
            backgroundColor:'#e67e22',
            padding:15
        },
        footerNavigationBtnActive:{
            backgroundColor:'#e67e22',
            borderWidth:1,
            borderColor:'white',
            alignItems:'center',
            padding:15
        }
    })
}

export default styles