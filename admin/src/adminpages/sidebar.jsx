import React, { useState } from 'react'
import { FaGlobe } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TbBellDown } from "react-icons/tb";
import { TbBellUp } from "react-icons/tb";
import Collaborators from './collaborators';
function Sidebar() {
    const [show,setShow]=useState(0)
  return (
    <div className='div1_sidebar'>
    <div className="side-bar">
    <div className="side-bar-content">
        <button className="dashboard">
            <button className="icons">
                <RxDashboard  className="group-icon" />
            </button>
            <h3 className="dashboard1">Dashboard</h3>
        </button>
        <button className="dashboard" onClick={()=>{setShow(1)}} >
            <button className="icons">
                <MdInstallDesktop  className="group-icon" alt="" src="Group.png" />
            </button>
            <h3 className="dashboard1">User App Installed</h3>
        </button>
        <button className="dashboard">
            <button className="icons">
                <TbBellUp  className="group-icon" />
            </button>
            <h3 className="dashboard1">send out alarm</h3>
        </button>
        <button className="dashboard">
            <button className="icons">
                <TbBellDown  className="group-icon"  />
            </button>
            <h3 className="dashboard1">received alarm</h3>
        </button>
        <button className="dashboard">
            <button className="icons">
                <FaGlobe  className="group-icon"   />
            </button>
            <h3 className="dashboard1">user per country</h3>
        </button>
    </div>
</div> 
<div className='vertical_sidebar'>______________________________________________________________</div>
<div className='show_sidebar'>
    {show===""&&<Collaborators/>}
    {show===1&&<Collaborators/>}
    {show===""&&<Collaborators/>}
    {show===""&&<Collaborators/>}
    {show===""&&<Collaborators/>}
</div>
</div>
 )
}

export default Sidebar