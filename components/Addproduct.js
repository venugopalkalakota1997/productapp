import React, { useState } from 'react';
import { globalstyles } from "../globalstyles/globalstyles";
import {Image, Button,View, Picker, Text, TouchableOpacity,ActivityIndicator, ScrollView, TextInput } from "react-native";
import axios from 'axios'


export default function AddProductComponent({ navigation }) {
    let [newproduct, setproduct] = useState({
        id: '',
        name: '',
        productdetails: '',
        quantity: 0,
        price: 0,
        category: '',
        image: ''

    });
    let [buttonstatus,setbuttonstatus]=useState({buttonstatus:false})
 
    function namechange(event){       
        let name = 'name';
        let value = event;
        newproduct[name]=value
        console.log(newproduct)
        setproduct(newproduct)
    }
    function  detailschange(details){
        let name = 'productdetails';
        let value = details;
        newproduct[name]=value
        console.log(newproduct)
        setproduct(newproduct)
    }
    function pricechange(price){
        let name = 'price';
        let value = price;
        newproduct[name]=value
        console.log(newproduct)
        setproduct(newproduct)
    }
    function quantitychange(quantity){
        let name = 'quantity';
        let value = quantity;
        newproduct[name]=value
        console.log(newproduct)
        setproduct(newproduct)
    }
    function selectcategory(cate){
        console.log(cate);
        newproduct['category']=cate
        console.log(newproduct);
        setproduct(newproduct)
    }

    function selectimage(imae){
        console.log(imae);
        newproduct['image']=imae
        console.log(newproduct);
        setproduct(newproduct)
    }

    function addproduct(){
        if(newproduct['name']==='' || newproduct['productdetails'] === '' || newproduct ['image']===''|| newproduct['price']===''|| newproduct['quantity']===''){
          buttonstatus['buttonstatus']=false
          setbuttonstatus(buttonstatus)
        }
        else{
        let productRequestBody =newproduct
        axios.post('http://localhost:3000/productdetails/', productRequestBody)
                .then(response=>{
                    console.log(response);
                   navigation.navigate('Home')
                }, error=>{
                    console.error(error);
                })
            }
    }
    



    return (
        <ScrollView style={globalstyles.container}>

            <View style={globalstyles.addform}>
                <Text style={globalstyles.texttitle}>Add Product</Text>
                <Text>Product Name: <Text style={{color:'red'}}>*</Text></Text>
                <TextInput style={globalstyles.forminput} name="name" onChangeText={namechange}></TextInput>
                <Text>Product Description: <Text style={{color:'red'}}>*</Text></Text>
                <TextInput style={globalstyles.forminput} name="productdetails" numberOfLines={5} multiline={true} onChangeText={detailschange}/>
                <Text>Product Price: <Text style={{color:'red'}}>*</Text></Text>
                <TextInput style={globalstyles.forminput}name="price"  keyboardType={'number-pad'} onChangeText={pricechange}/>
                <Text>Product Quantity: <Text style={{color:'red'}}>*</Text></Text>
                <TextInput style={globalstyles.forminput} name="quantity" keyboardType={'number-pad'} onChangeText={quantitychange}/>
                <Text>Product Category: <Text style={{color:'red'}}>*</Text></Text>
                <Picker style={{ height: 50, width: 300 }} style={globalstyles.forminput} onValueChange={selectcategory}>
                    <Picker.Item label="Select Category" value="Select Category" />
                    <Picker.Item label="Televison" name="Televison" value="Televison" />
                    <Picker.Item label="Mobile" name="Mobile" value="Mobile" />
                    <Picker.Item label="Furniture" name="Furniture" value="Furniture" />
                    <Picker.Item label="Computer Accessories" name="Computer Accessories" value="Computer Accessories" />
                </Picker>
                <Text>Product Image: <Text style={{color:'red'}}>*</Text></Text>
                <Picker style={{ height: 50, width: 300 }}  style={globalstyles.forminput} onValueChange={selectimage}>
                   
                    <Picker.Item label="Select Image" value="Select Category" />
                    <Picker.Item label="Televison" name="Televison" value="televison.jpg" />
                    <Picker.Item label="Mobile" name="Mobile" value="mobile.jpg" />
                    <Picker.Item label="Furniture" name="Furniture" value="furniture.jpg" />
                    <Picker.Item label="Computer Accessories" name="Computer Accessories" value="computer.jpg" />
                </Picker>
                <Button title="ADD PRODUCT"  style={globalstyles.forminput} color="blue"  onPress={addproduct} disabled={buttonstatus['buttonstatus']} />
            </View>
        </ScrollView>
    )
}