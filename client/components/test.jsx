import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const isSmallScreen = width <= 375;

const Test = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: isSmallScreen ? 10 : 20 }}>
        <View style={{ width: isSmallScreen ? '30%' : '16%', height: height, backgroundColor: '#e60012', position: 'absolute', top: 0, left: 0, flexDirection: 'column', justifyContent: 'space-between', paddingTop: isSmallScreen ? 200 : 443, paddingBottom: 4, paddingLeft: 2 }}>
          <View style={{ flexDirection: 'column', gap: 6, width: isSmallScreen ? 16 : 16, alignItems: 'flex-start' }}>
            <View style={{ flexDirection: 'column', gap: 1, width: isSmallScreen ? 16 : 16, alignItems: 'flex-start' }}>
              <Image source={{ uri: 'https://file.rendit.io/n/upXSqW6tAdVQAr2BWVpg.svg' }} style={{ marginLeft: 8, width: 8 }} />
              <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fefefe' }}>Product</Text>
            </View>
            <View style={{ flexDirection: 'column', gap: 2, width: isSmallScreen ? 16 : 16, alignItems: 'flex-start' }}>
              {/* ... Tables content ... */}
            </View>
          </View>
          <View style={{ flexDirection: 'column', marginLeft: 1, gap: 1, width: isSmallScreen ? 16 : 16, alignItems: 'flex-start' }}>
            <Image source={{ uri: 'https://file.rendit.io/n/bApPQkCZCz9wQpk2obGf.svg' }} style={{ marginLeft: 8, width: 8 }} />
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fefefe' }}>Log Out</Text>
          </View>
        </View>

        <View style={{ width: '100%', height: 24, overflow: 'hidden', position: 'absolute', top: 5, left: 0, flexDirection: 'row', justifyContent: 'flex-end', gap: 8 }}>
          <Image source={{ uri: 'https://file.rendit.io/n/UoEINEKIATTuBhYkXKTu.svg' }} style={{ marginTop: 1, width: 16 }} />
          <View style={{ backgroundImage: 'url(https://file.rendit.io/n/7C5Xpxl67Phif1uWj0wx.png)', backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: 24, fontFamily: 'Open_Sans', alignItems: 'flex-start', marginTop: isSmallScreen ? -10 : -15, marginBottom: 4, marginRight: isSmallScreen ? -12 : -22, paddingTop: 6, paddingLeft: 4 }}>
            <Image source={{ uri: 'https://file.rendit.io/n/lFOCAdA6BBrQxDOreFhB.svg' }} style={{ marginTop: 1, width: 8 }} />
            <Text style={{ fontSize: isSmallScreen ? 16 : 20, fontWeight: 'bold', color: '#292d32' }}>Product name</Text>
          </View>
        </View>

        <View style={{ shadowColor: 'rgba(0, 0, 0, 0.05)', backgroundColor: '#fefefe', position: 'relative', flexDirection: 'row', justifyContent: 'center', marginTop: isSmallScreen ? 50 : 110, paddingTop: 20, width: '80%', alignItems: 'flex-start', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
          <View style={{ backgroundColor: '#fefefe', flexDirection: 'column', justifyContent: 'flex-end', marginBottom: 24, gap: 8, width: '80%', paddingTop: 20, paddingBottom: 10, paddingHorizontal: 6, borderRadius: 10 }}>
            {/* ... Main content ... */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Test;
