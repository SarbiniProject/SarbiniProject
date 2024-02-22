import React, { useEffect, useState } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Port } from '../port';
// import {getProducts,getOrders} from './hooks'
import axios from "axios";


const PaymentChart = () => {
  const [ref,setRef]=useState(false)
  const [products,setProducts]=useState([])
  const [time,setTime]=useState([])
  const [prices,setPrices]=useState([])
  const [days,setDays]=useState([])
  console.log(products)
  console.log(prices,"prices");
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getProducts();
        await getOrders();
        //  getday();
        //  getprice()
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [ref]);


  const getProducts = async () => { 
    try {
      const res = await axios.get(`http://${Port}:3000/api/sarbini/prods`);
      console.log("allprod", res.data[0].products);
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  }

  const getOrders =async()=>{
    try{
        const res = await axios.get(`http://${Port}:3000/api/sarbini/orders/time`);
        setTime(res.data)
    }
    catch (err) {
        console.error("Error fetching products:", err);
      }
  }


  const getday = () => {
    const loggedDays = new Set();

    time.forEach((el, i) => {
        let datestr = el.createdAt.slice(0, 10);
        let dateObj = new Date(datestr);
        
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        
        const dayOfWeekIndex = dateObj.getDay();
        const dayName = daysOfWeek[dayOfWeekIndex];

        if (!loggedDays.has(dayName)) {
            console.log(dayName, "Day");
            loggedDays.add(dayName);
        }
    });
};

const getprice = () => {
  if (products === undefined) {
    console.error("Products are undefined. Check your data fetching logic.");
    return;
  }

  if (!Array.isArray(products)) {
    console.error("Products are not an array. Check your data structure.");
    return;
  }

  products.forEach((group, i) => {
    if (group) {
      let totalSum = 0;

      if (group.products && Array.isArray(group.products)) {
        group.products.forEach((product, j) => {
          // Assuming product.price is a numbe
          totalSum += (product && product.price) || 0;
        });
      }
      setPrices((prevPrices) => [...prevPrices, totalSum]);
      console.log(`Total price for group ${i + 1}: ${totalSum}`);
    }
  });
};





 const image=require('../../assets/w.png')
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: prices,
      },
    ],
  };

  return (
    <View style={styles.container}>
      
      <LineChart
        data={data}
        width={300}
        height={200}
        yAxisLabel="$"
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 350,
    height: 150,
    resizeMode: 'contain',
  }
});

export default PaymentChart;
