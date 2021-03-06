import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputContainer:{
        width:'80%'
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        margin:5
    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40
    },
    button:{
        backgroundColor:'#2cd18a',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems:'center'
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16
    },
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'#2cd18a',
        borderWidth:2
    },
    buttonOutlineText: {
        color:'#2cd18a',
        fontWeight:'700',
        fontSize:16
    }
})

export default styles