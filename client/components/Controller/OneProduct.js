import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import {Image} from 'expo-image'
import { useState } from "react";
import { Color, FontFamily, FontSize, Border, Padding } from "./styles/OneProductStyle";
import axios from 'axios'
const OneProduct = ({route}) => {
  const { productData,refreshData } = route.params;
  const [isModalVisible, setModalVisible] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    product_name: productData.product_name,
    price: productData.price.toString(),
  });
  console.log(productData)
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleEdit = async () => {
    try {
      await updateProductData(productData.id, editedProduct);
      console.log("Product data updated successfully");
      toggleModal();
      refreshData();
    } catch (error) {
      console.error("Error updating product data:", error);
      showToast("Failed to update product data", "error");
    }
  };

  const deleteProduct = async () => {
    try {
      await deleteProductData(productData.id);
      console.log("Product deleted successfully");
      refreshData();
    } catch (error) {
      console.error("Error deleting product:", error);
      showToast("Failed to delete product", "error");
    }
  };

  const showToast = (message, type = "success") => {
    Toast.show({
      type: type,
      text1: message,
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  };

  const updateProductData = async (productId, updatedData) => {
    try {
      const apiUrl = `http://172.20.10.2:3000/api/sarbini/product/${productId}`;
      await axios.put(apiUrl, updatedData);
    } catch (error) {
      throw new Error(`Failed to update product data: ${error.message}`);
    }
  };

  const deleteProductData = async (productId) => {
    try {
      const apiUrl = `http://172.20.10.2:3000/api/sarbini/product/${productId}`;
      await axios.delete(apiUrl);
    } catch (error) {
      throw new Error(`Failed to delete product: ${error.message}`);
    }
  };
  return (
    <View style={styles.oneProduct}>
      <View style={styles.searchBarParent}>
        <View style={styles.searchBar}>
          <View style={[styles.rectangleParent, styles.groupChildPosition]}>
            <View style={[styles.groupChild, styles.groupChildBorder]} />
            <View style={[styles.searchWrapper, styles.buttonFlexBox]}>
              <Image
                style={styles.searchIcon}
                source={require("../assets/search.svg")}
              />
            </View>
            <Text style={[styles.searchItem, styles.textTypo]}>
              Search item
            </Text>
          </View>
        </View>
        <View style={styles.frameWrapper}>
          <View>
            <View style={[styles.iconButton, styles.wrapperFlexBox]}>
              <Image
                style={styles.notificationIcon}
                source={require("../assets/notification.svg")}
              />
            </View>
            <View style={[styles.wrapper, styles.wrapperPosition]}>
              <Text style={[styles.text, styles.textTypo]}>3</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.oneProductChild, styles.iconButton1Position]}
        contentFit="cover"
        source={require("../assets/ellipse-455.png")}
      />
      <View style={[styles.iconButton1, styles.iconLayout]}>
        <Image
          style={styles.filterIcon}
          source={require("../assets/filter.svg")}
        />
      </View>
      <View style={styles.oneProductItem} />
      <View style={styles.oneProductItem} />
      <Image
        style={[styles.sideBarManager, styles.sideLayout]}
        contentFit="cover"
        source={require("../assets/side-bar-manager.png")}
      />
      <Image
        style={[styles.sideBarManager1, styles.sideLayout]}
        contentFit="cover"
        source={require("../assets/side-bar-manager.png")}
      />
      <View style={styles.buttonLogOut}>
        <Image
          style={styles.iconLayout}
          source={require("../assets/lucidedooropen.svg")}
        />
        <Text style={[styles.logOut, styles.payTypo]}>Log Out</Text>
      </View>
      <Image
        style={styles.captureDCran20240113081Icon}
        contentFit="cover"
        source={require("../assets/capture-d-cran-20240113-081410removebgpreview-3.png")}
      />
      <View style={[styles.namelemonCoffeeParent, styles.cardMenuChildBorder]}>
        <Text style={[styles.namelemonCoffee, styles.price15dtFlexBox]}>
          <Text style={styles.namelemonCoffeeTxtContainer}>
            <Text style={styles.name}>{productData.product_name}</Text>
            
          </Text>
        </Text>
        <Text style={[styles.price15dt, styles.price15dtFlexBox]}>
          <Text style={styles.namelemonCoffeeTxtContainer}>
            <Text style={styles.lemonCoffee}>{`Price: ${productData.price}`}</Text>
          </Text>
        </Text>
        <View style={[styles.cardMenu, styles.wrapperPosition]}>
          <View style={[styles.cardMenuChild, styles.cardMenuChildBorder]} />
          <Image
            style={[styles.cardMenuItem, styles.cardMenuItemLayout]}
            contentFit="cover"
            source={productData.image}
          />
          <Text
            style={[styles.chocolateCookiesSmoothies, styles.rp1600000Typo]}
          />
         
          
        </View>
        <TouchableOpacity onPress={deleteProduct}>
        <Image
          style={styles.trashIcon}
          source={require("../assets/trash.svg")}
        />
      </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal} > 
        <Image
          style={styles.image13Icon}
          contentFit="cover"
          source={require("../assets/image-13.png")}
        />
        </TouchableOpacity>
        <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Edit Name:</Text>
            <TextInput
              style={styles.input}
              value={editedProduct.product_name}
              onChangeText={(text) => setEditedProduct({ ...editedProduct, product_name: text })}
            />
            <Text>Edit Price:</Text>
            <TextInput
              style={styles.input}
              value={editedProduct.price}
              onChangeText={(text) => setEditedProduct({ ...editedProduct, price: text })}
              keyboardType="numeric"
            />

            <TouchableOpacity onPress={handleEdit}>
              <Text>Save Changes</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleModal}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChildBorder: {
    borderWidth: 0.8,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: 4,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  wrapperFlexBox: {
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperPosition: {
    left: 19,
    position: "absolute",
  },
  iconButton1Position: {
    top: 39,
    position: "absolute",
  },
  iconLayout: {
    width: 32,
    height: 32,
  },
  sideLayout: {
    height: 817,
    position: "absolute",
    
  },
  payTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  cardMenuChildBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    position: "absolute",
  },
  price15dtFlexBox: {
    width: 209,
    color: Color.colorGray_100,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  cardMenuItemLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  rp1600000Typo: {
    left: "4.17%",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  statusMenuPosition: {
    top: "50%",
    display: "none",
    position: "absolute",
  },
  trashIconLayout: {
    borderRadius: 4,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
    bottom: "0%",
    height: "100%",
  },
  searchIcon: {
    width: 10,
    height: 10,
    overflow: "hidden",
  },
  searchWrapper: {
    height: "90%",
    width: "15%",
    top: "5%",
    right: "84.17%",
    bottom: "5%",
    left: "0.83%",
    backgroundColor: Color.colorWhitesmoke,
    padding: 2,
    borderRadius: 4,
    position: "absolute",
    overflow: "hidden",
    flexDirection: "row",
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
  },
  searchBar: {
    width: 187,
    height: 24,
  },
  notificationIcon: {
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  iconButton: {
    width: 24,
    zIndex: 0,
    borderWidth: 0.8,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: 4,
    height: 24,
    flexDirection: "row",
  },
  text: {
    fontSize: 6,
    color: Color.colorWhite1,
  },
  wrapper: {
    top: -2,
    borderRadius: 12,
    backgroundColor: Color.redNonActive,
    width: 9,
    height: 9,
    zIndex: 1,
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
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
  oneProductChild: {
    left: 289,
    width: 33,
    height: 32,
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
    top: 39,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    width: 32,
    backgroundColor: Color.white,
    flexDirection: "row",
  },
  oneProductItem: {
    top: 36,
    left: 67,
    width: 295,
    height: 39,
    position: "absolute",
  },
  sideBarManager: {
    top: 0,
    left: -12,
    width: 79,
    backgroundColor: 'red',
  },
  sideBarManager1: {
    top: 4,
    left: -2,
    width: 66,
    backgroundColor: 'red',
  },
  logOut: {
    width: 100,
    marginTop: 4,
    height: 22,
    fontSize: FontSize.size_sm,
    color: Color.black,
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
  name: {
    fontWeight: "300",
    fontFamily: FontFamily.openSansLight,
    fontSize: FontSize.size_lg,
  },
  lemonCoffee: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  namelemonCoffeeTxtContainer: {
    width: "100%",
  },
  namelemonCoffee: {
    top: 58,
    left: 31,
  },
  price15dt: {
    top: 95,
    left: 83,
  },
  cardMenuChild: {
    display: "none",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    borderColor: Color.colorGainsboro,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  cardMenuItem: {
    height: "83.21%",
    bottom: "16.79%",
    maxHeight: "100%",
    borderRadius: Border.br_5xs,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
    maxWidth: "100%",
  },
  chocolateCookiesSmoothies: {
    width: "92.38%",
    top: "69.11%",
    fontSize: FontSize.size_base,
    display: "flex",
    left: "4.17%",
    color: Color.white,
  },
  available: {
    fontSize: FontSize.size_xs,
    width: 77,
    height: 16,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
  },
  statusMenu: {
    marginTop: -129.5,
    marginLeft: -109.5,
    left: "50%",
    backgroundColor: Color.colorDodgerblue,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rp1600000: {
    width: "76.19%",
    top: "87.84%",
    color: Color.black,
    display: "none",
    fontSize: FontSize.size_lg,
  },
  component1Icon: {
    marginTop: -131.5,
    width: "10%",
    right: "8.33%",
    left: "81.67%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 24,
  },
  cardMenu: {
    top: 145,
    width: 217,
    height: 265,
  },
  trashIcon: {
    top: 8,
    left: 226,
    width: 19,
    height: 22,
  },
  image13Icon: {
    top: -11,
    left: 202,
    width: 18,
    height: 18,
    position: "absolute",
  },
  namelemonCoffeeParent: {
    top: 183,
    left: 90,
    backgroundColor: Color.colorWhite1,
    width: 255,
    height: 389,
    overflow: "hidden",
  },
  pay: {
    fontSize: FontSize.size_sm,
    color: Color.red,
  },
  paymentButtonInner: {
    flexDirection: "row",
  },
  paymentButton: {
    top: 588,
    left: 229,
    backgroundColor: Color.neutral800,
    width: 121,
    padding: Padding.p_3xs,
    borderRadius: Border.br_5xs,
    height: 24,
    flexDirection: "row",
    position: "absolute",
  },
  oneProduct: {
    backgroundColor: "#fffdfd",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
});

export default OneProduct;
