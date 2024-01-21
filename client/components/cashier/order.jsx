import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { Image } from "expo-image"; // Correct this to ImageBackground
import { Color, FontSize, FontFamily, Padding, Border } from "./style/orderStyle";
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { html2 } from './print.js';
import { useStripe } from "@stripe/stripe-react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import axios from 'axios';




import  { useRef } from 'react';


const Order = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [isPaymentSheetInitialized, setIsPaymentSheetInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const userId=2


  const initializePaymentSheet = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post('http://172.20.10.3:3000/api/sarbini/pay', {
        amount: 2000,
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
      } else {

        Alert.alert('Success', 'Payment successful!');
      }
      await axios.put(`http://172.20.10.3:3000/api/sarbini/orders3/${userId}`);

      navigation.navigate("Dashboard");
    } catch (error) {
      console.error('Error during payment:', error);
    }
  };


  // console.log('initPaymentSheet:', initPaymentSheet);
  // console.log('clientSecret:', clientSecret);
  // console.log('isInitialized:', isInitialized);




 

  let generatePdf = async () => {
    const file = await printToFileAsync({
      html: html2,
      base64: false
    });

    await shareAsync(file.uri);
  };


  
  

  

  
  return (
    <View style={styles.order}>
      <View style={styles.slideUpMenu}>
        <View style={styles.topOrder}>
          <View style={styles.guessTable}>
            <View style={[styles.table, styles.tableLayout1]}>
              <View style={[styles.table1, styles.tableLayout]}>
                <View style={[styles.tableParent, styles.tableLayout]}>
                  <Text style={[styles.table2, styles.text2Clr]}>table:</Text>
                  <Image
                    style={styles.smallTableIcon}
                    contentFit="cover"
                    source={require("../../assets/small-table-icon.png")}
                  />
                </View>
              </View>
              <Text style={[styles.text, styles.textTypo1]}>1</Text>
            </View>
            <View style={[styles.guess, styles.tableLayout1]}>
              <Image
                style={styles.icons}
                contentFit="cover"
                source={require("../../assets/icons.png")}
              />
              <Text style={[styles.waiter, styles.text2Clr]}>waiter:</Text>
              <Text style={[styles.text1, styles.textTypo1]}>2</Text>
            </View>
          </View>
          <Text style={[styles.order1, styles.textTypo]}>order #</Text>
          <Text style={[styles.text2, styles.textFlexBox]}>12564878</Text>
          <View style={[styles.topOrderChild, styles.childLayout]} />
        </View>
        <View style={styles.productSelected}>
          <View style={styles.total}>
            <Text style={[styles.total1, styles.textClr]}>total</Text>
            <View style={[styles.btnCancelWrapper, styles.btnLayout1]}>
              <View style={[styles.btnCancel, styles.btnSpaceBlock]}>
              {isLoading ? (
        <Text>Loading...</Text>
      ) : (<>
              <TouchableOpacity onPress={pay} disabled={!isPaymentSheetInitialized}>
                <Text style={[styles.payOrder, styles.orderTypo]}>
                  pay cart
                  </Text>  
                </TouchableOpacity></>
      )}
      <TouchableOpacity onPress={initializePaymentSheet}>
        <Text>Initialize Payment Sheet</Text>
      </TouchableOpacity>
              </View>
            </View>
            
            <View style={[styles.btnCancelContainer, styles.btnLayout]}>
      <TouchableOpacity style={[styles.btnCancel1, styles.btnLayout]} onPress={generatePdf}>
        <Text style={[styles.payOrder, styles.orderTypo]}>
          Print Order
        </Text>
      </TouchableOpacity>
    </View>
            <Text style={[styles.text3, styles.textClr]}>$38,50</Text>
          </View>
          <View style={[styles.specifications, styles.itemsSelectedLayout]}>
            <View style={[styles.specificationsChild, styles.childLayout]} />
            <View style={[styles.subTotal, styles.subPosition]}>
              <Text style={[styles.subtotal, styles.textClr]}>subtotal</Text>
              <Text style={[styles.text4, styles.textClr]}>$35,00</Text>
            </View>
            <View style={[styles.subTotal1, styles.subPosition]}>
              <Text style={[styles.serviceCharge, styles.textClr]}>
                service charge
              </Text>
              <Text style={[styles.text5, styles.textClr]}>10%</Text>
              <Text style={[styles.text6, styles.textClr]}>£3,50</Text>
            </View>
          </View>
        </View>
        <View style={[styles.itemsSelected, styles.itemsSelectedLayout]}>
          <View style={[styles.productSelected1, styles.productLayout]}>
            <View style={[styles.productSelected2, styles.productBg]} />
            <View
              style={[styles.productSelectedInner, styles.groupParentLayout]}
            >
              <View style={[styles.groupParent, styles.groupParentLayout]}>
                <View
                  style={[styles.chickenWingsParent, styles.parentPosition]}
                >
                  <Text style={[styles.serviceCharge, styles.textClr]}>
                    chicken wings
                  </Text>
                  <Text style={[styles.text7, styles.textClr]}>$20</Text>
                </View>
                <Image
                  style={styles.productSelectedIcon}
                  contentFit="cover"
                  source={require("../../assets/productselected.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.productSelected3, styles.productLayout]}>
            <View style={[styles.productSelected4, styles.productBg]} />
            <View
              style={[styles.productSelectedChild, styles.groupContainerLayout]}
            >
              <View
                style={[styles.groupContainer, styles.groupContainerLayout]}
              >
                <View style={[styles.summerSaladParent, styles.parentPosition]}>
                  <Text style={[styles.serviceCharge, styles.textClr]}>
                    summer salad
                  </Text>
                  <Text style={[styles.text7, styles.textClr]}>$10</Text>
                </View>
                <Image
                  style={styles.productSelectedIcon}
                  contentFit="cover"
                  source={require("../../assets/productselected1.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity  onPress={()=>{navigation.navigate("Dashboard");}}>
        <View style={[styles.btnCancel2, styles.btnSpaceBlock]}>
        
          <Text style={[styles.cancelOrder, styles.orderTypo]}>
            cancel order
          </Text>
        </View></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tableLayout1: {
    height: 29,
    position: "absolute",
  },
  tableLayout: {
    height: 19,
    width: 73,
    left: 0,
    position: "absolute",
  },
  text2Clr: {
    color: Color.greenGreen600,
    textTransform: "uppercase",
    position: "absolute",
  },
  textTypo1: {
    color: Color.salmonSalmon,
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    // fontFamily: FontFamily.subtitles,
    fontWeight: "500",
    textTransform: "uppercase",
    top: 0,
    position: "absolute",
  },
  textTypo: {
    // fontFamily: FontFamily.titlesAndTotals,
    fontWeight: "600",
    fontSize: FontSize.titlesAndTotals_size,
  },
  textFlexBox: {
    textAlign: "right",
    top: 0,
  },
  childLayout: {
    height: 1,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorDarkgray,
    borderStyle: "dashed",
    width: 395,
    position: "absolute",
  },
  textClr: {
    color: Color.colorBlack,
    textTransform: "uppercase",
    position: "absolute",
  },
  btnLayout1: {
    width: 123,
    height: 58,
    position: "absolute",
  },
  btnSpaceBlock: {
    paddingVertical: Padding.p_lgi,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
  },
  orderTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    // fontFamily: FontFamily.subtitles,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  btnLayout: {
    width: 132,
    position: "absolute",
  },
  itemsSelectedLayout: {
    width: 394,
    position: "absolute",
  },
  subPosition: {
    left: 15,
    height: 19,
    position: "absolute",
  },
  productLayout: {
    height: 84,
    width: 394,
    left: 0,
  },
  productBg: {
    backgroundColor: Color.actionsExtrasLightBueBackground,
    borderRadius: Border.br_sm,
    position: "absolute",
    overflow: "hidden",
  },
  groupParentLayout: {
    height: 66,
    width: 199,
    position: "absolute",
  },
  parentPosition: {
    height: 64,
    left: 83,
    top: 2,
    position: "absolute",
  },
  groupContainerLayout: {
    width: 197,
    height: 66,
    position: "absolute",
  },
  table2: {
    textAlign: "left",
    // fontFamily: FontFamily.subtitles,
    fontWeight: "500",
    fontSize: FontSize.subtitles_size,
    left: 24,
    textTransform: "uppercase",
    top: 0,
  },
  smallTableIcon: {
    width: 17,
    height: 17,
    left: 0,
    top: 1,
    position: "absolute",
    overflow: "hidden",
  },
  tableParent: {
    top: 0,
  },
  table1: {
    top: 5,
  },
  text: {
    left: 80,
  },
  table: {
    left: 275,
    width: 89,
    top: 1,
  },
  icons: {
    top: 7,
    width: 20,
    height: 16,
    left: 0,
    position: "absolute",
  },
  waiter: {
    top: 6,
    textAlign: "center",
    // fontFamily: FontFamily.subtitles,
    fontWeight: "500",
    fontSize: FontSize.subtitles_size,
    left: 24,
    textTransform: "uppercase",
  },
  text1: {
    left: 88,
  },
  guess: {
    width: 101,
    top: 0,
    left: 0,
  },
  guessTable: {
    top: 48,
    left: 6,
    width: 364,
    height: 30,
    position: "absolute",
  },
  order1: {
    width: 139,
    textAlign: "center",
    color: Color.greenGreen600,
    textTransform: "uppercase",
    position: "absolute",
    top: 0,
    left: 0,
  },
  text2: {
    left: 230,
    width: 140,
    fontFamily: "Quicksand-SemiBold",
    fontWeight: "600",
    fontSize: FontSize.titlesAndTotals_size,
    color: Color.greenGreen600,
    textTransform: "uppercase",
    position: "absolute",
  },
  topOrderChild: {
    top: 96,
    left: 1,
  },
  topOrder: {
    top: 21,
    left: 21,
    height: 96,
    width: 395,
    position: "absolute",
  },
  total1: {
    fontFamily: "Quicksand-SemiBold",
    fontWeight: "600",
    fontSize: FontSize.titlesAndTotals_size,
    textAlign: "left",
    top: 0,
    left: 0,
  },
  payOrder: {
    color: Color.blueBlue900,
  },
  btnCancel: {
    backgroundColor: Color.blueBlue200,
    paddingVertical: Padding.p_lgi,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
    height: 58,
    width: 123,
    position: "absolute",
  },
  btnCancelWrapper: {
    left: 194,
    height: 58,
    top: 56,
  },
  btnCancel1: {
    paddingVertical: Padding.p_lgi,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.blueBlue200,
    top: 0,
    left: 0,
  },
  btnCancelContainer: {
    left: 10,
    height: 58,
    top: 56,
  },
  text3: {
    left: 243,
    textAlign: "right",
    top: 0,
    fontFamily: "Quicksand-SemiBold",
    fontWeight: "600",
    fontSize: FontSize.titlesAndTotals_size,
  },
  total: {
    top: 136,
    left: 16,
    width: 336,
    height: 114,
    position: "absolute",
  },
  specificationsChild: {
    top: 92,
    left: 0,
  },
  subtotal: {
    textAlign: "center",
    // fontFamily: FontFamily.subtitles,
    fontWeight: "500",
    fontSize: FontSize.subtitles_size,
    top: 0,
    left: 0,
  },
  text4: {
    left: 273,
    textAlign: "right",
    top: 0,
    fontFamily:"Quicksand-Medium",
    fontWeight: "500",
    fontSize: FontSize.subtitles_size,
  },
  subTotal: {
    width: 320,
    top: 0,
  },
  serviceCharge: {
    textAlign: "left",
    fontFamily: "Quicksand-Medium",
    fontWeight: "500",
    fontSize: FontSize.subtitles_size,
    top: 0,
    left: 0,
  },
  text5: {
    left: 134,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    textAlign: "left",
    fontSize: FontSize.subtitles_size,
    color: Color.colorBlack,
    top: 0,
  },
  text6: {
    left: 278,
    textAlign: "right",
    top: 0,
    fontFamily: "Quicksand-Medium",
    fontWeight: "500",
    fontSize: FontSize.subtitles_size,
  },
  subTotal1: {
    top: 45,
    width: 317,
  },
  specifications: {
    top: 25,
    height: 92,
    left: 1,
  },
  productSelected: {
    top: 339,
    left: 32,
    borderTopLeftRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    backgroundColor: Color.actionsExtrasLightGray50,
    borderWidth: 1,
    width: 359,
    height: 327,
    borderRadius: 0.001,
    borderColor: Color.colorDarkgray,
    borderStyle: "dashed",
    position: "absolute",
    overflow: "hidden",
  },
  productSelected2: {
    height: 84,
    width: 394,
    left: 0,
    top: 0,
  },
  text7: {
    top: 26,
    fontFamily: FontFamily.titlesAndTotals,
    fontWeight: "600",
    fontSize: FontSize.titlesAndTotals_size,
    textAlign: "left",
    left: 0,
  },
  chickenWingsParent: {
    width: 116,
  },
  productSelectedIcon: {
    borderRadius: Border.br_6xs,
    width: 65,
    height: 63,
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupParent: {
    top: 0,
    left: 0,
  },
  productSelectedInner: {
    top: 11,
    left: 15,
  },
  productSelected1: {
    top: 0,
    position: "absolute",
  },
  productSelected4: {
    top: -6,
    left: -9,
    width: 403,
    height: 83,
  },
  summerSaladParent: {
    width: 114,
  },
  groupContainer: {
    top: 0,
    left: 0,
  },
  productSelectedChild: {
    top: 11,
    left: 15,
  },
  productSelected3: {
    top: 100,
    position: "absolute",
  },
  itemsSelected: {
    top: 148,
    left: 13,
    height: 184,
  },
  cancelOrder: {
    color: Color.actionsExtrasLightGray50,
  },
  btnCancel2: {
    top: 598,
    left: 135,
    backgroundColor: "#ec5a5a",
    paddingVertical: Padding.p_lgi,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  slideUpMenu: {
    top: 40,
    left: -23,
    backgroundColor: "#fff",
    width: 407,
    height: 714,
    position: "absolute",
    overflow: "hidden",
  },
  order: {
    borderRadius: 30,
    backgroundColor: "#fff9fa",
    shadowColor: "rgba(6, 6, 34, 0.4)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Order;
