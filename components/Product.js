import React from "react";
import { globalstyles } from "../globalstyles/globalstyles";
import { useNavigation } from '@react-navigation/native';

import { Button, Image, View, Text, ScrollView } from "react-native";
import axios from 'axios'

export default function ProductComponent(props) {
    console.log(props);
    const detail = props.route.params.item
    const navigation = useNavigation();
    function deleteproduct() {
        axios.delete('http://localhost:3000/productdetails/' + detail.id)
            .then(response => {
                console.log(response)
                navigation.navigate('Home')
            }, error => {
                console.error(error)
            })
    }
    

    return (
        <ScrollView style={globalstyles.productdetails}>
            <Text style={globalstyles.texttitle}> Product Details  </Text>
            <Image style={globalstyles.image} source={require('../public/' + (detail.image))} />
            <Text style={globalstyles.textdetail}> Product name: {detail.name}  </Text>
            <Text style={globalstyles.textdetail}> productdetails: {detail.productdetails}  </Text>
            <Text style={globalstyles.textdetail}> Product Price: {detail.price}  </Text>
            <Text style={globalstyles.textdetail}> Product quantity: {detail.quantity}  </Text>
            <Text style={globalstyles.textdetail}> Product category: {detail.category}  </Text>
            <View style={globalstyles.addproduct}>
                <Button title="EDIT" style={globalstyles.forminput} color="blue" onPress={() => { navigation.navigate('Editproduct', { item: detail }) }} />
                <Button title="DELETE" style={globalstyles.forminput} color="red" onPress={deleteproduct} />
            </View>
        </ScrollView>
    )
}