import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { Input } from 'antd';
import { SearchOutlined ,DeleteOutlined ,EditOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';


function Collaborators() {
    const[users,setUsers]=useState([])
    const[locations,setlocations]=useState([])
    const[contnames,setContnames]=useState([])
    const[showupdate,setShowupdate]=useState(true)
    const[nlocation,setNlocation]=useState("")
    const[nname,setNname]=useState("")
    const[npseudo,setNpseudo]=useState("")
    const[nphone,setNphone]=useState(null)

    let info={
        user_name:nname,
        user_Pseudo:npseudo,
        user_phone:nphone,
        user_location:nlocation,
    }

    useEffect(()=>{
        getcontrollers()
        getlocations()
        getcontnames()
    },[users])

    const getlocations=()=>{
        axios.get('http://localhost:3000/api/sarbini/admin/locations')
        .then((res)=>{
            setlocations(res.data)
            console.log(res.data);
        })
        .catch((err)=>{
            console.error(err);
        })
    }

    const getcontnames=()=>{
        axios.get('http://localhost:3000/api/sarbini/admin/byname')
        .then((res)=>{
            setContnames(res.data)
            console.log(res.data);
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
        })
        .catch((err)=>console.log(err))
      }
      const deleteuser=(id)=>{
        axios.delete('http://localhost:3000/api/sarbini/admin/delete/'+id)
        .then(()=>{
            console.log("deletes");
        })
        .catch((err)=>console.error(err))
      }

      const menu = (
        <Menu>
          {locations.map((location) => (
            <Menu.Item>{location.user_location}</Menu.Item>
          ))}
        </Menu>  ) 

        const  handleshow=(id,info)=>{
            if(showupdate===true){
                setShowupdate(false)
            }
            else{
                updateuser(id,info)
                setShowupdate(true)
            }
        }
        const hundletext=(set,e)=>{
            set(e.target.value)
          }
  return (
<div>

      <div className='div_1colla'></div>
      <div className='div_2colla'>
        <h2 className='h2_1colla' >USER APP INSTALLED</h2>
      <div className='div_3colla'>
        <div className='div_4colla'>
        <Dropdown overlay={menu} className='drop1_colla' trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space >
              <p className='p1_colla'>select country</p>
              <DownOutlined className='icon1_colla'  />
            </Space>
          </a>
        </Dropdown>
        </div>
        <div className='div_5colla'>
        <Input placeholder="Select By Name" className='input1_colla' /> 
        <Button type="primary" shape="circle" className='btn1_colla' icon={<SearchOutlined />} />
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
                <td className='td1_colla'>Pseudo</td><span className='vertical_colla'>________</span>
                <td className='td1_colla'>Phone</td><span className='vertical_colla'>________</span>
                <td className='td1_colla'>Creation Date</td><span className='vertical_colla'>________</span>
                <td className='td1_colla'>Action</td>
            </tr>
                <tr className="hr-row">
                        <td colSpan="12">
                        <hr />
                    </td>
                </tr>              
                {users.map(el=>(
                    <>
                    <tr>
                    <td className='td2_colla' >{showupdate&&el.user_location}{!showupdate&&<Input  placeholder="new location" onChange={(e)=>hundletext(setNlocation,e)}  />}</td>
                    <td></td>
                    <td className='td2_colla'>{showupdate&&el.user_name}{!showupdate&&<Input placeholder="new name" onChange={(e)=>hundletext(setNname,e)} />}</td>
                    <td></td>
                    <td className='td2_colla'>{showupdate&&el.user_Pseudo}{!showupdate&&<Input placeholder="new pseudo" onChange={(e)=>hundletext(setNpseudo,e)}/>}</td>
                    <td></td>
                    <td className='td2_colla'>{showupdate&&el.user_phone}{!showupdate&&<Input placeholder="new phone" onChange={(e)=>hundletext(setNphone,e)}/>}</td>
                    <td></td>
                    <td className='td2_colla'>{el.createdAt}</td>
                    <td></td>
                    <td className='td2_colla'>  <EditOutlined className='icon2_colla' onClick={()=>{handleshow(el.id,info)}} /> <DeleteOutlined onClick={()=>{deleteuser(el.id)}} className='icon3_colla' /> </td>
                    </tr>
                    <tr>
                        <td colSpan="12">
                        <hr />
                    </td>
                </tr>        
                    </>
                ))}
        </table>
      </div>
      </div>
    </div>
  )
}

export default Collaborators