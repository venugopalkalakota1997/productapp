import React, { useState, useEffect } from 'react';
import { globalstyles } from "../globalstyles/globalstyles";
import { View, Text, TouchableOpacity } from "react-native";
import axios from 'axios'
import { Image,Picker, StyleSheet, Button, ScrollView, TextInput } from 'react-native';


export default function HomeComponent({ navigation }) {
    const [users, setUsers] = useState([])
    const [permenantusers, setpermenantUsers] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3000/productdetails')
            .then(res => {
                setUsers(res.data)
                setpermenantUsers(res.data)
            })
    }, [navigation])
    
    function search(event) {
        let products = permenantusers.filter((fproduct) => {
            return fproduct.name.toLowerCase().includes(event.toLowerCase())
        })
        setUsers(products)
    }
    function categorysearch(event){
        if (event !== 'Select Category'){
            let filteredvalues = permenantusers.filter((fproduct) => {
                return (fproduct.category.includes(event))
            })
            setUsers(filteredvalues)
        }
        else{
            setUsers(permenantusers)
        }
    }
    return (
        <ScrollView style={globalstyles.container}>
            <TextInput
                style={globalstyles.input}
                placeholder='Search Product'
                onChangeText={search}

            ></TextInput>
            <View style={globalstyles.addproduct}>
                <Picker
                    
                    style={{ height: 50, width: 150 }}
                    onValueChange={categorysearch}>
                   <Picker.Item label="Select Category" value="Select Category" />
                    <Picker.Item label="Televison" value="Televison" />
                    <Picker.Item label="Mobile" value="Mobile" />
                    <Picker.Item label="Furniture" value="Furniture" />
                    <Picker.Item label="Computer Accessories" value="Computer Accessories" />

                </Picker>
                <Button title="ADD PRODUCT"  style={globalstyles.button} color="blue" onPress={() => { navigation.navigate('Addproduct') }} />
            </View>
            {

                users.map(user => {

                    return (
                        <View key={user.id} style={globalstyles.productlist}>
                            <TouchableOpacity onPress={() => { navigation.navigate('Product', { item: user }) }}>
                                <Image style={globalstyles.image} source={require('../public/' + (user.image))} /> 
                                <Text style={globalstyles.name} > {user.name} </Text>
                                <Text style={globalstyles.category} > category: {user.category}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}
