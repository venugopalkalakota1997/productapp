import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeComponent from "../components/Home";
import AddProductComponent from "../components/Addproduct";
import ProductComponent from "../components/Product";
import { NavigationContainer } from "@react-navigation/native";
import EditProductComponent from "../components/Editproduct";


const Stack = createStackNavigator()


function MyStackNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' 
                            screenOptions={{
                                gestureEnabled:true,
                                headerStyle:{
                                    backgroundColor:'blue',
                                    height:50
                                }
                                }} 
                                headerMode='float'>
                <Stack.Screen name="Addproduct" component={AddProductComponent}></Stack.Screen>
                <Stack.Screen name="Home" component={HomeComponent}></Stack.Screen>
                <Stack.Screen name="Product" component={ProductComponent}></Stack.Screen>
                <Stack.Screen name="Editproduct" component={EditProductComponent}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStackNavigator