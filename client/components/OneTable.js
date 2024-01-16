import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";

const OneTable = () => {
  return (
    <View style={styles.oneTable}>
      <View style={styles.searchBarParent}>
        <View style={styles.searchBar}>
          <View style={styles.groupChildPosition}>
            <View style={[styles.groupChild, styles.groupChildBorder]} />
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/frame-1260.png")}
            />
            <Text style={[styles.searchItem, styles.textTypo]}>
              Search item
            </Text>
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
              <Text style={[styles.text, styles.textTypo]}>3</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.oneTableChild, styles.iconButton1Position]}
        contentFit="cover"
        source={require("../assets/ellipse-455.png")}
      />
      <View style={[styles.iconButton1, styles.iconButton1Position]}>
        <Image
          style={styles.filterIcon}
          contentFit="cover"
          source={require("../assets/filter.png")}
        />
      </View>
      <View style={styles.oneTableItem} />
      <View style={styles.oneTableItem} />
      <View style={[styles.component25, styles.component25Layout]}>
        <View style={styles.noWrapper}>
          <Text style={[styles.no, styles.noFlexBox]}>No</Text>
        </View>
        <View style={styles.orderIdWrapper}>
          <Text style={[styles.orderId, styles.orderIdFlexBox]}>Order ID</Text>
        </View>
        <View style={styles.priceWrapper}>
          <Text style={[styles.orderId, styles.orderIdFlexBox]}>Price</Text>
        </View>
        <View style={[styles.statusWrapper, styles.wrapperLayout]}>
          <Text style={[styles.status, styles.menu5Layout]}>Status</Text>
        </View>
      </View>
      <View style={[styles.component24Parent, styles.component25Layout]}>
        <View style={[styles.component24, styles.componentLayout]}>
          <View style={styles.noWrapper}>
            <Text style={[styles.no1, styles.menuTypo]}>1</Text>
          </View>
          <View style={styles.orderIdWrapper}>
            <Text style={[styles.m127928, styles.menuTypo]}>M127345</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Maharani</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>
              2x Milk Tea Pearl
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={[styles.m127928, styles.menuTypo]}>46.000</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Dine In</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <View style={[styles.statusOrder, styles.statusFlexBox]}>
              <Text style={[styles.onProcess, styles.processFlexBox]}>
                On Process
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.component23, styles.componentLayout]}>
          <View style={styles.noWrapper}>
            <Text style={[styles.no2, styles.menuTypo]}>2</Text>
          </View>
          <View style={styles.orderIdWrapper}>
            <Text style={[styles.m127928, styles.menuTypo]}>M127928</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Aditya</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.menu1, styles.menuTypo]}>1x Sundae Oreo</Text>
          </View>
          <View style={[styles.priceFrame, styles.frameFlexBox]}>
            <Text style={[styles.m127928, styles.menuTypo]}>20.000</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Dine In</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <View style={[styles.statusOrder, styles.statusFlexBox]}>
              <Text style={[styles.onProcess, styles.processFlexBox]}>
                On Process
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.component23, styles.componentLayout]}>
          <View style={styles.noWrapper}>
            <Text style={[styles.no2, styles.menuTypo]}>3</Text>
          </View>
          <View style={styles.orderIdWrapper}>
            <Text style={[styles.m127928, styles.menuTypo]}>M127758</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Mahrus Sadar</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>2x Fruit Tea</Text>
          </View>
          <View style={[styles.priceFrame, styles.frameFlexBox]}>
            <Text style={[styles.m127928, styles.menuTypo]}>40.000</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Take Away</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <View style={[styles.statusOrder2, styles.statusFlexBox]}>
              <Text style={styles.complete}>Complete</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component24, styles.componentLayout]}>
          <View style={styles.noWrapper}>
            <Text style={[styles.no2, styles.menuTypo]}>4</Text>
          </View>
          <View style={styles.orderIdWrapper}>
            <Text style={[styles.m127928, styles.menuTypo]}>M127967</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Wayan Roney</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>
              2x Milk Tea Pearl
            </Text>
          </View>
          <View style={[styles.priceFrame, styles.frameFlexBox]}>
            <Text style={[styles.m127928, styles.menuTypo]}>46.000</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>GoFood</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <View style={[styles.statusOrder2, styles.statusFlexBox]}>
              <Text style={styles.complete}>Complete</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component23, styles.componentLayout]}>
          <View style={styles.noWrapper}>
            <Text style={[styles.no2, styles.menuTypo]}>5</Text>
          </View>
          <View style={styles.orderIdWrapper}>
            <Text style={[styles.m127928, styles.menuTypo]}>M127545</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>
              Darus Sipamang
            </Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.menu1, styles.menuTypo]}>1x Sundae Oreo</Text>
          </View>
          <View style={[styles.priceFrame, styles.frameFlexBox]}>
            <Text style={[styles.m127928, styles.menuTypo]}>20.000</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>ShopeeFood</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <View style={[styles.statusOrder2, styles.statusFlexBox]}>
              <Text style={styles.complete}>Complete</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component24, styles.componentLayout]}>
          <View style={styles.noWrapper}>
            <Text style={[styles.no2, styles.menuTypo]}>6</Text>
          </View>
          <View style={styles.orderIdWrapper}>
            <Text style={[styles.m127928, styles.menuTypo]}>M127747</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Dian Sari</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.menu5, styles.menu5FlexBox]}>
              2x Milk Tea Pearl
            </Text>
          </View>
          <View style={[styles.priceFrame, styles.frameFlexBox]}>
            <Text style={[styles.m127928, styles.menuTypo]}>46.000</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Dine In</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <View style={[styles.statusOrder2, styles.statusFlexBox]}>
              <Text style={styles.complete}>Complete</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component23, styles.componentLayout]}>
          <View style={styles.noWrapper}>
            <Text style={[styles.no2, styles.menuTypo]}>7</Text>
          </View>
          <View style={styles.orderIdWrapper}>
            <Text style={[styles.m127928, styles.menuTypo]}>M127745</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Satiyem</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.menu1, styles.menuTypo]}>1x Sundae Oreo</Text>
          </View>
          <View style={[styles.priceFrame, styles.frameFlexBox]}>
            <Text style={[styles.m127928, styles.menuTypo]}>20.000</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Dine In</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <View style={[styles.statusOrder2, styles.statusFlexBox]}>
              <Text style={styles.complete}>Complete</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component24, styles.componentLayout]}>
          <View style={styles.noWrapper}>
            <Text style={[styles.no2, styles.menuTypo]}>8</Text>
          </View>
          <View style={styles.orderIdWrapper}>
            <Text style={[styles.m127928, styles.menuTypo]}>M127865</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Ahmad Basri</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>
              2x Milk Tea Pearl
            </Text>
          </View>
          <View style={[styles.priceFrame, styles.frameFlexBox]}>
            <Text style={[styles.m127928, styles.menuTypo]}>46.000</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Dine In</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <View style={[styles.statusOrder2, styles.statusFlexBox]}>
              <Text style={styles.complete}>Complete</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component23, styles.componentLayout]}>
          <View style={styles.noWrapper}>
            <Text style={[styles.no2, styles.menuTypo]}>9</Text>
          </View>
          <View style={styles.orderIdWrapper}>
            <Text style={[styles.m127928, styles.menuTypo]}>M127435</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>
              Imron Rodyadi
            </Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.menu1, styles.menuTypo]}>1x Americano</Text>
          </View>
          <View style={[styles.priceFrame, styles.frameFlexBox]}>
            <Text style={[styles.m127928, styles.menuTypo]}>14.000</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Dine In</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <View style={[styles.statusOrder2, styles.statusFlexBox]}>
              <Text style={styles.complete}>Complete</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component24, styles.componentLayout]}>
          <View style={styles.noWrapper}>
            <Text style={[styles.no2, styles.menuTypo]}>10</Text>
          </View>
          <View style={styles.orderIdWrapper}>
            <Text style={[styles.m127928, styles.menuTypo]}>M127635</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>
              Andreas Rivaldo
            </Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>
              1x Cappuccino
            </Text>
          </View>
          <View style={[styles.priceFrame, styles.frameFlexBox]}>
            <Text style={[styles.m127928, styles.menuTypo]}>16.000</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>ShopeeFood</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <View style={[styles.statusOrder2, styles.statusFlexBox]}>
              <Text style={styles.complete}>Complete</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component23, styles.componentLayout]}>
          <View style={styles.noWrapper}>
            <Text style={[styles.no2, styles.menuTypo]}>11</Text>
          </View>
          <View style={styles.orderIdWrapper}>
            <Text style={[styles.m127928, styles.menuTypo]}>M127545</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Putra Ajis</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.menu1, styles.menuTypo]}>1x Orange Tea</Text>
          </View>
          <View style={[styles.priceFrame, styles.frameFlexBox]}>
            <Text style={[styles.m127928, styles.menuTypo]}>14.000</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Dine In</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <View style={[styles.statusOrder2, styles.statusFlexBox]}>
              <Text style={styles.complete}>Complete</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component24, styles.componentLayout]}>
          <View style={styles.noWrapper}>
            <Text style={[styles.no2, styles.menuTypo]}>12</Text>
          </View>
          <View style={styles.orderIdWrapper}>
            <Text style={[styles.m127928, styles.menuTypo]}>M127534</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>
              Izza Ramadhan
            </Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>2x Ice Cream</Text>
          </View>
          <View style={[styles.priceFrame, styles.frameFlexBox]}>
            <Text style={[styles.m127928, styles.menuTypo]}>12.000</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Dine In</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <View style={[styles.statusOrder11, styles.statusFlexBox]}>
              <Text style={[styles.onProcess, styles.processFlexBox]}>
                Canceled
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.component23, styles.componentLayout]}>
          <View style={styles.noWrapper}>
            <Text style={[styles.no2, styles.menuTypo]}>13</Text>
          </View>
          <View style={styles.orderIdWrapper}>
            <Text style={[styles.m127928, styles.menuTypo]}>M127809</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Umron Tamam</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.menu1, styles.menuTypo]}>
              1x Black Current
            </Text>
          </View>
          <View style={[styles.priceFrame, styles.frameFlexBox]}>
            <Text style={[styles.m127928, styles.menuTypo]}>16.000</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>Traveloka</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <View style={[styles.statusOrder2, styles.statusFlexBox]}>
              <Text style={styles.complete}>Complete</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component24, styles.componentLayout]}>
          <View style={styles.noWrapper}>
            <Text style={[styles.no2, styles.menuTypo]}>14</Text>
          </View>
          <View style={styles.orderIdWrapper}>
            <Text style={[styles.m127928, styles.menuTypo]}>M127353</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>
              Jessica Milla
            </Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.customer, styles.menuTypo]}>
              2x Milk Tea Fruit
            </Text>
          </View>
          <View style={[styles.priceFrame, styles.frameFlexBox]}>
            <Text style={[styles.m127928, styles.menuTypo]}>32.000</Text>
          </View>
          <View style={[styles.customerWrapper, styles.menu5FlexBox]}>
            <Text style={[styles.menu5, styles.menu5FlexBox]}>Pick Up</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <View style={[styles.statusOrder2, styles.statusFlexBox]}>
              <Text style={styles.complete}>Complete</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component24, styles.componentLayout]}>
          <View style={styles.noWrapper}>
            <Text style={[styles.no2, styles.menuTypo]}>15</Text>
          </View>
          <View style={styles.orderIdWrapper}>
            <Text style={[styles.m127928, styles.menuTypo]}>M127353</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <Text
              style={[styles.customer, styles.menuTypo]}
            >{`Michelle `}</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <Text style={[styles.customer, styles.menuTypo]}>
              1x Coffee Pearl
            </Text>
          </View>
          <View style={[styles.priceFrame, styles.frameFlexBox]}>
            <Text style={[styles.m127928, styles.menuTypo]}>16.000</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <Text style={[styles.customer, styles.menuTypo]}>Pick Up</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <View style={[styles.statusOrder2, styles.statusFlexBox]}>
              <Text style={styles.complete}>Complete</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component24, styles.componentLayout]}>
          <View style={styles.noWrapper}>
            <Text style={[styles.no2, styles.menuTypo]}>16</Text>
          </View>
          <View style={styles.orderIdWrapper}>
            <Text style={[styles.m127928, styles.menuTypo]}>M127353</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <Text style={[styles.customer, styles.menuTypo]}>Sari Novi</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <Text style={[styles.customer, styles.menuTypo]}>1x Milk Tea</Text>
          </View>
          <View style={[styles.priceFrame, styles.frameFlexBox]}>
            <Text style={[styles.m127928, styles.menuTypo]}>18.000</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <Text style={[styles.customer, styles.menuTypo]}>Pick Up</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <View style={[styles.statusOrder2, styles.statusFlexBox]}>
              <Text style={styles.complete}>Complete</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component24, styles.componentLayout]}>
          <View style={styles.noWrapper}>
            <Text style={[styles.no2, styles.menuTypo]}>17</Text>
          </View>
          <View style={styles.orderIdWrapper}>
            <Text style={[styles.m127928, styles.menuTypo]}>M127353</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <Text style={[styles.customer, styles.menuTypo]}>{`Mega `}</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <Text style={[styles.customer, styles.menuTypo]}>3x Fresh Tea</Text>
          </View>
          <View style={[styles.priceFrame, styles.frameFlexBox]}>
            <Text style={[styles.m127928, styles.menuTypo]}>12.000</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <Text style={[styles.customer, styles.menuTypo]}>Pick Up</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <View style={[styles.statusOrder2, styles.statusFlexBox]}>
              <Text style={styles.complete}>Complete</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component24, styles.componentLayout]}>
          <View style={styles.noWrapper}>
            <Text style={[styles.no2, styles.menuTypo]}>18</Text>
          </View>
          <View style={styles.orderIdWrapper}>
            <Text style={[styles.m127928, styles.menuTypo]}>M127353</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <Text style={[styles.customer, styles.menuTypo]}>Aurora</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <Text style={[styles.customer, styles.menuTypo]}>1x Ice Cone</Text>
          </View>
          <View style={[styles.priceFrame, styles.frameFlexBox]}>
            <Text style={[styles.m127928, styles.menuTypo]}>14.000</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <Text style={[styles.customer, styles.menuTypo]}>Pick Up</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperLayout]}>
            <View style={[styles.statusOrder2, styles.statusFlexBox]}>
              <Text style={styles.complete}>Complete</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.statusOrder18, styles.statusFlexBox]}>
        <Text style={[styles.onProcess2, styles.processFlexBox]}>
          + New Order
        </Text>
      </View>
      <View style={[styles.frameParent, styles.frameFlexBox]}>
        <View style={styles.tableNWrapper}>
          <Text style={[styles.tableN, styles.textTypo]}>Table N:</Text>
        </View>
        <View style={[styles.statusMenu, styles.statusFlexBox]}>
          <Text style={[styles.available, styles.noFlexBox]}>1</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildBorder: {
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  textTypo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  iconButton1Position: {
    top: 39,
    height: 32,
    position: "absolute",
  },
  component25Layout: {
    width: 365,
    position: "absolute",
  },
  noFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  orderIdFlexBox: {
    width: 96,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  wrapperLayout: {
    width: 144,
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  menu5Layout: {
    width: 128,
    textAlign: "left",
  },
  componentLayout: {
    height: 41,
    width: 841,
    flexDirection: "row",
  },
  menuTypo: {
    color: Color.neutral900,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_base,
  },
  menu5FlexBox: {
    display: "none",
    alignItems: "center",
  },
  statusFlexBox: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  processFlexBox: {
    height: 19,
    width: 76,
    textAlign: "center",
    display: "flex",
    color: Color.white,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  frameFlexBox: {
    width: 112,
    alignItems: "center",
    flexDirection: "row",
  },
  groupChild: {
    borderWidth: 0.8,
    borderRadius: 4,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupItem: {
    height: "90%",
    width: "15%",
    top: "5%",
    right: "84.17%",
    bottom: "5%",
    left: "0.83%",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 4,
    position: "absolute",
    overflow: "hidden",
  },
  searchItem: {
    height: "48.33%",
    width: "74.44%",
    top: "26.67%",
    left: "18.89%",
    fontSize: 7,
    color: Color.neutral500,
    textAlign: "left",
    position: "absolute",
  },
  groupChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
    color: "#fff",
    textAlign: "left",
  },
  wrapper: {
    top: -2,
    left: 19,
    borderRadius: 12,
    width: 9,
    height: 9,
    padding: 3,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.redNonActive,
    position: "absolute",
  },
  frameWrapper: {
    width: 31,
    marginLeft: 4.07,
    height: 32,
    flexDirection: "row",
  },
  searchBarParent: {
    top: 43,
    left: 68,
    width: 226,
    flexDirection: "row",
    position: "absolute",
  },
  oneTableChild: {
    left: 289,
    width: 33,
  },
  filterIcon: {
    width: 17,
    height: 17,
    overflow: "hidden",
  },
  iconButton1: {
    left: 328,
    borderRadius: 5,
    borderWidth: 1.1,
    width: 32,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.white,
    flexDirection: "row",
  },
  oneTableItem: {
    top: 36,
    left: 67,
    width: 295,
    height: 39,
    position: "absolute",
  },
  no: {
    width: 28,
    color: Color.white,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  noWrapper: {
    width: 44,
    padding: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  orderId: {
    color: Color.white,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  orderIdWrapper: {
    width: 109,
    padding: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  priceWrapper: {
    width: 113,
    padding: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  status: {
    display: "flex",
    alignItems: "center",
    color: Color.white,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  statusWrapper: {
    alignItems: "center",
  },
  component25: {
    top: 141,
    left: 4,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 42,
    backgroundColor: Color.redNonActive,
    flexDirection: "row",
  },
  no1: {
    opacity: 0.1,
    textAlign: "center",
    width: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  m127928: {
    width: 96,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  customer: {
    width: 128,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  customerWrapper: {
    width: 144,
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  priceContainer: {
    padding: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  onProcess: {
    fontSize: FontSize.size_sm,
    height: 19,
  },
  statusOrder: {
    backgroundColor: Color.blueNonActive,
  },
  component24: {
    backgroundColor: Color.greyF5,
  },
  no2: {
    textAlign: "center",
    width: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menu1: {
    textAlign: "left",
    flex: 1,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_base,
  },
  priceFrame: {
    padding: Padding.p_5xs,
  },
  component23: {
    backgroundColor: Color.white,
    height: 41,
    width: 841,
  },
  complete: {
    width: 76,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    display: "flex",
    color: Color.white,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  statusOrder2: {
    backgroundColor: Color.green,
  },
  menu5: {
    color: Color.neutral900,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_base,
    width: 128,
    textAlign: "left",
  },
  statusOrder11: {
    backgroundColor: Color.redNonActive,
  },
  component24Parent: {
    top: 189,
    left: -3,
    height: 571,
  },
  onProcess2: {
    fontSize: 10,
  },
  statusOrder18: {
    top: 105,
    left: 276,
    backgroundColor: Color.neutral700,
    position: "absolute",
  },
  tableN: {
    color: Color.neutral600,
    textAlign: "center",
    fontSize: FontSize.size_lg,
  },
  tableNWrapper: {
    width: 62,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  available: {
    fontSize: FontSize.size_xs,
    width: 77,
    height: 16,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    justifyContent: "center",
  },
  statusMenu: {
    backgroundColor: Color.neutral600,
    marginLeft: 15,
    width: 28,
    height: 17,
  },
  frameParent: {
    top: 96,
    left: 11,
    height: 25,
    paddingTop: 12,
    paddingBottom: 2,
    position: "absolute",
  },
  oneTable: {
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
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default OneTable;
