import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Button, Flex } from 'antd';

function loging() {
  return (
    <div className='bigdiv_logo'>
        <div className='div1_login'>
            <img className='img_logo'  src="https://cdn.discordapp.com/attachments/1191780458074230886/1192873302625099827/Capture_d_ecran_2024-01-04_161046-removebg-preview.png?ex=65aaa8d5&is=659833d5&hm=7388a94ef9dce62cc8861b6718d02c6d276e8dff82567fe09bfcc431654177be&" alt="" />
        </div>
        <div><h1 className=''>hdgdgdgdg</h1></div>
        <div className='div2_login'>
            <h2 className='h2_login'>Sarbini</h2><p className='p_login' >your safety network</p>
            <div className='div3_login' ><h1 className='h1_login' >Login</h1><hr /><p className='p2_login'>sign into your account</p></div>
            <Input size="large" className='input_login' placeholder="Pseudo" prefix={<UserOutlined />} />
            <Input size="large" className='input_login' placeholder="Pasword" />
            <Flex className='flex_login'  gap="small" wrap="wrap">
            <Button className='button_login'>Login</Button>
            </Flex>
        </div>
    </div>
  )
}

export default loging