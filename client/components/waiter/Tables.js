import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet,TouchableOpacity,Text, TextInput,View,Modal,Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, Border, Padding, FontSize } from "../styles/TablesStyle";
import axios from "axios";
import { useRoute, useNavigation } from '@react-navigation/native'
import { Port } from "../port";

const Tables = () => {
  const[ref,setref]=React.useState(false)
  const[pop,setpop]=React.useState(false)
  const[tablename,setTablename]=React.useState("")
  const[tables,setTables]=React.useState([]) 
  const[status,setsatatus]=React.useState(false)
  const[status1,setStatus1]=React.useState(false)
  const[status2,setStatus2]=React.useState(Boolean)
  const[status3,setStatus3]=React.useState(Boolean)
  const[color,setcolor]=React.useState("rgb(197, 66, 66)")
  const [colorMap, setColorMap] =React.useState({}); // Use an object to store colors for each id
  const navigation = useNavigation();
  const route = useRoute();

  const userId =route.params?.userId;

///rgb(61, 206, 61)
const [selectedItemId, setSelectedItemId] = React.useState(null);


  let info={
    name:tablename,
    userId:userId,
  }

  const addtables=(info)=>{
    axios.post("http://"+Port+":3000/api/sarbini/orders",info)
    .then(()=>{
      console.log("aded");
      setref(!ref)
    })
    .catch((err)=>console.error(err))
  }

  const getalltables=()=>{
    axios.get("http://"+Port+":3000/api/sarbini/orders")
    .then((res)=>{
      setTables(res.data)
      console.log(res.data)
    })
    .catch((err)=>console.error("error", err))
  }

const UpdateStatus1=(id,stat)=>{
  axios.put("http://"+Port+":3000/api/sarbini/orders/"+id,{satus1:stat})
  .then((res)=>{
    console.log("update",res.data[0]);
    setref(!ref)
    setStatus1((prevStatus) => !prevStatus); 
  })
  .catch((err)=>console.error("error", err))

}

  React.useEffect(()=>{
    getalltables();
  },[!ref])
///////Functions////////////
const veriftable = (statut) => {
  return statut ? 'opened' : 'closed';
};
const hundelupdate = async (id, status1) => {
  console.log("status", status1);

  try {
    await UpdateStatus1(id, !status1);

    const newColor = status1 === true ? "rgb(197, 66, 66)" : "rgb(61, 206, 61)";
    setColorMap(prevColorMap => ({ ...prevColorMap, [id]: newColor }));

    // Update the selected item id in the state
    setSelectedItemId(id);
  } catch (error) {
    console.error("Error updating status:", error);
  }
};



  return (
    <View style={styles.tables}>
      <Image
        style={[styles.sideBarManager, styles.sideLayout]}
        contentFit="cover"
        source={require("../../assets/side-bar-manager.png")}
      />
      
      <Image
        style={[styles.sideBarManager1, styles.sideLayout]}
        contentFit="cover"
        source={require("../../assets/side-bar-manager1.png")}
      />
      <View style={styles.buttonLogOut}>
        <Image
          style={[styles.lucidedoorOpenIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../../assets/lucidedooropen.png")}
        />
        <Text style={[styles.logOut, styles.logOutTypo]}>Log Out</Text>
      </View>
      
      <Image
        style={styles.captureDCran20240113081Icon}
        contentFit="cover"
        source={require("../../assets/capture-d-cran-20240113-081410removebgpreview-3.png")}
      />
      
      {/*////////////////////////////////////////////////////////////////////////*/}
        <View style={styles.cardMenuParent}>
      {tables.map((el,i)=>{
        return(
          <> 
          <TouchableOpacity onPress={()=>{hundelupdate(el.id,el.satus1)}}>
        <View style={styles.cardLayout}>
            <LinearGradient
            style={[styles.cardMenuItem, styles.tablesChildBorder]}
            locations={[0.65, 1]}
            colors={[colorMap[el.id] || "rgb(197, 66, 66)", "rgba(0, 0, 0, 0.7)"]}
            />
          <Text style={[styles.chocolateCookiesSmoothies, styles.tables1Typo]}>
            {veriftable(el.satus1)}
          </Text>
          <Text style={[styles.rp1600000, styles.tables1Typo]}>{el.name}-{i}</Text>
        </View>
        </TouchableOpacity>
          </>
        )
      })}
      </View>
        {/*////////////////////////////////////////////////////////////////////////*/}
      <TouchableOpacity onPress={()=>{setpop(true)}} >
      <LinearGradient
        style={[styles.tablesChild, styles.tablesChildBorder]}
        locations={[0.65, 1]}
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]}
      />
      <Text style={[styles.text1, styles.text1FlexBox]}>+</Text>
      </TouchableOpacity>
        {/*////////////////////////////////////////////////////////////////////////*/}
      <View>
        <Modal 
        transparent={true}
        visible={pop}
        >
          <View style={{backgroundColor:"#000000aa",flex:1}}>
            <View style={styles.popup1}>
            <Text style={{fontSize:25,textAlign:"center"}} >Create New Table</Text>
            <Text style={{fontSize:15,textAlign:"center",marginTop:25}} >Table Name:</Text>
            <TextInput 
            onChangeText={(text)=>{setTablename(text)}}
            style={{width:"100%",borderStyle: "solid",borderColor:"black",borderWidth:1,paddingLeft:5 }}></TextInput>
            <TouchableOpacity 
            onPress={()=>{addtables(info),setpop(false)}}
            style={{backgroundColor:"brown",borderRadius:10,padding:5,marginTop:50, width:150,marginLeft:35}}>
              <Text style={{textAlign:"center",color:"white",fontSize:15}}>Valid</Text>
            </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      {/*//////////////////////////////////////////////////////////////////////////////////////*/}
      <View style={styles.searchBarParent}>
        
   
      </View>
   
      <View style={styles.tablesItem} />
      <Text style={[styles.tables1, styles.tables1Typo]}>Tables:</Text>
      <Text style={[styles.createNewTables, styles.text1FlexBox]}>
        Create New Tables
      </Text>
      <View>
      <TouchableOpacity  
        onPress={()=>{navigation.navigate("Product");}}
        style={styles.Products}>
        </TouchableOpacity>
        <TouchableOpacity 
        //////
        onPress={()=>{navigation.navigate("Tables");
      }}
        style={styles.tables}>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Products:{
    position:"absolute",
    top:340,
    width:80,
    height:52,

  }, 
  tables:{
    position:"absolute",
    top:420,
    width:80,
    height:52
  },
  popup1:{
    backgroundColor:"#ffffff",
    margin:50,
    padding:40,
    borderRadius:10,
    width:"70%",
    height:300,
    position:"absolute",
    top:100,
    left:30

  },
  sideLayout: {
    height: 817,
    position: "absolute",
  },
  iconLayout: {
    width: 32,
    height: 32,
  },
  logOutTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    color: Color.neutral100,
  },
  tablesChildBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    backgroundColor: "transparent",
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  tables1Typo: {
    display: "flex",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
    
  },
  statusPosition: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    backgroundColor: Color.colorDodgerblue,
    left: "50%",
    top: "50%",
    marginLeft: -109.5,
    marginTop: -129.5,
    display: "none",
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  component1IconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cardLayout: {
    height: 105,
    width: 85,
    marginRight:16
  },
  groupChildPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  groupChildBorder: {
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.neutral100,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  text1FlexBox: {
    color: Color.colorBlack,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  sideBarManager: {
    left: -11,
    width: 79,
    top: -4,
  },
  sideBarManager1: {
    top: 0,
    left: -1,
    width: 66,
  },
  lucidedoorOpenIcon: {
    height: 32,
  },
  logOut: {
    fontSize: 14,
    width: 100,
    height: 22,
    marginTop: 4,
  },
  buttonLogOut: {
    top: 720,
    left: -5,
    borderRadius: Border.br_3xs,
    width: 72,
    padding: Padding.p_7xs,
    alignItems: "center",
    position: "absolute",
  },
  captureDCran20240113081Icon: {
    top: 15,
    left: -16,
    width: 95,
    height: 74,
    position: "absolute",
  },
  cardMenuChild: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    backgroundColor: Color.neutral100,
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  cardMenuItem: {
    height: "83.21%",
    bottom: "16.79%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    borderRightWidth: 1,
    borderTopWidth: 1,
    backgroundColor: "transparent",
  },
  chocolateCookiesSmoothies: {
    width: "92.38%",
    top: "68.57%",
    fontSize: FontSize.size_5xs,
    left: "4.17%",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    color: Color.neutral100,
  },
  available: {
    fontSize: FontSize.size_xs,
    width: 77,
    height: 16,
    display: "none",
    textAlign: "center",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    color: Color.neutral100,
  },
  statusMenu: {
    display: "none",
  },
  rp1600000: {
    width: "76.19%",
    top: "85.36%",
    fontSize: FontSize.size_3xs,
    color: Color.black,
    left: "4.17%",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  component1Icon: {
    height: 24,
    left: "81.67%",
    right: "8.33%",
    width: "10%",
    marginTop: -131.5,
    maxWidth: "100%",
    top: "50%",
    display: "none",
  },
  cardMenu1: {
    marginLeft: 20,
  },
  statusMenu2: {
    width: 93,
    height: 24,
    display: "none",
  },
  component1Icon2: {
    height: 24,
    left: "81.67%",
    right: "8.33%",
    width: "10%",
    marginTop: -131.5,
    maxWidth: "100%",
    top: "50%",
  },
  cardMenuParent: {
    top: 249,
    left: 69,
    width: 303,
    flexDirection: "row",
    flexWrap:"wrap",
    position: "absolute",
    marginLeft:20
  },
  tablesChild: {
    top: 118,
    left: 87,
    height: 87,
    borderRightWidth: 1,
    borderTopWidth: 1,
    backgroundColor: "transparent",
    width: 85,
  },
  groupChild: {
    borderWidth: 0.8,
    borderRadius: 4,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    bottom: "0%",
    height: "100%",
  },
  groupItem: {
    height: "90%",
    width: "15%",
    top: "5%",
    right: "84.17%",
    bottom: "5%",
    left: "0.83%",
    maxHeight: "100%",
    borderRadius: 4,
  },
  searchItem: {
    height: "48.33%",
    width: "74.44%",
    top: "26.67%",
    left: "18.89%",
    fontSize: 7,
    color: Color.neutral500,
    position: "absolute",
  },
  rectangleParent: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  searchBar: {
    width: 187,
    height: 24,
  },
  iconButton: {
    width: 24,
    zIndex: 0,
    borderRadius: 4,
    height: 24,
  },
  text: {
    fontSize: 6,
    color: Color.colorWhite,
  },
  wrapper: {
    top: -2,
    left: 19,
    borderRadius: 12,
    backgroundColor: Color.redNonActive,
    width: 9,
    height: 9,
    padding: 3,
    zIndex: 1,
    position: "absolute",
  },
  frameWrapper: {
    width: 31,
    marginLeft: 4.07,
    flexDirection: "row",
    height: 32,
  },
  searchBarParent: {
    top: 43,
    left: 94,
    width: 226,
    flexDirection: "row",
    position: "absolute",
  },
  filterIcon: {
    width: 17,
    height: 17,
    overflow: "hidden",
  },
  iconButton1: {
    top: 39,
    left: 328,
    borderRadius: 5,
    borderWidth: 1.1,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 32,
    width: 32,
  },
  tablesItem: {
    left: 62,
    width: 295,
    height: 39,
    top: -4,
    position: "absolute",
  },
  tables1: {
    top: 90,
    left: 75,
    color: "#0d0d0e",
    width: 300,
    height: 18,
    opacity: 0.38,
    fontSize: FontSize.size_mini,
  },
  text1: {
    top: 133,
    left: 117,
    fontSize: 40,
    fontWeight: "300",
    fontFamily: FontFamily.openSansLight,
    width: 25,
    height: 49,
  },
  createNewTables: {
    top: 211,
    left: 76,
    fontFamily: FontFamily.openSansRegular,
    width: 161,
    height: 18,
    fontSize: FontSize.size_mini,
  },
  tables: {
    borderRadius: 30,
    backgroundColor: "#fffdfd",
    shadowColor: "rgba(6, 6, 34, 0.4)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Tables;