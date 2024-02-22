import React, { useEffect } from 'react';
import { View, StyleSheet,TouchableOpacity,Text } from 'react-native';
import axios from 'axios';
import { Port } from './port';
import { Platform } from 'react-native';

const Test = () => {

  const [category,setCategorys]= React.useState([])
  const [filtrprod,setFiltrprod]=React.useState([])
  

  const getcat=()=>{
    axios.get("http://"+Port+":3000/api/sarbini/category")
    .then((res)=>{
      setCategorys(res.data)
      console.log(res.data);
    })
    .catch((err)=>{
      console.error("error",err);
    })
  }

  const getprodbycateg=(idcat)=>{
    axios.get("http://"+Port+":3000/api/sarbini/prodbycateg/"+idcat)
    .then((res)=>{
      setOnecateg(idcat)
      setFiltrprod(res.data)
      console.log(res.data,'hello');
    })
    .catch((err)=>{
      console.error("error",err);
    })
  }

  useEffect(()=>{
    getcat()
  },[])
  return (
<View style={styles.container}>
  {category.map((el, i) => (
    <TouchableOpacity key={i} style={styles.categoryItem}>
      <Text style={styles.categoryText}>{el.ca_name}</Text>
    </TouchableOpacity>
  ))}
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:"column",
    // flexWrap: 'wrap',
    // justifyContent: 'space-between',
    marginLeft:'10%',
    marginRight:'10%',
 
  },
  categoryItem: {
    backgroundColor: 'rgba(244, 2, 2, 0.719)',
    width: '14%',
    height: '8%' ,
    margin:5,
    aspectRatio: 1,
    marginVertical:25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'rgb(0, 0, 0)',
  
  },
  categoryText: {
    color: 'white',
    fontSize: 15,
    },
});


export default Test;
