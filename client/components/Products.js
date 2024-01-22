import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet,Button, Text, ScrollView,TouchableOpacity,View, TextInput } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "./styles/ProductsStyle";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";


const Products = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [category,setCategorys]= React.useState([])
  const [allproducts,setAllproducts]=React.useState([])
  const [onecateg,setOnecateg]=React.useState(0)
  const [filtrprod,setFiltrprod]=React.useState([])
  const [searched,setSearched]=React.useState([])
  const [wordsea,setWordsea]=React.useState("")
  const [dosearch,setDosearch]=React.useState(false)
  const [order,setOrder]=React.useState([])
  const [opnedtable,setOpnedtabel]=React.useState([])
  const navigation = useNavigation();
console.log(order,"order");
  console.log(wordsea);
  console.log(searched,'searchedfor');


  // let info={
  //  product_name:wordsea
  // }
  const getOrder = async () => {
    try {
      const res = await axios.get("http://172.20.10.3:3000/api/sarbini/orders/products");
      console.log("allprod", res.data[0].products);
      setOrder(res.data[0].products);
      setIsLoading(!isLoading)
      
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  }
  const getcat=()=>{
    axios.get("http://172.20.10.3:3000/api/sarbini/category")
    .then((res)=>{
      setCategorys(res.data)
      console.log(res.data);
    })
    .catch((err)=>{
      console.error("error",err);
    })
  }
  const getproducts=()=> {
    axios.get("http://172.20.10.3:3000/api/sarbini/products")
    .then((res)=>{
      setAllproducts(res.data)
    })
    .catch((err)=>{
      console.error("error",err);
    })
  }
  const getprodbycateg=(idcat)=>{
    axios.get("http://172.20.10.3:3000/api/sarbini/prodbycateg/"+idcat)
    .then((res)=>{
      setOnecateg(idcat)
      setFiltrprod(res.data)
      console.log(res.data,'hello');
    })
    .catch((err)=>{
      console.error("error",err);
    })
  }

  const getsarch = () => {
    axios.get("http://172.20.10.6:3000/api/sarbini/searchprod/"+wordsea)
    .then((res) => {
      console.log('Données de la réponse Axios :', res.data);
      setSearched(res.data);
    })
    .catch((err) => {
      console.log('Erreur lors de la requête Axios :', err);
    });

  }
  
  const getopnedtable=()=>{
    axios.get("http:/172.20.10.3:3000/api/sarbini/opned")
    .then((res)=>{
      console.log("id",res.data.id);
      setOpnedtabel(res.data)
    })
    .catch((err)=>{
      console.log('erreur1',err)
    })  
  }
  const ajoutproduct = (id, info) => {
    axios.get("http://172.20.10.3:3000/api/sarbini/orders/products")
      .then(response => {
        const existingProducts = response.data[0]?.products || [];
        const updatedProducts = [...existingProducts, info];
  
        axios.put("http://172.20.10.3:3000/api/sarbini/addprod/" + id, { products: updatedProducts })
          .then(() => {
            console.log("added");
            // navigation.navigate("Orders");
          })
          .catch((err) => {
            console.log('erreur2', err);
          });
      })
      .catch((err) => {
        console.log('erreur1', err);
      });
  }
  

  React.useEffect(()=>{
    getcat();
    getproducts()
    getopnedtable()
  },[!isLoading])
  
  const renderbycateg=(categ)=>{

    return(
    categ.map((el,i)=>{
      return(
        <>    
        <TouchableOpacity 
        onPress={()=>{ajoutproduct(opnedtable.id,el)
        }}
        >
        <View style={[styles.cardMenu1, styles.cardLayout]}>
        <View style={[styles.cardMenuChild, styles.cardPosition]} />
        <Image
          style={[styles.cardMenuItem, styles.cardPosition]}
          contentFit="cover"
          source={el.image}
        />
        <Text style={styles.chocolatePosition}>
          <Text style={styles.chocolateCookiesSmoothiesContainer1}>
            <Text style={styles.mango}>{el.product_name}</Text>
          </Text>
        </Text>
        <Text style={[styles.rp1600000, styles.rp1600000Typo]}>
          {el.price} DT
        </Text>
        <Image
          style={[styles.component1Icon, styles.component1IconPosition]}
          contentFit="cover"
          />
          </View>
          </TouchableOpacity>
        </>
      )
    }))
  }

  const handleCategoryPress=(idcat)=>{
    setOnecateg(idcat)
    setDosearch(false)
    getprodbycateg(idcat)
  }

  
  const hundelsearch=()=>{
    console.log("search");
    getsarch();
    setTimeout(() => {

      setOnecateg(null);
      setDosearch(true);      
    }, 2000);

  }

  const conditionCategory = () => {
    console.log(searched, "searched");
    
    if (dosearch===true) {
      return renderbycateg(searched);
    } else if (onecateg === 0) {
      return renderbycateg(allproducts);
    } else {
      return renderbycateg(filtrprod);
    }
  }

  return (
    <View style={styles.products}>
      <Image
        style={styles.sideBarManager}
        contentFit="cover"
        source={require("../assets/side-bar-manager.png")}
      />
        <TouchableOpacity  
        onPress={()=>{navigation.navigate("Product");}}
        style={styles.Products}>
        </TouchableOpacity>
        <TouchableOpacity 
        ////
        onPress={()=>{navigation.navigate("Tables");
      }}
        style={styles.tables}>
        </TouchableOpacity>
      <View style={[styles.buttonLogOut, styles.buttonLogOutFlexBox]}>
        <Image
          style={styles.lucidedoorOpenIcon}
          contentFit="cover"
          source={require("../assets/lucidedooropen.png")}
        />
        <Text style={styles.logOut}>Log Out</Text>
      </View>
      <Image
        style={styles.captureDCran20240113081Icon}
        contentFit="cover"
        source={require("../assets/capture-d-cran-20240113-081410removebgpreview-3.png")}
      />
        
      
      <View style={styles.searchBarParent}>
        <View style={styles.searchBar}>
          <View style={[styles.rectangleParent, styles.groupChildPosition]}>
            
            <View style={[styles.groupChild, styles.childBorder]} />
            <TouchableOpacity   
            onPress={hundelsearch}
            > 
      <View style={styles.iconsearch}>
         <Image
              style={[styles.groupItem, styles.itemLayout]}
             
              source={require("../assets/frame-1260.png")}
            />
            </View>
            </TouchableOpacity>

            <TextInput placeholder="Search item" onChangeText={(text) => {
  setWordsea(text);
}}style={[styles.searchItem, styles.iceTypo2]}></TextInput>
          </View>
        </View>
        <View style={styles.frameWrapper}>
          <View>
            <Image
              style={styles.iconButton}
              contentFit="cover"
              source={require("../assets/iconbutton.png")}
            />
            <View style={styles.wrapper}>
              <Text style={styles.text}>3</Text>
            </View>
          </View>
        </View>
      </View>
      {/* <Image
        style={styles.productsChild}
        contentFit="cover"
        source={require("../assets/ellipse-454.png")}
      /> */}
      <View style={styles.container} >
        <ScrollView horizontal>
      {category.map((el,i)=>{
        return (
      
        <View>
        <TouchableOpacity
          onPress={() => handleCategoryPress(el.id)}
          style={styles.touchableOpacity}
        >
          <Text style={styles.categoryText}>{el.ca_name}</Text>
        </TouchableOpacity>
      </View>
        )
      })}
      </ScrollView>
      </View>
      <TouchableOpacity
      onPress={()=>{
        navigation.navigate("Orders");
      
      ;}}
      >
      <View style={[styles.iconButton1, styles.frameViewBorder]}>
        <Image
          style={styles.filterIcon}
          contentFit="cover"
          source={require("../assets/filter.png")}
        />
      </View>
      </TouchableOpacity>

      <View style={styles.productsItem} />
      <View style={styles.productsItem} />
      <View style={[styles.cardMenuParent, styles.cardParentLayout1]}>
   
          {conditionCategory()}
      </View>
      <View style={styles.productsChild1} />
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
  iconsearch:{
    width:150,
    height:30,
  },
  container: {
    flexDirection: 'row', // Affiche les éléments côte à côte
    alignItems: 'center', // Centre les éléments verticalement si nécessaire
    position:"absolute",
    width:"83%",
    top:65,
    left:65,
  },
  touchableOpacity: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    borderColor: 'rgb(0, 138, 252)',  // Couleur de la bordure
    borderWidth: 1,  // Largeur de la bordure
    marginRight:2,
    marginLeft:2,
    
  },
  categoryText: {
    color: 'rgb(0, 138, 252)',
    textAlign: 'center',
    fontSize:12,
    textTransform: 'capitalize' 
  },
  buttonLogOutFlexBox: {
    alignItems: "center",
    position: "absolute",
    
  },
  groupChildPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  childBorder: {
    borderStyle: "solid",
    backgroundColor: Color.neutral100,
    bottom: "0%",
    height: "100%",
  },
  itemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iceTypo2: {
    color: Color.neutral500,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  frameSpaceBlock: {
    padding: 5,
    width: 55,
    top: 78,
  },
  iceTypo: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  iceTypo1: {
    fontSize: FontSize.size_3xs_6,
    textAlign: "center",
  },
  frameViewBorder: {
    left: 353,
    borderWidth: 1.1,
    borderRadius: 5,
    justifyContent: "center",
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.neutral100,
    flexDirection: "row",
    height: 32,
    alignItems: "center",
    position: "absolute",
  },
  cardParentLayout1: {
    flexDirection: "row",
    flexWrap:"wrap",
    width: "100%",
    position: "absolute",
  },
  cardPosition: {
    borderRadius: Border.br_5xs,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
    
  },
  rp1600000Typo: {
    left: "4.17%",
    display: "flex",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  availableTypo: {
    height: 16,
    width: 77,
    fontSize: FontSize.size_xs,
    justifyContent: "center",
    textAlign: "center",
    color: Color.neutral100,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    alignItems: "center",
  },
  component1IconPosition: {
    left: "81.67%",
    right: "8.33%",
    width: "10%",
    marginTop: -131.5,
    top: "50%",
    maxWidth: "100%",
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  cardLayout: {
    height: 105,
    width: 85,
  },
  statusPosition: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    backgroundColor: Color.colorDodgerblue_100,
    left: "50%",
    top: "50%",
    marginLeft: -109.5,
    marginTop: -129.5,
    borderRadius: Border.br_5xs,
    display: "none",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  chocolatePosition: {
    top: "62.86%",
    left: "4.17%",
    width: "92.38%",
    display: "flex",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.neutral100,
    alignItems: "center",
    position: "absolute",
    backgroundColor:"  color: rgba(0, 0, 0, 0.356)",
    borderRadius:15,  
    padding:4,
    textAlign:"center"
    
  },
  cardParentLayout: {
    height: 148,
    flexDirection: "row",
    position: "absolute",
  },
  sideBarManager: {
    top: 0,
    left: -1,
    width: 66,
    height: 817,
    position: "absolute",
  },
  lucidedoorOpenIcon: {
    height: 32,
    width: 32,
  },
  logOut: {
    fontSize: 14,
    width: 100,
    height: 22,
    marginTop: 4,
    textAlign: "center",
    color: Color.neutral100,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  buttonLogOut: {
    top: 720,
    left: -6,
    borderRadius: Border.br_3xs,
    width: 72,
    padding: Padding.p_7xs,
  },
  captureDCran20240113081Icon: {
    top: 15,
    left: -16,
    width: 95,
    height: 74,
    position: "absolute",
  },
  groupChild: {
    borderWidth: 0.8,
    borderColor: Color.colorLightgray,
    borderRadius: 4,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
    borderStyle: "solid",
    backgroundColor: Color.neutral100,
  },
  groupItem: {
    height: "90%",
    width: "15%",
    top: "5%",
    right: "84.17%",
    bottom: "5%",
    left: "0.83%",
    borderRadius: 4,
    position: "absolute",
  },
  searchItem: {
    height: "58.33%",
    width: "74.44%",
    top: "22.67%",
    left: "18.89%",
    fontSize: 10,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
  },
  searchBar: {
    width: 187,
    height: 30,
  },
  iconButton: {
    width: 30,
    zIndex: 0,
    borderRadius: 4,
    height: 30,
    marginLeft:4,
    marginRight:4
  },
  text: {
    fontSize: 6,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  wrapper: {
    top: -2,
    left: 19,
    borderRadius: 12,
    backgroundColor: Color.redNonActive,
    width: 14,
    height: 12,
    padding: 2,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  frameWrapper: {
    width: 31,
    marginLeft: 4.07,
    flexDirection: "row",
    height: 32,
  },
  searchBarParent: {
    top: 36,
    width: 226,
    flexDirection: "row",
    left: 73,
    position: "absolute",
  },
  productsChild: {
    left: 310,
    width: 33,
    top: 32,
    height: 32,
    position: "absolute",
  },
  iceCream: {
    color: Color.blue,
    fontSize: FontSize.size_3xs_6,
    textAlign: "center",
  },
  categoryButton: {
    borderColor: Color.blue,
    borderWidth: 1.1,
    borderRadius: 5,
    width: 55,
    justifyContent: "center",
    borderStyle: "solid",
    backgroundColor: Color.neutral100,
    flexDirection: "row",
    height: 32,
    alignItems: "center",
    position: "absolute",
    left: 73,
  },
  iceCream1: {
    color: Color.neutral500,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  iceCreamWrapper: {
    left: 138,
    borderWidth: 1.1,
    borderRadius: 5,
    width: 55,
    justifyContent: "center",
    borderStyle: "solid",
    backgroundColor: Color.neutral100,
    flexDirection: "row",
    height: 32,
    alignItems: "center",
    position: "absolute",
    borderColor: Color.colorLightgray,
  },
  iceCreamContainer: {
    left: 203,
    borderWidth: 1.1,
    borderRadius: 5,
    width: 55,
    justifyContent: "center",
    borderStyle: "solid",
    backgroundColor: Color.neutral100,
    flexDirection: "row",
    height: 32,
    alignItems: "center",
    position: "absolute",
    borderColor: Color.colorLightgray,
  },
  iceCreamFrame: {
    left: 268,
    borderWidth: 1.1,
    borderRadius: 5,
    width: 55,
    justifyContent: "center",
    borderStyle: "solid",
    backgroundColor: Color.neutral100,
    flexDirection: "row",
    height: 32,
    alignItems: "center",
    position: "absolute",
    borderColor: Color.colorLightgray,
  },
  frameView: {
    padding: 5,
    width: 55,
    top: 78,
  },
  filterIcon: {
    width: 17,
    height: 17,
    overflow: "hidden",
  },
  iconButton1: {
    padding: 4,
    top: 32,
    width: 32,
  },
  iceCream5: {
    fontSize: 13,
    textAlign: "center",
  },
  categoryButton1: {
    left: 156,
    borderRadius: 7,
    borderWidth: 1.4,
    width: 73,
    height: 42,
    padding: 7,
    display: "none",
    top: 78,
    justifyContent: "center",
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.neutral100,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  mixueFreshIce: {
    top: 121,
    fontSize: 15,
    color: "#0d0d0e",
    width: 300,
    height: 12,
    opacity: 0.16,
    display: "flex",
    left: 72,
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  productsItem: {
    top: 29,
    width: 295,
    height: 39,
    left: 72,
    position: "absolute",
  },
  cardMenuChild: {
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.neutral100,
    bottom: "0%",
    height: "100%",
  },
  cardMenuItem: {
    height: "83.21%",
    bottom: "16.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  chocolateCookiesSmoothies: {
    top: "68.57%",
    fontSize: FontSize.size_5xs,
    width: "92.38%",
    left: "4.17%",
    color: Color.neutral100,
  },
  available: {
    display: "none",
  },
  rp1600000: {
    width: "76.19%",
    top: "85.36%",
    fontSize: FontSize.size_3xs,
    color: Color.black,
  },
  component1Icon: {
    display: "none",
  },
  mango: {
    fontSize: FontSize.size_5xs,
  },
  text1: {
    fontSize: FontSize.size_base,
  },
  chocolateCookiesSmoothiesContainer1: {
    width: "100%",
  },
  cardMenu1: {
    marginLeft: 20,
  },
  statusMenu2: {
    width: 93,
    height: 24,
  },
  cardMenuParent: {
    top: 142,
    left: 71,
  },
  cardMenuContainer: {
    top: 618,
    left: 72,
  },
  cardMenuParent1: {
    top: 734,
    left: 74,
  },
  available12: {
    display: "flex",
  },
  chocolateCookiesSmoothies9: {
    fontSize: FontSize.size_5xs,
  },
  cardMenuParent2: {
    top: 260,
    left: 69,
    height: 140,
  },
  cardMenuParent3: {
    top: 378,
    left: 70,
    width: 302,
  },
  cardMenuParent4: {
    top: 499,
    width: 301,
    left: 71,
  },
  productsChild1: {
    top: 134,
    left: 68,
    height: 710,
    width: 302,
    position: "absolute",
  },
  products: {
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

export default Products;