import React, { useState,useRef } from 'react';
import {Dimensions,
    StyleSheet,
    Image,
    Button,
    Text,
    View,
    ScrollView as RNScrollView,
    TouchableOpacity,
    Alert,
  } from 'react-native';
import * as Location from 'expo-location';
import RBSheet from "react-native-raw-bottom-sheet";
import MapView, { Marker } from "react-native-maps";
import { AntDesign,EvilIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


const LocationController = () => {
 const [location, setLocation] = useState(null);  
 const refRBSheet = useRef(null);
 const mapViewRef = useRef(null);
 const windowHeight = Dimensions.get('window').height;
 const sheetHeight = windowHeight * 0.7;
 const [selectedLat, setSelectedLat] = useState(null);
 const [selectedLng, setSelectedLng] = useState(null);
 const [selectedPlaceName, setSelectedPlaceName] = useState("");
 const [isPermissionGranted, setIsPermissionGranted] = useState(false);






const askForLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    setIsPermissionGranted(true); // Set permission status to true
  };

  return (

    <View style={styles.container}>
      <Image
        style={styles.img}
        resizeMode="cover"
        source={require('../../assets/loc.png')}
      />

    <RNScrollView
    contentContainerStyle={styles.scrollContainer}
    keyboardShouldPersistTaps="handled"
  >
    <View style={styles.inputContainer}>
    <EvilIcons
        name="location"
        size={24}
        color="black"
        style={styles.icon}
      />
     
     <TouchableOpacity 
   onPress={() => {
      askForLocationPermission();
      refRBSheet.current.open();
   }}
>
<Text style={styles.welcomeText}>Set Location</Text>
</TouchableOpacity>
      </View>
       {/* Bottom Sheet */}
       <RBSheet
        ref={refRBSheet}
        height={sheetHeight}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center",
          }
        }}
      >
        {/* Your bottom sheet content here */}
        <View style={{ padding: 15, borderBottomWidth: 1, borderColor: '#e0e0e0' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Maps
          </Text>
        </View>
        <View style={{ flex: 1, width: '100%', height: '100%',padding:16 }}>
          <MapView
          ref={mapViewRef}
           style={{ flex: 1, width: '100%', height: '100%' }}
           region={{
            latitude: location?.coords.latitude || 10.78825,
            longitude: location?.coords.longitude || 9.4324,
          
        }}
        onPress={async (e) => {
          setSelectedLat(e.nativeEvent.coordinate.latitude);
          setSelectedLng(e.nativeEvent.coordinate.longitude);
          const result = await Location.reverseGeocodeAsync({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });
          if (result && result.length > 0) {
            
            setSelectedPlaceName(`${result[0].city}`);
          }
        }}
    >
       {selectedLat && selectedLng && (
    <Marker
      coordinate={{
        latitude: selectedLat,
        longitude: selectedLng,
      }}
      title={selectedPlaceName}
    />
  )}
        {location && (
            <Marker
                coordinate={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                }}
                title="My Location"
            />
        )}
            
          </MapView>
        </View>

        {selectedLat && selectedLng &&(
        <View style={{ padding: 15 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#d15c54',
              padding: 12,
              borderRadius: 5,
              alignItems: 'center'
            }}
            
            onPress={() => { refRBSheet.current.close()
              }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
        )}
      </RBSheet>
      <StatusBar style="auto" />
      </RNScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
      scrollContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
      },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    
        marginVertical: 10,
        paddingHorizontal: 10,
      },
      icon: {},
      img: {
    width: 300,
    height: 300,
    marginTop: 50,
    marginLeft:30
  },
  photoInput: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 55,
    color:'#d15c54'
  },
    });

export default LocationController
