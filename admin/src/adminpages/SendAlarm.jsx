import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { Input } from 'antd';
import { SearchOutlined ,DeleteOutlined ,EditOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';


function SentAlarms() {
    const[users,setUsers]=useState([])
    const[locations,setLocations]=useState([])
    const[contnames,setContname]=useState("")
    const[nlocation,setNlocation]=useState("")
    const[nname,setNname]=useState("")
    const[npseudo,setNpseudo]=useState("")
    const[nphone,setNphone]=useState(null)
    const[refresh,setRefresh]=useState(true)
    const[editingUserId, setEditingUserId] = useState(null);
    const[showsearch,setShowserach]=useState(0)
    const[serach,setSearch]=useState([])
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleButtonClick = () => { 
      setPopupVisible(true);
      console.log("clicked",isPopupVisible);
     };
   
     const handleClosePopup = () => {
       setPopupVisible(false);
     };


  console.log("pseudo",npseudo);

    let info={
        user_name:nname,
        user_Pseudo:npseudo,
        user_phone:nphone,
        user_location:nlocation,
    }

    useEffect(()=>{
        getcontrollers()
        getlocations()

    },[refresh])


    let getoneloc = (res) => {
        let uniqueLocationsSet = new Set();
    
        res.forEach((item) => {
            uniqueLocationsSet.add(item.user_location);
        });
        let uniqueLocationsArray = Array.from(uniqueLocationsSet);
        let result = uniqueLocationsArray.map((location) => {
            return res.find((item) => item.user_location === location);
        });
    
        return result;
    };
    const getlocations=()=>{
        axios.get('http://localhost:3000/api/sarbini/admin/locations')
        .then((res)=>{
            setLocations(getoneloc(res.data))
            console.log(getoneloc(res.data));
        })
        .catch((err)=>{
            console.error(err);
        })
    }

    
    const getcontrollers=()=>{
        axios.get('http://localhost:3000/api/sarbini/admin/controllers')
        .then((res)=>{
          setUsers(res.data)
          console.log(res.data);
        })
        .catch((err)=>{
          console.log("Error",err)
        })
      }
      const updateuser=(id,info)=>{
        axios.put('http://localhost:3000/api/sarbini/admin/update/'+id,info)
        .then(()=>{
            console.log("updated");
            setRefresh(!refresh)
        })
        .catch((err)=>console.log(err))
      }
      const deleteuser=(id)=>{
        axios.delete('http://localhost:3000/api/sarbini/admin/delete/'+id)
        .then(()=>{
            console.log("deletes");
            setRefresh(!refresh)
        })
        .catch((err)=>console.error(err))
      }

      const menu = (
        <Menu>
          {locations.map((location) => (
            <Menu.Item onClick={()=>{searchbyloc(location.user_location);setShowserach(1)}}>{location.user_location}</Menu.Item>
          ))}
        </Menu>  ) 

     const handleshow = (id) => {
    if (editingUserId === id) {
        setEditingUserId(null);
        updateuser(id,info)
    } else {
        setEditingUserId(id);

    }
};
        const hundletext=(set,e,valuer)=>{
          console.log(valuer);
          if(e.target.value!=""){
            set(e.target.value)
          }
          else{
            set(valuer)
          }
        }

          const searchbyname=(name)=>{
            let data=users.filter((item)=>{
                return(item.user_name===name)
            })
            if(data!=""){
                setSearch(data)
            }
            return serach.map(el=>(
                <>
                   <tr>
                <td className='td2_colla' >{editingUserId===el.id?(<Input   placeholder="new location" onChange={(e)=>hundletext(setNlocation,e,(el.user_location))}/>):el.user_location}</td>
                <td></td>
                <td className='td2_colla'>{editingUserId===el.id?  (<Input placeholder="new name" onChange={(e)=>hundletext(setNname,e,(el.user_name))} />):el.user_name}</td>
                <td></td>
                <td className='td2_colla'>{editingUserId===el.id? (<Input placeholder="new pseudo" onChange={(e)=>hundletext(setNpseudo,e,(el.user_Pseudo))}/>):el.user_Pseudo}</td>
                <td></td>
                <td className='td2_colla'>{editingUserId===el.id?  (<Input placeholder="new phone" onChange={(e)=>hundletext(setNphone,e,(el.user_phone))}/>):el.user_phone}</td>
                <td></td>
                <td className='td2_colla'>{el.createdAt}</td>
                <td></td>
                <td className='td2_colla'> <DeleteOutlined onClick={()=>{deleteuser(el.id)}} className='icon3_colla' /> </td>
                </tr>
                <tr>
                    <td colSpan="12">
                    <hr />
                </td>
            </tr>        
                </>
            ))
        }

        const searchbyloc1=(loc)=>{
          let data=users.filter((item)=>{
              console.log(loc);
              return(item.user_location===loc)})
              console.log("data",data);
              if(data!=""){
                  setSearch(data)
              }
              console.log(serach);
         return serach.map(el=>(el.user_name))}

    const searchbyloc=(loc)=>{
        let data=users.filter((item)=>{
            console.log(loc);
            return(item.user_location===loc)})
            console.log("data",data);
            if(data!=""){
                setSearch(data)
            }
            console.log(serach);
       return serach.map(el=>(
            <>
           <tr>
                <td className='td2_colla' >{editingUserId===el.id?(<Input   placeholder="new location" onChange={(e)=>hundletext(setNlocation,e,(el.user_location))}/>):el.user_location}</td>
                <td></td>
                <td className='td2_colla'>{editingUserId===el.id?  (<Input placeholder="new name" onChange={(e)=>hundletext(setNname,e,(el.user_name))} />):el.user_name}</td>
                <td></td>
                <td className='td2_colla'>{editingUserId===el.id? (<Input placeholder="new pseudo" onChange={(e)=>hundletext(setNpseudo,e,(el.user_Pseudo))}/>):el.user_Pseudo}</td>
                <td></td>
                <td className='td2_colla'>{editingUserId===el.id?  (<Input placeholder="new phone" onChange={(e)=>hundletext(setNphone,e,(el.user_phone))}/>):el.user_phone}</td>
                <td></td>
                <td className='td2_colla'>{el.createdAt}</td>
                <td></td>
                <td className='td2_colla'>  <EditOutlined className='icon2_colla' onClick={()=>{ console.log(el.id); setNphone(el.user_phone); setNpseudo(el.user_Pseudo) ; setNname(el.user_name);setNlocation(el.user_location); setEditingUserId(el.id); handleshow(el.id,info)}} /> <DeleteOutlined onClick={()=>{deleteuser(el.id)}} className='icon3_colla' /> </td>
                </tr>
            <tr>
                <td colSpan="12">
                <hr />
            </td>
        </tr>        
            </>
        ))
    }      


  return (
<div>
      <div className='div_1colla'></div>
      <div className='div_2colla'>
        <h2 className='h2_1colla'>ALARMS SENT</h2>
      <div className='div_3colla'>
        <div className='div_4colla'>
        <Dropdown overlay={menu} className='drop1_colla' trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space >
              <p className='p1_colla'>Select Country</p>
              <DownOutlined className='icon1_colla'  />
            </Space>
          </a>
        </Dropdown>
        </div>
        <div className='div_5colla'>
        <Input placeholder="Select By Name" onChange={(e)=>{hundletext(setContname,e)}} className='input1_colla' /> 
        <Button type="primary" shape="circle" onClick={()=>{searchbyname(contnames);setShowserach(2) }} className='btn1_colla' icon={<SearchOutlined />} />
        </div>
        <div>
        
              <Button className='icon_colla0' onClick={()=>{handleButtonClick()}}>Add Alarm     +</Button>
            
        </div>
      </div>
      <div>
        <table className='table_colla'>
        <tr className="hr-row">
        <td colSpan="12">
            <hr />
        </td>
        </tr>           
             <tr>
                <td className='td1_colla'>Contry Name</td><span className='vertical_colla'>________</span>
                <td className='td1_colla'>Name</td><span className='vertical_colla'>________</span>
                <td className='td1_colla'>Phone</td><span className='vertical_colla'>________</span>
                <td className='td1_colla'>Message</td><span className='vertical_colla'>________</span>
                <td className='td1_colla'>Creation Date</td><span className='vertical_colla'>________</span>
                <td className='td1_colla'>Action</td>
            </tr>
                <tr className="hr-row">
                        <td colSpan="12">
                        <hr />
                    </td>
                </tr>              
                {showsearch==0&&users.map(el=>(
                    <>
                    <tr>
                <td className='td2_colla' >{editingUserId===el.id?(<Input   placeholder="new location" onChange={(e)=>hundletext(setNlocation,e,(el.user_location))}/>):el.user_location}</td>
                <td></td>
                <td className='td2_colla'>{editingUserId===el.id?  (<Input placeholder="new name" onChange={(e)=>hundletext(setNname,e,(el.user_name))} />):el.user_name}</td>
                <td></td>
                <td className='td2_colla'>{editingUserId===el.id?  (<Input placeholder="new phone" onChange={(e)=>hundletext(setNphone,e,(el.user_phone))}/>):el.user_phone}</td>
                <td></td>
                <td className='td2_colla'>Message</td>
                <td></td>
                <td className='td2_colla'>{el.createdAt}</td>
                <td></td>
                <td className='td2_colla'>  <EditOutlined className='icon2_colla' onClick={()=>{ console.log(el.id); setNphone(el.user_phone); setNpseudo(el.user_Pseudo) ; setNname(el.user_name);setNlocation(el.user_location); setEditingUserId(el.id); handleshow(el.id,info)}} /> <DeleteOutlined onClick={()=>{deleteuser(el.id)}} className='icon3_colla' /> </td>
                </tr>
                    <tr>
                        <td colSpan="12">
                        <hr />
                    </td>
                </tr>        
                    </>
                ))}
                {showsearch==1&&searchbyloc()}
                {showsearch==2&&searchbyname()}

        </table>
      </div>
      </div>
      {isPopupVisible && (<div className="bigdivpopup">
        <div className="containerpopup">
          <Button className="buttonpopup" onClick={handleClosePopup}>
            X
          </Button>
          <h1 className="h1popup">Add New Alarm</h1>
          <div className="contpopup">
        
            <div className='div_popup'>
                  <label for="subject"></label>
      <select onClick={(e) => e.preventDefault()} className='p1_colla' placeholder="Subject line" name="subject"  required>
        <option disabled hidden selected>Select Region</option>
        {locations.map((location) => (
            <option onClick={()=>{searchbyloc(location.user_location);setShowserach(1)}}>{location.user_location}</option>
          ))}
      </select>
                  </div>
            <div className='div_popup'>
                  <label for="subject"></label>
      <select onClick={(e) => e.preventDefault()} className='p1_colla' placeholder="Subject line" name="subject"  required>
        <option disabled hidden selected>Select Collaborator</option>
        (<option>{searchbyloc1(location.user_location)}</option>)
      </select>
                  </div></div>

                  <div className='div_popup1'>
                  <label for="subject"></label>
      <select className='p1_colla' placeholder="Subject line" name="subject"  required>
        <option disabled hidden selected>Subject line</option>
        <option>DeadLine Checking</option>
        <option>Question Asking</option>
        <option>proposal Making</option>
      </select>
                  </div>
            <Input className="inputpopup1" placeholder="ADD Message..." /><br /><br />
            <Button className="buttonpopup1">Add +</Button>
          
        </div>
        </div>
      )}      
    </div>
  )
}

export default SentAlarms