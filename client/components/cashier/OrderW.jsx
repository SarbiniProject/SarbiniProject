import * as React from "react";
import { Text,TextInput,StyleSheet, View,ScrollView,TouchableOpacity,Modal, Alert } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Padding, Border, FontSize } from "../../components/styles/OrderStyle";
import axios from "axios";
import { useRoute } from '@react-navigation/native';
import { useStripe } from "@stripe/stripe-react-native";
import { useNavigation } from "@react-navigation/native";
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Print} from './print.js'

const OrderW = () => {


  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [isPaymentSheetInitialized, setIsPaymentSheetInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const[products,setProducts]=useState([])
  const[total,setTotal]=useState(0)
  const[tables,setTables]=useState({})
  const[pop,setpop]=useState(false) 
  const route = useRoute();
  const idOrder = route.params?.idOrder;
  const fetchOrders= route.params?.fetchOrders

console.log('====================================');
console.log(idOrder);
console.log('====================================');


  useEffect(() => {
    const fetchData = async () =>  {
      getalltables()
    
    };
    fetchData();
  },[idOrder]);
   useEffect(()=>{
    setTimeout(() => {
      
      totall()
    }, 2000);
  },[products])



  const getalltables=()=>{
    axios.get(`http://172.20.10.3:3000/api/sarbini/ordersOne/${idOrder}`)
    .then((res)=>{
      console.log(res.data);
      setTables(res.data)
      
      setProducts(res.data.products);
     

    })
    .catch((err)=>console.error("error", err))
  }
  
  

  const totall=()=>{
    let result=0
    for(i=0;i<products.length;i++){
      result+=(products[i].price)
    }
    return setTotal(result)
  }


 ////////////////////////PAYMENT/////////////////////////////////////////////////////
 const initializePaymentSheet = async (amount) => {
  try {
    setIsLoading(true);

    const response = await axios.post('http://172.20.10.3:3000/api/sarbini/pay', {
      amount: 100* amount,
    });

    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: response.data.clientSecret,
      merchantDisplayName: 'Your Merchant Name', // Provide a valid merchant display name
    });

    if (error) {
      console.error('Error initializing payment sheet:', error);
    } else {
      setIsPaymentSheetInitialized(true);
    }
  } catch (error) {
    console.error('Error fetching client secret:', error);
  } finally {
    setIsLoading(false);
  }
};


const pay = async () => {
  try {
    if (!isPaymentSheetInitialized) {
      console.error('Payment sheet is not initialized yet.');
      return;
    }

    const { error } = await presentPaymentSheet();

    if (error) {
      console.error('Error presenting payment sheet:', error);
      Alert.alert('Error', 'Payment failed. Please try again.');
      setpop(false)
    } else {
      await axios.put(`http://172.20.10.3:3000/api/sarbini/orders3/${idOrder}`);
      Alert.alert('Success', 'Payment successful!');
      setpop(false)
      fetchOrders(tables.userId)
      navigation.navigate("Dashboard");
    }
   
    
    
  } catch (error) {
    console.error('Error during payment:', error);
  }
};


////////////////////////////////////////////////////////////////////////////////////

const payCash= async ()=>{
  await axios.put(`http://172.20.10.3:3000/api/sarbini/orders3/${idOrder}`);
  Alert.alert('Success', 'Payment successful!');
  setpop(false)
  fetchOrders(tables.userId)
  navigation.navigate("Dashboard");

}


/////////////////////////////////////////////////////////////////////////////////////////////////////


let generatePdf = async () => {
  
  const htmlString = Print({products,tables,total});
  const file = await printToFileAsync({
    html: htmlString,
    base64: false
  });

  await shareAsync(file.uri);
};




/////////////////////////////////////////////////////////////////////////////////////


  return (
    
    <View style={styles.order}>
      <View style={styles.orderDetailWrapper}>
        <Text style={styles.orderDetail}>Order Detail</Text>
      </View>
      <View style={styles.customerInput} />
      <Text style={[styles.order1, styles.editTypo]}>{`Order: `}</Text>
      <Text style={[styles.agust2023, styles.order1Position]}>
  { tables.createdAt?.slice(0, 10)}
      </Text>
      <View style={styles.frameParent}>
        <View style={styles.tableNParent}>
          <Text style={[styles.tableN, styles.editTypo]}>table N°{tables.name}</Text>
          <Image
            style={[styles.profileIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/profile.png")}
          />
        </View>
        <View style={styles.statusMenu}>
          <Text style={[styles.available, styles.noteTypo]}>waiter id :{tables.userId}</Text>
        </View>
      </View>
      {/*////////////////////////order details/////////////////////////////////*/}
      <View style={styles.cardDetailProduct}>
      <ScrollView>
      {products&&products.length > 0?products.map((el,i)=>{
        return(
          <View style={{marginBottom:20}}>
        <View>
          <View style={styles.frameContainer}>
            <View style={styles.frameContainer}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={el.image}
              />
              <Text style={[styles.chocolateCookiesSmoothies, styles.noteTypo]}>
                {el.product_name}
              </Text>
            </View>
            <View style={styles.trashParent}>
              <Text style={styles.text}>{el.price}DT</Text>
            </View>
          </View>
          <View style={styles.frameView}>
            <View style={styles.frameParent1}>
            </View>

          </View>
        </View>
        
        </View>
)
}): <>

<Text>Loading....</Text>
</>}
</ScrollView>
</View>

      {/*/////////////////////////////////////////////////////////////////////*/}
      <View style={[styles.productSelected, styles.productSelectedBorder]}>
        <View style={[styles.total1, styles.total1Position]}>
          <Text style={[styles.total2, styles.textPosition]}>total</Text>
          <View style={[styles.btnCancelParent, styles.total1Position]}>
            <TouchableOpacity  onPress={()=>{navigation.navigate("Dashboard")}}>
            <View style={[styles.btnCancel, styles.btnSpaceBlock]}>
              <Text style={[styles.cancelOrder, styles.textTypo]}>
                cancel order
              </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              !tables.satus2?Alert.alert('you cannot process the payment the table still open ') :(
              initializePaymentSheet(total),
              setpop(true))}}>
            <View style={[styles.btnCancel1, styles.btnSpaceBlock]}>
              <Text style={[styles.sendOrder, styles.textTypo]}>
                pay   order
              </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={generatePdf}>
            <View style={[styles.btnCancel2, styles.btnSpaceBlock]}>
              <Text style={[styles.sendOrder, styles.textTypo]}>
                print order
              </Text>
            </View>
            </TouchableOpacity>
          </View>
          <Text style={[styles.text5, styles.textPosition]}>{total}DT</Text>
        </View>
        <View style={styles.specifications}>
          <View
            style={[styles.specificationsChild, styles.productSelectedBorder]}
          />
               {/*////////////////////////////////////////////////////////////////////////*/}
      <View>
        <Modal 
        transparent={true}
        visible={pop}
        >
          <View style={{backgroundColor:"#000000aa",flex:1}}>
            <View style={styles.popup1}>
            <Text style={{fontSize:25,textAlign:"center"}} >Payment Method</Text>
            <Text style={{fontSize:15,textAlign:"center",marginTop:25}} > </Text>
            <Icon name="shopping-cart" size={30}  style={{marginLeft:115 }} />
            <TouchableOpacity onPress={payCash}>
            <View style={[styles.btnCancel3, styles.btnSpaceBlock]}>
             
              <Text style={[styles.sendOrder, styles.textTypo]}>
              cash payment
              </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={pay}>
            <View style={[styles.btnCancel4, styles.btnSpaceBlock]}>
              <Text style={[styles.sendOrder, styles.textTypo]}>
              cart payment
              </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{setpop(false)}}>
            <View style={[styles.btnCancel5, styles.btnSpaceBlock]}>
              <Text style={[styles.cancelOrder, styles.textTypo]}>
                cancel payment
              </Text>
            </View>
            </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      {/*//////////////////////////////////////////////////////////////////////////////////////*/}
  
          
        </View>
      </View>
    </View>
  );


};

const styles = StyleSheet.create({
  modalContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    borderWidth: 1,
    top: 0,
    backgroundColor: 'rgba(128, 128, 128, 0.55)',
  },
  modalContent: {
    height: 400,
    width: '95%',
    position: 'absolute',
    top: 165,
    left: '2.5%',
    backgroundColor: 'white',
    padding: 25,
    borderRadius:15
  },
  popup1:{
    backgroundColor:"#ffffff",
    margin:50,
    padding:40,
    borderRadius:10,
    width:"80%",
    height:320,
    position:"absolute",
    top:290,
    left:-8

  },
  modalTitle: {
    fontSize: 25,
    fontWeight: '700',
  },
  textInput: {
    borderWidth: 1,
    height: 200,
    width: 330,
    borderRadius: 5,
    backgroundColor: 'white',
    marginTop: 25,
    marginLeft: 6,
    marginBottom: 20,
    padding: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 50,
    right: 25,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 15,
    width:330,
    height:40
  },
  buttonText: {
    fontWeight: 'bold',
    color:"white",
    textAlign:"center"
  },
  editTypo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  order1Position: {
    left: 18,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  iconLayout: {
    height: 32,
    width: 32,
    overflow: "hidden",
  },
  noteTypo: {
    display: "flex",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    alignItems: "center",
  },
  pearlTypo: {
    width: 222,
    display: "flex",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    alignItems: "center",
    textAlign: "left",
    color: Color.black,
  },
  textTypo1: {
    marginLeft: 22,
    width: 118,
    textAlign: "right",
    display: "flex",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    alignItems: "center",
    color: Color.black,
  },
  productSelectedBorder: {
    borderRadius: 0.001,
    borderColor: Color.colorDarkgray,
    borderStyle: "dashed",
    position: "absolute",
  },
  total1Position: {
    left: 16,
    position: "absolute",
  },
  textPosition: {
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  btnSpaceBlock: {
    paddingVertical: Padding.p_lgi,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.subtitles,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  subPosition: {
    left: 15,
    width: 362,
    height: 19,
    position: "absolute",
  },
  orderDetail: {
    fontFamily: FontFamily.openSansBold,
    width: 207,
    height: 22,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_lg,
  },
  orderDetailWrapper: {
    top: 123,
    left: 13,
    width: 336,
    height: 53,
    position: "absolute",
  },
  customerInput: {
    top: 51,
    left: 101,
    borderWidth: 2,
    width: 268,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Color.colorLightgray,
    backgroundColor: Color.neutral100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 53,
    position: "absolute",
  },
  order1: {
    width: 92,
    height: 18,
    fontSize: FontSize.size_base,
    left: 18,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    top: 45,
  },
  agust2023: {
    top: 70,
    fontSize: 14,
    fontFamily: FontFamily.openSansRegular,
    width: 85,
    height: 18,
  },
  tableN: {
    color: Color.neutral600,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    textTransform: "capitalize",
  },
  profileIcon: {
    marginLeft: 8,
  },
  tableNParent: {
    width: 100,
    marginLeft:10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  available: {
    fontSize: FontSize.size_xs,
    color: Color.neutral100,
    width: 80,
    textAlign: "center",
    height: 16,
    justifyContent: "center",
  },
  statusMenu: {
    backgroundColor: Color.neutral600,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    marginLeft: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Border.br_5xs,
  },
  frameParent: {
    top: 62,
    left: 105,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  frameChild: {
    width: 64,
    height: 64,
    borderRadius: Border.br_5xs,
  },
  chocolateCookiesSmoothies: {
    width: 174,
    marginLeft: 6,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
  },
  frameContainer: {
    flexDirection: "row",
  },
  trashIcon: {
    borderRadius: Border.br_9xs,
  },
  text: {
    marginTop: 9,
    width: 118,
    textAlign: "right",
    fontSize: FontSize.subtitles_size,
    display: "flex",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    alignItems: "center",
    color: Color.black,
  },
  trashParent: {
    alignItems: "flex-end",
  },
  note1: {
    fontSize: FontSize.subtitles_size,
  },
  text1: {
    fontSize: FontSize.size_base,
  },
  noteTxt: {
    width: "100%",
  },
  note: {
    width: 62,
    textAlign: "left",
    color: Color.black,
  },
  putTheRed: {
    width: 289,
    marginLeft: 7,
    textAlign: "right",
    fontSize: FontSize.subtitles_size,
    color: Color.black,
  },
  noteParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  pearl: {
    fontSize: FontSize.size_base,
  },
  text2: {
    fontSize: FontSize.size_lg,
  },
  pearlParent: {
    display: "none",
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent1: {
    borderColor: Color.colorWhitesmoke,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  total: {
    fontSize: FontSize.subtitles_size,
  },
  text4: {
    fontSize: FontSize.subtitles_size,
  },
  totalParent: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  frameView: {
    marginTop: 4,
  },
  edit: {
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.size_lg,
  },
  customerInput1: {
    height: 50,
    padding: Padding.p_3xs,
    width: 362,
    borderWidth: 1,
    position:"absolute",
    top: 20,
    left:10,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.neutral100,
  },
  cardDetailProduct: {
    top: 150,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 30,
    elevation: 30,
    height: "44%",
    padding: Padding.p_5xs,
    padding:10,
    borderRadius: Border.br_3xs,
    left: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.neutral100,
    borderBlockColor:"black",
    borderWidth:1,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  total2: {
    fontFamily: FontFamily.titlesAndTotals,
    fontSize: FontSize.titlesAndTotals_size,
    color: Color.colorBlack,
    textTransform: "uppercase",
    fontWeight: "600",
    left: 0,
    textAlign: "left",
  },
  cancelOrder: {
    color: Color.actionsExtrasLightGray50,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  btnCancel: {
    top: -1.,
    backgroundColor: "#ec5a5a",
    left: -6,
  },
  btnCancel5: {
    top: 93,
    backgroundColor: "#ec5a5a",
    left: 45,
  },
  sendOrder: {
    color: Color.blueBlue900,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  btnCancel1: {
    left: 184,
    backgroundColor: Color.blueBlue200,
    top: 0,
  },
  btnCancel2: {
    marginTop:75,
    left: 90,
    backgroundColor: Color.blueBlue200,
    top: 0,
  },
  btnCancel3: {
    marginTop:25,
    left: -35,
    backgroundColor: Color.blueBlue200,
    top: 0,
  },
  btnCancel4: {
    marginTop:25,
    left: 140,
    backgroundColor: Color.blueBlue200,
    top: 0,
  },

  
  btnCancelParent: {
    top: 89,
    width: 330,
    height: 59,
  },
  text5: {
    left: 270,
    fontFamily: FontFamily.titlesAndTotals,
    fontSize: FontSize.titlesAndTotals_size,
    color: Color.colorBlack,
    textTransform: "uppercase",
    fontWeight: "600",
    textAlign: "right",
  },
  total1: {
    top: 30,
    width: 363,
    height: 148,
  },
  specificationsChild: {
    top: 92,
    borderTopWidth: 1,
    width: 395,
    height: 1,
    left: 0,
  },
  subtotal: {
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
    fontSize: FontSize.subtitles_size,
    left: 0,
    textAlign: "center",
  },
  text6: {
    left: 315,
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
    textAlign: "right",
    fontSize: FontSize.subtitles_size,
  },
  subTotal: {
    top: 0,
  },
  serviceCharge: {
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
    fontSize: FontSize.subtitles_size,
    left: 0,
    textAlign: "left",
  },
  text7: {
    left: 134,
    fontFamily: FontFamily.quicksandBold,
    textTransform: "uppercase",
    color: Color.colorBlack,
    fontSize: FontSize.subtitles_size,
    textAlign: "left",
    fontWeight: "700",
  },
  text8: {
    left: 323,
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
    textAlign: "right",
    fontSize: FontSize.subtitles_size,
  },
  subTotal1: {
    top: 45,
  },
  specifications: {
    top: 25,
    left: 1,
    width: 394,
    height: 92,
    position: "absolute",
  },
  productSelected: {
    top: 540,
    left: 12,
    borderTopLeftRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    backgroundColor: Color.actionsExtrasLightGray50,
    width: 400,
    height: 312,
    borderWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorDarkgray,
    borderStyle: "dashed",
    overflow: "hidden",
  },
  order: {
    borderRadius: 30,
    backgroundColor: "#fff9fa",
    shadowColor: "rgba(6, 6, 34, 0.4)",
    shadowRadius: 50,
    elevation: 50,
    flex: 1,
    height: 812,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    width: "100%",
  },
});

export default OrderW;
