import React from "react";
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import { Appbar, Button, TextInput, Card } from "react-native-paper";
/* Function to include navigation to the screen */
interface RegisterScreenProps{
    navigation: any;
}
function RegisterScreen(props: RegisterScreenProps){
    /*function to navigate to login screen */
    const Log_nav = () => props.navigation.navigate("Login")
    return(
        
            <ImageBackground 
            style={styles.background}
            source={require("../assets/images/SignIn.jpg")}
            resizeMode='cover'
            >
                <Text style = {styles.titleFHL}>FHL-App</Text>
                <ScrollView style = {styles.RegContainer}>
                <Card >
                    <Card.Title title="Register"/>
                    <Card.Content >
                        <TextInput label={'Name'} />
                        <TextInput label="Email" keyboardType="email-address" />
                        <TextInput label='Password' secureTextEntry={true} />
                        <TextInput label='Confirm Password' secureTextEntry={true}/>
                        <Button mode="contained">REGISTER</Button>
                        <Button onPress={Log_nav} mode="text">Back</Button>
                        </Card.Content>
                </Card>
                </ScrollView> 

            </ImageBackground>
       
    )
}

const styles = StyleSheet.create({
    background:{
       flex: 1, 
       alignContent: 'center',
       justifyContent: 'center',
     
    },
    RegContainer:{
        top: '15%'
      
    },
    titleFHL:{
        top: '10%',
        color:'white',
        fontSize: 50,
        lineHeight:100,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
export default RegisterScreen;