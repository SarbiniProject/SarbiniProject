import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Padding, Border, FontSize } from "./styles/TablesStyle";

const Tables = () => {
  // const newLocal = <Image
  //   style={[styles.component1Icon, styles.component1IconPosition]}
  //   contentFit="cover"
  //   source={require("../assets/component-111.png")} />;
  return (
    <View style={styles.tables}>
      <Image
        style={[styles.sideBarManager, styles.sideLayout]}
        contentFit="cover"
        source={require("../assets/side-bar-manager.png")}
      />
      <Image
        style={[styles.sideBarManager1, styles.sideLayout]}
        contentFit="cover"
        source={require("../assets/side-bar-manager1.png")}
      />
      <View style={styles.buttonLogOut}>
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
      <View style={[styles.cardMenuParent, styles.cardLayout1]}>
        <View style={styles.cardLayout}>
          <View style={[styles.cardMenuChild, styles.cardMenuChildBorder]} />
          <Image
            style={[styles.cardMenuItem, styles.itemLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1680.png")}
          />
          <Text
            style={[styles.chocolateCookiesSmoothies, styles.chocolateTypo]}
          >
            Bluberry Sundae
          </Text>
          <View style={[styles.statusMenu, styles.statusPosition]}>
            <Text style={[styles.available, styles.availableTypo]}>
              116 Available
            </Text>
          </View>
          <Text style={[styles.rp1600000, styles.chocolateTypo]}>
            Rp 18.000,00
          </Text>
          {/* <Image
            style={[styles.component1Icon, styles.component1IconPosition]}
            contentFit="cover"
            source={require("../assets/component-1.png")}
          /> */}
        </View>
        <View style={[styles.cardMenu1, styles.cardLayout]}>
          <View style={[styles.cardMenuChild, styles.cardMenuChildBorder]} />
          <Image
            style={[styles.cardMenuItem, styles.itemLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-16801.png")}
          />
          <Text
            style={[
              styles.chocolateCookiesSmoothiesContainer,
              styles.chocolateTypo,
            ]}
          >
            <Text style={styles.chocolateCookiesSmoothiesContainer1}>
              <Text style={styles.mango}>Mango</Text>
              <Text style={styles.text}>{` `}</Text>
              <Text style={styles.mango}>SUndae</Text>
            </Text>
          </Text>
          <View style={[styles.statusMenu, styles.statusPosition]}>
            <Text style={[styles.available, styles.availableTypo]}>
              116 Available
            </Text>
          </View>
          <Text style={[styles.rp1600000, styles.chocolateTypo]}>
            Rp 18.000,00
          </Text>
          <Image
            style={[styles.component1Icon1, styles.component1IconPosition]}
            contentFit="cover"
            source={require("../assets/component-11.png")}
          />
        </View>
        <View style={[styles.cardMenu1, styles.cardLayout]}>
          <View style={[styles.cardMenuChild, styles.cardMenuChildBorder]} />
          <Image
            style={[styles.cardMenuItem, styles.itemLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-16802.png")}
          />
          <Text
            style={[styles.chocolateCookiesSmoothies, styles.chocolateTypo]}
          >
            Coffee Ice Cream
          </Text>
          <View style={[styles.statusMenu2, styles.statusPosition]}>
            <Text style={[styles.available, styles.availableTypo]}>
              116 Available
            </Text>
          </View>
          <Text style={[styles.rp1600000, styles.chocolateTypo]}>
            Rp 18.000,00
          </Text>
          <Image
            style={[styles.component1Icon1, styles.component1IconPosition]}
            contentFit="cover"
            source={require("../assets/component-11.png")}
          />
        </View>
      </View>
      <View style={[styles.cardMenuParent, styles.cardLayout1]}>
        <View style={styles.cardLayout}>
          <View style={[styles.cardMenuChild, styles.cardMenuChildBorder]} />
          <LinearGradient
            style={[
              styles.rectangleLineargradient,
              styles.cardMenuItemPosition,
            ]}
            locations={[0.65, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]}
          />
          <Text
            style={[styles.chocolateCookiesSmoothies, styles.chocolateTypo]}
          >
            Closed
          </Text>
          <View style={[styles.statusMenu, styles.statusPosition]}>
            <Text style={[styles.available, styles.availableTypo]}>
              116 Available
            </Text>
          </View>
          <Text style={[styles.rp1600000, styles.chocolateTypo]}>Table-1-</Text>
          {/* <Image
            style={[styles.component1Icon, styles.component1IconPosition]}
            contentFit="cover"
            source={require("../assets/component-12.png")}
          /> */}
        </View>
        <View style={[styles.cardMenu1, styles.cardLayout]}>
          <View style={[styles.cardMenuChild, styles.cardMenuChildBorder]} />
          <LinearGradient
            style={[
              styles.rectangleLineargradient,
              styles.cardMenuItemPosition,
            ]}
            locations={[0.65, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]}
          />
          <Text
            style={[styles.chocolateCookiesSmoothies, styles.chocolateTypo]}
          >
            Opened
          </Text>
          <View style={[styles.statusMenu, styles.statusPosition]}>
            <Text style={[styles.available, styles.availableTypo]}>
              116 Available
            </Text>
          </View>
          <Text style={[styles.rp1600000, styles.chocolateTypo]}>Table-2-</Text>
          {/* <Image
            style={[styles.component1Icon1, styles.component1IconPosition]}
            contentFit="cover"
            source={require("../assets/component-11.png")}
          /> */}
        </View>
        <View style={[styles.cardMenu1, styles.cardLayout]}>
          <View style={[styles.cardMenuChild, styles.cardMenuChildBorder]} />
          <LinearGradient
            style={[
              styles.rectangleLineargradient,
              styles.cardMenuItemPosition,
            ]}
            locations={[0.65, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]}
          />
          <Text
            style={[styles.chocolateCookiesSmoothies, styles.chocolateTypo]}
          >
            Opened
          </Text>
          <View style={[styles.statusMenu2, styles.statusPosition]}>
            <Text style={[styles.available, styles.availableTypo]}>
              116 Available
            </Text>
          </View>
          <Text style={[styles.rp1600000, styles.chocolateTypo]}>Table-3-</Text>
        
        </View>
      </View>
      <View style={[styles.cardMenuContainer, styles.tablesInnerPosition]}>
        <View style={styles.cardLayout}>
          <View style={[styles.cardMenuChild, styles.cardMenuChildBorder]} />
          <LinearGradient
            style={[
              styles.rectangleLineargradient,
              styles.cardMenuItemPosition,
            ]}
            locations={[0.65, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]}
          />
          <Text
            style={[styles.chocolateCookiesSmoothies, styles.chocolateTypo]}
          >
            Opened
          </Text>
          <View style={[styles.statusMenu2, styles.statusPosition]}>
            <Text style={[styles.available6, styles.availableTypo]}>
              116 Available
            </Text>
          </View>
          <Text style={[styles.rp1600000, styles.chocolateTypo]}>Table-4-</Text>
          {/* <Image
            style={[styles.component1Icon, styles.component1IconPosition]}
            contentFit="cover"
            source={require("../assets/component-13.png")}
          /> */}
        </View>
        <View style={[styles.cardMenu1, styles.cardLayout]}>
          <View style={[styles.cardMenuChild, styles.cardMenuChildBorder]} />
          <LinearGradient
            style={[
              styles.rectangleLineargradient,
              styles.cardMenuItemPosition,
            ]}
            locations={[0.65, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]}
          />
          <Text
            style={[styles.chocolateCookiesSmoothies, styles.chocolateTypo]}
          >
            Closed
          </Text>
          <View style={[styles.statusMenu2, styles.statusPosition]}>
            <Text style={[styles.available, styles.availableTypo]}>
              116 Available
            </Text>
          </View>
          <Text style={[styles.rp1600000, styles.chocolateTypo]}>Table-5-</Text>
          {/* <Image
            style={[styles.component1Icon, styles.component1IconPosition]}
            contentFit="cover"
            source={require("../assets/component-14.png")}
          /> */}
        </View>
        <View style={[styles.cardMenu1, styles.cardLayout]}>
          <View style={[styles.cardMenuChild, styles.cardMenuChildBorder]} />
          <LinearGradient
            style={[
              styles.rectangleLineargradient,
              styles.cardMenuItemPosition,
            ]}
            locations={[0.65, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]}
          />
          <Text
            style={[styles.chocolateCookiesSmoothies, styles.chocolateTypo]}
          >
            Opened
          </Text>
          <View style={[styles.statusMenu2, styles.statusPosition]}>
            <Text style={[styles.available, styles.availableTypo]}>
              116 Available
            </Text>
          </View>
          <Text style={[styles.rp1600000, styles.chocolateTypo]}>Table-6-</Text>
          {/* <Image
            style={[styles.component1Icon, styles.component1IconPosition]}
            contentFit="cover"
            source={require("../assets/component-15.png")}
          /> */}
        </View>
      </View>
      <View style={[styles.frameView, styles.frameViewLayout]}>
        <View style={styles.cardLayout}>
          <View style={[styles.cardMenuChild, styles.cardMenuChildBorder]} />
          <LinearGradient
            style={[
              styles.rectangleLineargradient,
              styles.cardMenuItemPosition,
            ]}
            locations={[0.65, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]}
          />
          <Text
            style={[styles.chocolateCookiesSmoothies, styles.chocolateTypo]}
          >
            Opened
          </Text>
          <View style={[styles.statusMenu, styles.statusPosition]}>
            <Text style={[styles.available, styles.availableTypo]}>
              116 Available
            </Text>
          </View>
          <Text style={[styles.rp1600000, styles.chocolateTypo]}>Table-7-</Text>
          {/* <Image
            style={[styles.component1Icon, styles.component1IconPosition]}
            contentFit="cover"
            source={require("../assets/component-16.png")}
          /> */}
        </View>
        <View style={[styles.cardMenu1, styles.cardLayout]}>
          <View style={[styles.cardMenuChild, styles.cardMenuChildBorder]} />
          <LinearGradient
            style={[
              styles.rectangleLineargradient,
              styles.cardMenuItemPosition,
            ]}
            locations={[0.65, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]}
          />
          <Text
            style={[styles.chocolateCookiesSmoothies, styles.chocolateTypo]}
          >
            Opened
          </Text>
          <View style={[styles.statusMenu, styles.statusPosition]}>
            <Text style={[styles.available, styles.availableTypo]}>
              116 Available
            </Text>
          </View>
          <Text style={[styles.rp1600000, styles.chocolateTypo]}>Table-8-</Text>
          {/* <Image
            style={[styles.component1Icon, styles.component1IconPosition]}
            contentFit="cover"
            source={require("../assets/component-17.png")}
          /> */}
        </View>
        <View style={[styles.cardMenu1, styles.cardLayout]}>
          <View style={[styles.cardMenuChild, styles.cardMenuChildBorder]} />
          <LinearGradient
            style={[
              styles.rectangleLineargradient,
              styles.cardMenuItemPosition,
            ]}
            locations={[0.65, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]}
          />
          <Text
            style={[styles.chocolateCookiesSmoothies, styles.chocolateTypo]}
          >
            Closed
          </Text>
          <View style={[styles.statusMenu, styles.statusPosition]}>
            <Text style={[styles.available, styles.availableTypo]}>
              116 Available
            </Text>
          </View>
          <Text style={[styles.rp1600000, styles.chocolateTypo]}>Table-9-</Text>
          {/* <Image
            style={[styles.component1Icon, styles.component1IconPosition]}
            contentFit="cover"
            source={require("../assets/component-18.png")}
          /> */}
        </View>
      </View>
      <View style={[styles.cardMenuParent1, styles.frameViewLayout]}>
        <View style={styles.cardLayout}>
          <View style={[styles.cardMenuChild, styles.cardMenuChildBorder]} />
          <LinearGradient
            style={[
              styles.rectangleLineargradient,
              styles.cardMenuItemPosition,
            ]}
            locations={[0.65, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]}
          />
          <Text
            style={[styles.chocolateCookiesSmoothies, styles.chocolateTypo]}
          >
            Opened
          </Text>
          <View style={[styles.statusMenu, styles.statusPosition]}>
            <Text style={[styles.available, styles.availableTypo]}>
              116 Available
            </Text>
          </View>
          <Text style={[styles.rp1600000, styles.chocolateTypo]}>
            Table-10-
          </Text>
          {/* <Image
            style={[styles.component1Icon, styles.component1IconPosition]}
            contentFit="cover"
            source={require("../assets/component-19.png")}
          /> */}
        </View>
        <View style={[styles.cardMenu1, styles.cardLayout]}>
          <View style={[styles.cardMenuChild, styles.cardMenuChildBorder]} />
          <LinearGradient
            style={[
              styles.rectangleLineargradient,
              styles.cardMenuItemPosition,
            ]}
            locations={[0.65, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]}
          />
          <Text
            style={[styles.chocolateCookiesSmoothies, styles.chocolateTypo]}
          >
            Closed
          </Text>
          <View style={[styles.statusMenu, styles.statusPosition]}>
            <Text style={[styles.available, styles.availableTypo]}>
              116 Available
            </Text>
          </View>
          <Text style={[styles.rp1600000, styles.chocolateTypo]}>
            Table-11-
          </Text>
      
        </View>
        <View style={[styles.cardMenu1, styles.cardLayout]}>
          <View style={[styles.cardMenuChild, styles.cardMenuChildBorder]} />
          <LinearGradient
            style={[
              styles.rectangleLineargradient,
              styles.cardMenuItemPosition,
            ]}
            locations={[0.65, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]}
          />
          <Text
            style={[styles.chocolateCookiesSmoothies, styles.chocolateTypo]}
          >{`Opened `}</Text>
          <View style={[styles.statusMenu, styles.statusPosition]}>
            <Text style={[styles.available, styles.availableTypo]}>
              116 Available
            </Text>
          </View>
          <Text style={[styles.rp1600000, styles.chocolateTypo]}>
            Table-12-
          </Text>
         
        </View>
      </View>
      <View style={styles.searchBarParent}>
        <View style={styles.searchBar}>
          <View style={styles.groupChildPosition}>
            <View style={[styles.groupChild, styles.groupChildBorder]} />
            <Image
              style={[styles.groupItem, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/frame-1260.png")}
            />
            <Text style={[styles.searchItem, styles.text1Typo]}>
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
            <View style={[styles.wrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.text1, styles.text1Typo]}>3</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.tablesChild, styles.tablesChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-455.png")}
      />
      <View style={[styles.iconButton1, styles.tablesChildPosition]}>
        <Image
          style={styles.filterIcon}
          contentFit="cover"
          source={require("../assets/filter.png")}
        />
      </View>
      <View style={styles.tablesItem} />
      <Text style={[styles.tables1, styles.chocolateTypo]}>Tables:</Text>
      
      <View style={[styles.tablesInner, styles.tablesInnerPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  sideLayout: {
    height: 817,
    position: "absolute",
  },
  cardLayout1: {
    width: 303,
    flexDirection: "row",
  },
  cardMenuChildBorder: {
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    position: "absolute",
  },
  itemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chocolateTypo: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    display: "flex",
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
    height: 24,
    top: "50%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cardLayout: {
    height: 105,
    width: 85,
  },
  cardMenuItemPosition: {
    bottom: "16.79%",
    height: "83.21%",
    borderRadius: Border.br_5xs,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  tablesInnerPosition: {
    left: 69,
    position: "absolute",
  },
  frameViewLayout: {
    height: 148,
    flexDirection: "row",
    position: "absolute",
  },
  groupChildBorder: {
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.neutral100,
  },
  text1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  tablesChildPosition: {
    top: 39,
    height: 32,
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
    backgroundColor: Color.neutral100,
    borderRadius: Border.br_5xs,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  cardMenuItem: {
    bottom: "16.79%",
    height: "83.21%",
    borderRadius: Border.br_5xs,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  chocolateCookiesSmoothies: {
    top: "68.57%",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    left: "4.17%",
    fontWeight: "700",
    width: "92.38%",
    color: Color.neutral100,
  },
  available: {
    display: "none",
  },
  statusMenu: {
    display: "none",
  },
  rp1600000: {
    width: "76.19%",
    top: "85.36%",
    fontSize: FontSize.size_3xs,
    color: Color.black,
    display: "flex",
    textAlign: "left",
    left: "4.17%",
    fontWeight: "700",
  },
  component1Icon: {
    height: 24,
    display: "none",
  },
  mango: {
    fontSize: FontSize.size_5xs,
  },
  text: {
    fontSize: FontSize.size_base,
  },
  chocolateCookiesSmoothiesContainer1: {
    width: "100%",
  },
  chocolateCookiesSmoothiesContainer: {
    top: "62.86%",
    display: "flex",
    textAlign: "left",
    left: "4.17%",
    fontWeight: "700",
    width: "92.38%",
    color: Color.neutral100,
  },
  component1Icon1: {
    height: 24,
  },
  cardMenu1: {
    marginLeft: 20,
  },
  statusMenu2: {
    width: 93,
    height: 24,
    display: "none",
  },
  cardMenuParent: {
    top: 123,
    flexDirection: "row",
    left: 71,
    position: "absolute",
  },
  rectangleLineargradient: {
    backgroundColor: "transparent",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    position: "absolute",
  },
  available6: {
    display: "flex",
  },
  cardMenuContainer: {
    top: 241,
    height: 140,
    flexDirection: "row",
    width: 303,
  },
  frameView: {
    top: 359,
    left: 70,
    width: 302,
  },
  cardMenuParent1: {
    top: 480,
    width: 301,
    left: 71,
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
    borderRadius: 4,
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
  text1: {
    fontSize: 6,
    color: Color.colorWhite,
    textAlign: "left",
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
    left: 68,
    width: 226,
    flexDirection: "row",
    position: "absolute",
  },
  tablesChild: {
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
    padding: 4,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.neutral100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    fontSize: 15,
    color: "#0d0d0e",
    width: 300,
    height: 12,
    opacity: 0.16,
    display: "flex",
    textAlign: "left",
  },
  tablesInner: {
    top: 109,
    width: 293,
    height: 499,
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
