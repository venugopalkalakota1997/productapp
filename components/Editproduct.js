import React, { useState, useEffect } from 'react';
import { globalstyles } from "../globalstyles/globalstyles";
import {Image, Button,View, Picker, Text, TouchableOpacity,ActivityIndicator, ScrollView, TextInput } from "react-native";
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';


export default function EditProductComponent(props) {
    let {detail }= props.route.params.item
    const navigation = useNavigation();
    let [newproduct, setproduct] = useState({
        id: '',
        name: '',
        productdetails: '',
        quantity: '',
        price: '',
        category: '',
        image: ''

    });
    useEffect(() => {
       
        console.log(props.route.params.item);
        setproduct(props.route.params.item)
        console.log(newproduct);
    })
    
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

    function editproduct(){
        if(newproduct['name']==='' || newproduct['productdetails'] === '' || newproduct ['image']===''|| newproduct['price']===''|| newproduct['quantity']===''){
          buttonstatus['buttonstatus']=false
          setbuttonstatus(buttonstatus)
        }
        else{
            
        let productRequestBody =newproduct
        console.log(productRequestBody);
        axios.put('http://localhost:3000/productdetails/'+newproduct['id'], productRequestBody)
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
                <Text style={globalstyles.texttitle}>Edit Product</Text>
                <Text>Product Name: <Text style={{color:'red'}}>*</Text></Text>
                <TextInput style={globalstyles.forminput} name="name" onChangeText={namechange} value={newproduct['name']}></TextInput>
                <Text>Product Description: <Text style={{color:'red'}}>*</Text></Text>
                <TextInput style={globalstyles.forminput} name="productdetails" numberOfLines={5} multiline={true} onChangeText={detailschange} value={newproduct['productdetails']}/>
                <Text>Product Price: <Text style={{color:'red'}}>*</Text></Text>
                <TextInput style={globalstyles.forminput}name="price"  keyboardType={'number-pad'} onChangeText={pricechange} value={newproduct['price']}/>
                <Text>Product Quantity: <Text style={{color:'red'}}>*</Text></Text>
                <TextInput style={globalstyles.forminput} name="quantity" keyboardType={'number-pad'} onChangeText={quantitychange} value={newproduct['quantity']}/>
                <Text>Product Category: <Text style={{color:'red'}}>*</Text></Text>
                <Picker style={{ height: 50, width: 300 }} style={globalstyles.forminput} onValueChange={selectcategory} >
                    <Picker.Item label={newproduct['category']}  value={newproduct['category']} />
                    <Picker.Item label="Televison" name="Televison" value="Televison" />
                    <Picker.Item label="Mobile" name="Mobile" value="Mobile" />
                    <Picker.Item label="Furniture" name="Furniture" value="Furniture" />
                    <Picker.Item label="Computer Accessories" name="Computer Accessories" value="Computer Accessories" />
                </Picker>
                <Text>Product Image: <Text style={{color:'red'}}>*</Text></Text>
                <Picker style={{ height: 50, width: 300 }}   style={globalstyles.forminput} onValueChange={selectimage}>                  
                    <Picker.Item label={newproduct['image']} value={newproduct['image']} />
                    <Picker.Item label="Televison" name="Televison" value="televison.jpg" />
                    <Picker.Item label="Mobile" name="Mobile" value="mobile.jpg" />
                    <Picker.Item label="Furniture" name="Furniture" value="furniture.jpg" />
                    <Picker.Item label="Computer Accessories" name="Computer Accessories" value="computer.jpg" />
                </Picker>
                <Button title="EDIT PRODUCT"  style={globalstyles.forminput} color="blue"  onPress={editproduct} disabled={buttonstatus['buttonstatus']} />
            </View>
        </ScrollView>
    )
}