import React, { useEffect, useState } from "react";
import {Port} from "../port"
import { StyleSheet, Text, ScrollView,TouchableOpacity,View, Image,TextInput,KeyboardAvoidingView,TouchableWithoutFeedback,Platform,Keyboard,Modal } from "react-native";
import axios from "axios";
import * as ImagePicker from 'expo-image-picker';

const ProductsCon =({userId})=>{
    const [ref,setRef]=useState(false)
    const [Categorys,setCategorys]=useState([])
    const [allproducts,setAllproducts]=useState([])
    const [users,setUsers]=useState([])
    const [render,setRender]=useState("home")
    const [user,setUser]=useState([])
    const [pop,setPop]=useState(false)
    const [selectedId,setSelectedId]=useState(null)
    const [addclick,setAddclick]=useState(null)

console.log(user);
///////////////////////category/////////////////////////////////////
const [categname,setCategname]=useState("")

let infocateg={
    ca_name:categname
}

///////////////////////user////////////////////////    
    const [usname,setUsname]=useState("")
    const [Uspseudo,setUspseudo]=useState("")
    const [uspassword,setUspassword]=useState("")
    const [usrole,setUsrole]=useState("")
    const [usphone,setUsphone]=useState(null)
    const [uslocation,setUslocation]=useState("")

    let infouser={
        user_name:usname ,
        user_phone:usphone,
        user_Pseudo:Uspseudo,
        user_password:uspassword,
        user_role: usrole,
        user_location:uslocation,
    }
///////////////////////product////////////////////////
const [selectedImage, setSelectedImage] = useState(null);
const [prodname,setProdname]=useState("")
const [prodprice,setProdprice]=useState(null)
let infoprod={
    product_name : prodname  ,
    price : prodprice,
    image:selectedImage
}
const handleImagePicker = async () => {
  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    console.log('Permission to access camera roll is required!');
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync();

  if (!result.cancelled) {
    const source = { uri: result.uri };
    setSelectedImage(source);
  }
};

const handleCameraCapture = async () => {
  const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

  if (permissionResult.granted === false) {
    console.log('Permission to access camera is required!');
    return;
  }

  const result = await ImagePicker.launchCameraAsync();

  if (!result.cancelled) {
    const source = { uri: result.uri };
    setSelectedImage(source);
  }
};
 /////////////////////categorys/////////////////////////////////

      const addcategory=(body)=>{
        axios.post("http://"+Port+":3000/api/sarbini/category",body)
        .then(()=>{
            console.log("added");
            setRef(!ref)
        })
        .catch((err)=>console.error(err))
      }
      const updatecateg=(id,body)=>{
        axios.put("http://"+Port+":3000/api/sarbini/category/"+id,body)
        .then(()=>{
            console.log("updated");
            setRef(!ref)
        })
        .catch((err)=>console.error(err))
      }
      const getcat=()=>{
        axios.get("http://"+Port+":3000/api/sarbini/category")
        .then((res)=>{
          setCategorys(res.data)
          console.log(res.data);
        })
        .catch((err)=>{
          console.error("error",err);
        })
      }
      const deleteCateg=(id)=>{
        axios.delete("http://"+Port+":3000/api/sarbini/category/"+id)
        .then(()=>{
            console.log("deleted");
            setRef(!ref)
        })
        .catch((err)=>{
            console.error("error",err);
          })
      }
//////////////////////////////////Product////////////////////////////////////////

      const addProduct=(body)=>{
        axios.post("http://"+Port+":3000/api/sarbini/product",body)
        .then(()=>{
            console.log("added");
            setRef(!ref)
        })
        .catch((err)=>console.error(err))
      }

      const getproducts=()=> {
        axios.get("http://"+Port+":3000/api/sarbini/products")
        .then((res)=>{
          setAllproducts(res.data)
        })
        .catch((err)=>{
          console.error("error",err);
        })
      }
      const updateproduct=(id,body)=>{
        axios.put("http://"+Port+":3000/api/sarbini/product/"+id,body)
        .then(()=>{
            console.log("updated");
            setRef(!ref)
        })
        .catch((err)=>console.error(err))
      }
      const deleteProd=(id)=>{
        axios.delete("http://"+Port+":3000/api/sarbini/product/"+id)
        .then(()=>{
            console.log("deleted");
            setRef(!ref)
        })
        .catch((err)=>{
            console.error("error",err);
          })
      }

///////////////////////////////////users//////////////////////////////////////////

      const adduser=(body)=>{
        axios.post("http://"+Port+":3000/api/sarbini/user",body)
        .then(()=>{
            console.log("added");
            setRef(!ref)
        })
        .catch((err)=>console.error(err))
      }
      const updateuser=(id,body)=>{
        axios.put("http://"+Port+":3000/api/sarbini/users/"+id,body)
        .then(()=>{
            console.log("updated");
            setRef(!ref)
        })
        .catch((err)=>console.error(err))
      }
      const getUsers=()=>{
        axios.get("http://"+Port+":3000/api/sarbini/users")
        .then((res)=>{
            setUsers(res.data)
        })
        .catch((err)=>{
            console.error("error",err);
          })
    }
    const deleteUser=(id)=>{
        axios.delete("http://"+Port+":3000/api/sarbini/users/"+id)
        .then(()=>{
            console.log("deleted");
            setRef(!ref)
        })
        .catch((err)=>{
            console.error("error",err);
          })
      }
      const getUserById=(userId)=>{
        axios.get("http://"+Port+":3000/api/sarbini/users/3")
        .then((res)=>{
            setUser(res.data)
        })
        .catch((err)=>console.error(err))
      }
///////////////////////////////////function///////////////////////////////////////////////
      useEffect(()=>{
        getcat()
        getproducts()
        getUsers()
        getUserById()
      },[ref])

    const hundeledit=(id)=>{
        setPop(true)
        setSelectedId(id)
    }
    const hundelupdate=(calback,body)=>{
        calback(selectedId,body)
        setPop(false)
    }
    const hundeladd=(calback,body)=>{
      calback(body)
      setPop(false)
  }
////////////////////////////////////////popup///////////////////////////////////////////////////////////////
      const popup=(oft,calback,submit)=>{
        console.log("itwork");
        if(oft==="user"){
            return (
                <Modal transparent={true} visible={pop}>
                <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.rowContainer}>
                      <Text style={styles.textpop}>Name:</Text>
                      <TextInput style={styles.inputText} onChangeText={(text) =>setUsname(text)} />
                    </View>
                    <View style={styles.rowContainer}>
                      <Text style={styles.textpop}>Pseudo:</Text>
                      <TextInput style={styles.inputText}  onChangeText={(text) => setUspseudo(text)} />
                    </View>
                    <View style={styles.rowContainer}>
                      <Text style={styles.textpop}>Password:</Text>
                      <TextInput style={styles.inputText}   onChangeText={(text) => setUspassword(text)} />
                    </View>
                    <View style={styles.rowContainer}>
                      <Text style={styles.textpop}>Role:</Text>
                      <TextInput style={styles.inputText} onChangeText={(text) => setUsrole(text)} />
                    </View>
                    <View style={styles.rowContainer}>
                      <Text style={styles.textpop}>Phone:</Text>
                      <TextInput style={styles.inputText}  onChangeText={(text) => setUsphone(text)} />
                    </View>
                    <View style={styles.rowContainer}>
                      <Text style={styles.textpop}>Location :</Text>
                      <TextInput style={styles.inputText} onChangeText={(text) => setUslocation(text)} />
                    </View>
                    <View style={styles.btnalign}>
                    <TouchableOpacity onPress={() => setPop(false)} style={styles.closeButton}>
                        <Text style={styles.textinp}>Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => calback(submit,infouser)} style={styles.submitButton}>
                        <Text style={styles.textinp}>Submit</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                </View>
                </Modal>
              );
            }
            if(oft==="category"){
                return(
                <Modal transparent={true} visible={pop}>
                    <View style={styles.modalContainer}>
                      <View style={styles.modalContent}>
                          <View style={styles.rowContainer}>
                                <Text style={styles.textpop}>Name:</Text>
                                <TextInput style={styles.inputText} onChange={(text)=>{setCategname(text)}}/>
                            </View>
                            <View style={styles.btnalign}>
                            <TouchableOpacity 
                            onPress={()=>{calback(submit,infocateg)}}
                            style={styles.submitButton}
                            >
                                <Text style={styles.textinp}>Submit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={() => setPop(false)}
                            style={styles.submitButton}
                            >
                                <Text style={styles.textinp}>Cancel</Text>
                            </TouchableOpacity>                        
                            </View>
                        </View>
                    </View>
                </Modal>
                )
            }
            if(oft==="product"){
                return(
                <Modal transparent={true} visible={pop}>
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <View style={styles.rowContainer}>
                        <Text style={styles.textpop}>Name:</Text>
                        <TextInput style={styles.inputText} onChange={(text)=>{setProdname(text);}}/>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.textpop}>Price:</Text>
                        <TextInput style={styles.inputText} onChange={(text)=>{setProdprice(text);}}/>
                  </View>   
                    <View style={styles.rowContainer}>
                    {selectedImage && <Image source={selectedImage} style={{ width:100, height:100,position:"absolute",left:90 }} />}
                    <View style={{ flexDirection:'row',display:"flex"}}>
                    <View style={styles.btnalign2}>
                    <TouchableOpacity onPress={handleImagePicker}>
                      <Text style={styles.textinp}>Select Image</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.btnalign3}>
                    <TouchableOpacity onPress={handleCameraCapture}>
                       <Text style={styles.textinp}>Take a Photo</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                  </View>
                  <View>
                                      
                        <View style={styles.btnalign}>
                          <TouchableOpacity 
                            onPress={()=>{calback(submit,infoprod)}}                            
                            style={styles.submitButton}
                            >
                                <Text style={styles.textinp}>Submit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={() => setPop(false)}
                            style={styles.submitButton}
                            >
                                <Text style={styles.textinp}>Cancel</Text>
                            </TouchableOpacity>   
                          </View>   
                        </View>
                      </View>  
                    </View>
                </Modal>
                )
            }
      }
//////////////////////////////nav/////////////////////////////////////////
      const navtab=()=>{
        return(
            <View style={styles.container}>
            <View style={styles.item}>
              <Text>ID</Text>
            </View>
            <View style={styles.item}>
              <Text>Name</Text>
            </View>
            <View style={styles.item}>
              <Text>Update</Text>
            </View>
            <View style={styles.item}>
              <Text>Delete</Text>
            </View>
          </View>
        )
      }
///////////////////////render///////////////////////////////////////////////////////
      const Renderview=()=>{
        if (render==="home"){
            return (
              <View style={styles.container2}>
              <Text style={styles.welcomeText}>Welcome Mr {user.user_name}</Text>
              <View style={styles.iconContainer}>
                <TouchableOpacity 
                onPress={()=>{setAddclick("user"),setPop(true)}}
                style={styles.iconButton}>
                  <Image
                    style={styles.iconImage}
                    source={require("../../assets/waiter.png")}
                  />
                  <Text style={{fontSize:12,fontWeight:500}} >Add User</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>{setAddclick("product"),setPop(true)}}
                style={styles.iconButton}>
                  <Image
                    style={styles.iconImage}
                    source={require("../../assets/products.png")}
                  />
                  <Text style={{fontSize:12,fontWeight:500}}>Add Product</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>{setAddclick("category"),setPop(true)}}
                style={styles.iconButton}>
                  <Image
                    style={styles.iconImage}
                    source={require("../../assets/categorys.png")}
                  />
                  <Text style={{fontSize:12,fontWeight:500}}>Add Category</Text>
                </TouchableOpacity>
              </View>
              {addclick&&addclick==="user"?popup(addclick,hundeladd,adduser):addclick==="product"?popup(addclick,hundeladd,addProduct):popup(addclick,hundeladd,addcategory)}
            </View>
            )
        }
        if(render==="categorys"){
            return (
                <View>
                    <View>
                        <Text style={styles.text}>Categorys :</Text>
                    </View>
                    <View>
                        {navtab()}
                        {popup("category",hundelupdate,updatecateg)}
                        <ScrollView style={styles.scroling} >
                        {hundelviews(Categorys)}
                        </ScrollView>
                    </View>
                </View>
            )
        }
        if(render==="products"){
            return (
                <View>
                    <View>
                        <Text style={styles.text}>products :</Text>
                    </View>
                    <View>
                        {navtab()}
                        {popup("product",hundelupdate,updateproduct)}
                        <ScrollView style={styles.scroling} >
                        {hundelviews(allproducts)}
                        </ScrollView>
                    </View>
                </View>
            )
        }
        if(render==="users"){
            return (
                <View>
                    <View>
                        <Text style={styles.text}>users :</Text>
                    </View>
                    <View>
                        {navtab()}
                        {popup("user",hundelupdate,updateuser)}
                        <ScrollView style={styles.scroling} >
                        {hundelviews(users)}
                        </ScrollView>
                    </View>
                </View>
            )
        }
      }
//////////////////////////views////////////////////////////////////////////
const hundelviews=(categ)=>{
    return categ.map((el,i)=>{
        return(
           
            <View>
                {categ===Categorys&&
             <View style={styles.tableContainer}>
             <View style={styles.cell}>
               <Text style={styles.text}>{el.id}</Text>
             </View>
             <View style={styles.cell}>
               <Text style={styles.text}>{el.ca_name}</Text>
             </View>
             <View style={styles.cell}>
               <TouchableOpacity 
               onPress={()=>{hundeledit(el.id)}}
               >
                 <Image source={require("../../assets/Edit.png")} style={styles.image} />
               </TouchableOpacity>
             </View>
             <View style={styles.cell}>
               <TouchableOpacity onPress={() => { deleteCateg(el.id) }}>
                 <Image source={require("../../assets/delete.png")} style={styles.image} />
               </TouchableOpacity>
             </View>
           </View>
                }
                {categ===allproducts&&
                <View style={styles.tableContainer}>
                <View style={styles.cell}>
                    <Text style={styles.text}>{el.id}</Text>
                </View>
                <View style={styles.cell}>
                    <Image
                    source={el.image}
                    />
                    <Text style={styles.text}>{el.product_name}</Text>
                </View>
                <View style={styles.cell}>
                    <TouchableOpacity
                    onPress={()=>{hundeledit(el.id)}}
                    >
                    <Image
                    
                    source={require("../../assets/Edit.png")}
                    style={styles.image}                    />
                    </TouchableOpacity>
                </View> 
                <View style={styles.cell}>
                    <TouchableOpacity
                    onPress={()=>{deleteProd(el.id)}}
                    >
                    <Image
                    source={require("../../assets/delete.png")}
                    style={styles.image}                      />
                    </TouchableOpacity>
                </View>   
                </View>
                }
                {categ===users&&
                 <View style={styles.tableContainer}>
                 <View style={styles.cell}>
                     <Text style={styles.text}>{el.id}</Text>
                 </View>
                 <View style={styles.cell}>
                     <Text style={styles.text}>{el.user_name}</Text>
                 </View>
                 <View style={styles.cell}>
                    <TouchableOpacity
                    onPress={()=>{hundeledit(el.id)}}
                    >
                    <Image
                        source={require("../../assets/Edit.png")}
                        style={styles.image}
                    />
                    </TouchableOpacity>
                </View> 
                <View style={styles.cell}>
                    <TouchableOpacity
                    onPress={()=>{deleteUser(el.id)}}
                    >
                    <Image
                    source={require("../../assets/delete.png")}
                    style={styles.image}                      />
                    </TouchableOpacity>
                </View>   
                 </View>
                }
            </View>
        )
    })
}

return(
    <View>
      {/*//////////////////sidebar///////////////////// */}
        <View style={styles.sidebar}>
            <Image
            source={require("../../assets/sarbini_white.png")}
            style={{width:100,height:100,position:"absolute",right:-8,top:5}}
            />
           <TouchableOpacity 
           onPress={()=>{setRender("home")}}
           >
            <View style={{position:"absolute",right:22,top:200}}>
           <Image
            source={require("../../assets/home.png")}
            style={{width:40,height:40,}}
            />
            <Text style={{color:"#fff",marginLeft:2.5}}>Home</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity 
           onPress={()=>{}}
           >
            <View style={{position:"absolute",right:21,top:300}}>
           <Image
            source={require("../../assets/messanger2.png")}
            style={{width:40,height:40,}}
            />
            <Text style={{color:"#fff",marginLeft:3}}>Chat</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity 
           onPress={()=>{}}
           >
            <View style={{position:"absolute",right:21,top:400}}>
           <Image
            source={require("../../assets/charts.png")}
            style={{width:40,height:40,}}
            />
            <Text style={{color:"#fff",marginLeft:-1}}>Charts</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity 
           onPress={()=>{}}
           >
            <View style={{position:"absolute",right:21,top:750}}>
           <Image
            source={require("../../assets/lucidedooropen.png")}
            style={{width:40,height:40,}}
            />
            <Text style={{color:"#fff",marginLeft:0}}>Logout</Text>
            </View>
           </TouchableOpacity>
        </View>
      {/*//////////////////sidebar///////////////////// */}
        <View style={styles.navbar}>
            <TouchableOpacity 
            style={styles.btnnav}
            onPress={()=>{setRender("categorys")}}>
                <Text style={styles.navText} >Categorys</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.btnnav}
            onPress={()=>{setRender("products")}}>
                <Text style={styles.navText}>Products</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.btnnav}
            onPress={()=>{setRender("users")}}>
                <Text style={styles.navText}>Users</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.render} >
            {Renderview()}
        </View>
    </View>
)
}
const styles=StyleSheet.create({
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    marginLeft:0
  },
  iconButton: {
    margin: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
  },
  iconImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
    sidebar:{
        height:"100%",
        width: "20%" ,
        backgroundColor:'#d15c54',
        marginTop:20
    },
    navbar:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'#d15c54',
        width:"80%",
        position:"absolute",
        left:85, 
        top:20 
    },
    btnnav:{
        borderWidth:1,
        borderColor:"#fff",
        paddingLeft:15,
        paddingTop:12,
        width:110,
        height:50,
        textAlign:"center"
    },
    navText: {
        color: '#fff', // Couleur du texte
        fontSize: 16,
        fontWeight: 'bold',
      },
    render:{
        position:"absolute",
        left:85,
        top:85
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Aligns items evenly vertically
        alignItems: 'center', // Aligns items in the center horizontally
      },
      item: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 2,
        marginVertical: 5,
        width: 81,
        alignItems: 'center', // Aligns text in the center horizontally
      },
      image: {
        width: 50,
        height: 50,
      },
      tableContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
      },
      cell: {
        flex: 1,
        alignItems: 'center',
      },
      text: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      image: {
        width: 30,
        height: 30,
      },
      scroling:{
        height:"81%"
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

      },
      modalContent: {
        borderWidth: 1,
        borderColor: '#d15c54',
        elevation: 15,
        shadowColor: '#d15c54',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius:20,
        width: 350,
        height:500
      },
      rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
      },
      inputText: {
        borderWidth:1,
        borderBlockColor:"#ccc",
        borderRadius:12,
        marginLeft:5,
        paddingLeft:15,
        width:200
      },
      closeButton: {
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:12,
        padding:10,
        backgroundColor:"#d15c54",
        marginRight:20,
        width:100,
        height:50,
        elevation: 15,
        shadowColor: 'black',
      },
      submitButton: {
        alignSelf: 'flex-end',
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:12,
        padding:10,
        backgroundColor:"#d15c54",
        width:100,
        height:50,
        elevation: 15,
        shadowColor: 'black',
      },
      btnalign2:{
        marginLeft:70,
        flexDirection:"row",
        position:"absolute",
        top:100,
        left:95,
        alignSelf: 'flex-end',
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:12,
        padding:10,
        backgroundColor:" ",
        width:150,
        height:50,
        elevation: 15,
        shadowColor: 'black',
      },
      btnalign3:{
        marginLeft:70,
        flexDirection:"row",
        position:"absolute",
        top:102,
        right:-135,
        alignSelf: 'flex-end',
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:12,
        padding:10,
        backgroundColor:"#d15c54",
        width:150,
        height:50,
        elevation: 15,
        shadowColor: 'black',
      },
      btnalign:{
        marginLeft:70,
        flexDirection:"row",
        position:"absolute",
        top:300,
      },
      textinp:{
        color:"#fff",
        textAlign:"center",
        fontSize:20,
      },
      textpop:{
        fontSize:20
      }

})
export default ProductsCon