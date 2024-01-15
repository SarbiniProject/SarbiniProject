import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Padding, Border, FontSize } from "./styles/OrderStyle";

const Order = () => {
  return (
    <View style={styles.order}>
      <View style={styles.orderDetailWrapper}>
        <Text style={styles.orderDetail}>Order Detail</Text>
      </View>
      <View style={styles.customerInput} />
      <Text style={[styles.order1, styles.editTypo]}>{`Order: `}</Text>
      <Text style={[styles.agust2023, styles.order1Position]}>
        26 Agust 2023
      </Text>
      <View style={styles.frameParent}>
        <View style={styles.tableNParent}>
          <Text style={[styles.tableN, styles.editTypo]}>Table N:</Text>
          <Image
            style={[styles.profileIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
        </View>
        <View style={styles.statusMenu}>
          <Text style={[styles.available, styles.noteTypo]}>1</Text>
        </View>
      </View>
      <View style={styles.cardDetailProduct}>
        <View>
          <View style={styles.frameContainer}>
            <View style={styles.frameContainer}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-1680.png")}
              />
              <Text style={[styles.chocolateCookiesSmoothies, styles.noteTypo]}>
                Coffe Mi-Shake
              </Text>
            </View>
            <View style={styles.trashParent}>
              <Image
                style={[styles.trashIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/trash.png")}
              />
              <Text style={styles.text}>16.000</Text>
            </View>
          </View>
          <View style={styles.frameView}>
            <View style={styles.frameParent1}>
              <View style={styles.noteParent}>
                <Text style={[styles.note, styles.noteTypo]}>
                  <Text style={styles.noteTxt}>
                    <Text style={styles.note1}>Note</Text>
                    <Text style={styles.text1}>{`: `}</Text>
                  </Text>
                </Text>
                <Text style={[styles.putTheRed, styles.noteTypo]}>
                  Put the red beans on top!
                </Text>
              </View>
              <View style={styles.pearlParent}>
                <Text style={[styles.pearl, styles.pearlTypo]}>Pearl</Text>
                <Text style={[styles.text2, styles.textTypo1]}>+6.000</Text>
              </View>
              <View style={styles.pearlParent}>
                <Text style={[styles.pearl, styles.pearlTypo]}>Red Beans</Text>
                <Text style={[styles.text2, styles.textTypo1]}>+5.000</Text>
              </View>
            </View>
            <View style={styles.totalParent}>
              <Text style={[styles.total, styles.pearlTypo]}>Total</Text>
              <Text style={[styles.text4, styles.textTypo1]}>27.000</Text>
            </View>
          </View>
        </View>
        <View style={styles.customerInput1}>
          <View style={styles.tableNParent}>
            <View style={styles.tableNParent}>
              <Text style={[styles.edit, styles.editTypo]}>Add Note</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.productSelected, styles.productSelectedBorder]}>
        <View style={[styles.total1, styles.total1Position]}>
          <Text style={[styles.total2, styles.textPosition]}>total</Text>
          <View style={[styles.btnCancelParent, styles.total1Position]}>
            <View style={[styles.btnCancel, styles.btnSpaceBlock]}>
              <Text style={[styles.cancelOrder, styles.textTypo]}>
                cancel order
              </Text>
            </View>
            <View style={[styles.btnCancel1, styles.btnSpaceBlock]}>
              <Text style={[styles.sendOrder, styles.textTypo]}>
                send order
              </Text>
            </View>
          </View>
          <Text style={[styles.text5, styles.textPosition]}>$38,50</Text>
        </View>
        <View style={styles.specifications}>
          <View
            style={[styles.specificationsChild, styles.productSelectedBorder]}
          />
          <View style={[styles.subTotal, styles.subPosition]}>
            <Text style={[styles.subtotal, styles.textTypo]}>subtotal</Text>
            <Text style={[styles.text6, styles.textTypo]}>$35,00</Text>
          </View>
          <View style={[styles.subTotal1, styles.subPosition]}>
            <Text style={[styles.serviceCharge, styles.textTypo]}>
              service charge
            </Text>
            <Text style={[styles.text7, styles.textPosition]}>10%</Text>
            <Text style={[styles.text8, styles.textTypo]}>£3,50</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    height: 19,
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
    height: 16,
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
    height: 14,
  },
  tableN: {
    color: Color.neutral600,
    textAlign: "center",
    fontSize: FontSize.size_lg,
  },
  profileIcon: {
    marginLeft: 8,
  },
  tableNParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  available: {
    fontSize: FontSize.size_xs,
    color: Color.neutral100,
    width: 77,
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
    marginTop: 8,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.neutral100,
  },
  cardDetailProduct: {
    top: 168,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 30,
    elevation: 30,
    height: 209,
    padding: Padding.p_5xs,
    borderRadius: Border.br_3xs,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.neutral100,
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
    top: 1,
    backgroundColor: "#ec5a5a",
    left: 0,
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
    top: 136,
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
    top: 507,
    left: -12,
    borderTopLeftRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    backgroundColor: Color.actionsExtrasLightGray50,
    width: 386,
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

export default Order;
