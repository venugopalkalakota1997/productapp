import { StyleSheet } from "react-native";

export const globalstyles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        color: 'red'
    },
    containerStyle: {
        padding: 10,
        flex: 1
    },
    touchButtonContainer: {
        backgroundColor: 'pink',
        padding: 10,
        margin: 20,
        borderRadius: 5
    },
    container: {
        padding: 10,
        flex: 1
    },
    image: {
        width: 300,
        height: 200,
        marginBottom:20
    },
    productlist: {
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderLeftWidth: 3,
        borderTopWidth: 3,
        borderTopColor: 'red',
        borderLeftColor: 'red',
        borderRightColor: 'red',
        borderBottomColor: 'red',
        alignItems: "center",
        marginTop: 20,
        padding: 20,
    },
    name: {
        fontSize: 16,
        color: 'red'
    },
    productdetails:{
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderLeftWidth: 3,
        borderTopWidth: 3,
        borderTopColor: 'red',
        borderLeftColor: 'red',
        borderRightColor: 'red',
        borderBottomColor: 'red',
        marginTop: 20, 
        padding: 20,
    },
    texttitle:{
        textAlign:"center",
        marginBottom:20,
        fontSize: 20,
        color: 'blue'
    },
    textdetail:{
        fontSize: 20,
        marginBottom:10
    },
    input:{
        marginBottom:10,
        paddingHorizontal:10,
        paddingVertical:10,
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderLeftWidth: 3,
        borderTopWidth: 3,
        borderTopColor: 'grey',
        borderLeftColor: 'grey',
        borderRightColor: 'grey',
        borderBottomColor:'grey',
        fontSize:20
    },
    addproduct:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button:{
        textAlignVertical:"center"
    },
    addform:{
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderLeftWidth: 3,
        borderTopWidth: 3,
        borderTopColor: 'red',
        borderLeftColor: 'red',
        borderRightColor: 'red',
        borderBottomColor: 'red',
       
        marginTop: 20,
        padding: 20,
    },
    forminput:{
        marginBottom:20,
       paddingHorizontal:10,
        paddingVertical:10,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderTopColor: 'grey',
        borderLeftColor: 'grey',
        borderRightColor: 'grey',
        borderBottomColor:'grey',
       
    }

})