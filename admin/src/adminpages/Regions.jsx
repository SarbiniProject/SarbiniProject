import React, { useState, useEffect } from "react";
import axios from "axios"; 
import "../App.css";
import { IoSearch } from 'react-icons/io5';
import { HiLocationMarker } from "react-icons/hi";


 const Regions = ({values,regions}) => {
 const [loading, setLoading] = useState(true);
console.log("regions",regions);
console.log("values",values);


  const handleNumber = (text) => {
    return regions.filter((el) => el.user_location.toUpperCase().includes(text.toUpperCase()));
};

const collNumber = (text) => {
    return handleNumber(text).length;
};console.log("handle",collNumber("bizerte"));

  return (
    <div className="regions">
    <div className="bg-[#191919] flex flex-row justify-center w-full">
      <div className="bg-maincolorsecondary w-[1440px] h-[1024px] relative"></div>
      <div className="bigDiv">
        <div className="super-container-region" >
        {values.map((el, i) => (
          
            <div className="btn-region btn-1-region" key={i}>
              <div className="divv-region">
                <HiLocationMarker style={{ flexShrink: 0, flexGrow: 1, fontSize: '2em' }} />
                <div className="title-region">{el.user_location}</div>
              </div>
              <div className="divvv-region">
                <div className="minititle-region">number of collaborators </div>
                <div className="number-region">{collNumber(el.user_location)}</div>
              </div>
            </div>
        ))}</div>
      </div>
    </div>
    </div>
  );
};

export default Regions;
