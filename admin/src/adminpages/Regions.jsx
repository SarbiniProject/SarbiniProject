import React, { useState, useEffect } from "react";
import axios from "axios"; 
import "../App.css";
import { IoSearch } from 'react-icons/io5';
import { HiLocationMarker } from "react-icons/hi";


 const Regions = () => {
 const [search, setSearch] = useState("");
 const [regions, setRegions] = useState([]);
 const [regionss, setRegionss] = useState([]);
 const [loading, setLoading] = useState(true);

      
 const fetchData = async () => {
   try {
     const result = await axios.get("http://localhost:3000/api/sarbini/admin/loc");
     console.log("loc",result.data);
     const fetchedRegions = result.data;
     setRegions(fetchedRegions);
     setRegionss(fetchedRegions);
     setLoading(false);
   } catch (error) {
     console.error(error);
     setLoading(false);
   }
 };
      
 useEffect(() => {
   fetchData();
 }, []); 
      
  
  
  const filt = (regions) => {
    const uniqueLocations = new Set();
    return regions.filter(region => {
      if (!uniqueLocations.has(region.user_location)) {
        uniqueLocations.add(region.user_location);
        return true;
      }
      return false;
    });
  };

  const filteredRegions = filt(regions);
  console.log(filteredRegions);

  const handleNumber = (text) => {
    return regionss.filter((el) => el.user_location.toUpperCase().includes(text.toUpperCase()));
};

const collNumber = (text) => {
    return handleNumber(text).length;
};

  return (
    <div className="regions">
    {loading ? <p>Loading...</p> : 
    <div className="bg-[#191919] flex flex-row justify-center w-full">
      <div className="bg-maincolorsecondary w-[1440px] h-[1024px] relative"></div>
      <div className="bigDiv">
        <div className="super-container-region" >
        {filteredRegions.map((el, i) => (
          
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
    </div>}
    </div>
  );
};

export default Regions;
