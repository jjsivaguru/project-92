import React,{Component}from"react"
import {View,TouchableOpacity,Image,Text,TextInput,StyleSheet} from"react-native"
export default class LoginScreen extends Component {
    constructor (props){
        super(props)
        this.state={
            username:"",
            password:""
        }
    }
    render(){
        return(
            <View style={styles.container}> 
            <Image source={require("./assets/logo.png")} style={styles.logoimg}/>
            <TextInput style={styles.input}
             onChangeText={(username)=>this.setState ({username})}
             placeholder={"username"}
             placeholderTextColor={"black"}
           />
           <TextInput styles={styles.input}
            onChangeText={(password)=>this.setState({password})}
            placeholder={"password"}
            placeholderTextColor={"black"}
            secureTextEntry={true}
           />
             <TouchableOpacity style={styles.loginbuttom}
             onPress={()=>this.props.navigation.navigate("Profilescreen")}>   
             <Text style={styles.logintext}> login</Text>
             </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    logoimg:{
        width:50,
        height:50
    },
    input:{
        height:40,
        width:20,
        marginTop:40,
        borderWidth:3,
        borderRadius:10,
        borderColor:"red",
        justifyContent:"center",
        textAlign:"center"
    },
    loginbuttom:{
        width:100,
        height:50,
        backgroundColor:"blue",
        alignItems:"center",
        justifyContent:"center"
    },
    logintext:{
        color:"white"
    }


})