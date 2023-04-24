import React, { useState } from 'react'
import { Breadcrumb, Button, Layout, Space, theme, Input, Row, Col, Image } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import API from './api';
import kitaplar from './images/images.jpeg'
const { Header, Content, Footer } = Layout;
export default function Regsiter() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [kullaniciAdi,setKullaniciAdi] = useState("")
    const [sifre,setSifre] = useState("")
    const [sifre2,setSifre2] = useState("")
    const kayit = () => {
        if(sifre != sifre2){

            alert("Şifreler Uyuşmuyor")
        }else{
            var kayitJson= {
                userName:kullaniciAdi,
                password: sifre
            }
            API.post("/register", kayitJson).then((response)=>{
                
                  alert(response.data)
                
              })   

        }
        

    }


    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Space>
                    <ReadOutlined style={{ color: 'white' }} />
                    <Space style={{ color: 'white' }}> Kütüphane </Space>
                    <Button style={{ marginLeft: '25px' }} onClick={()=> window.location.href = "/" }>Kullanıcı Girişi</Button></Space>

            </Header>
            <Content style={{ padding: '0 50px', height: '100%', }}>

                <div className="site-layout-content" style={{ height: '100%' }}>
                    <Row style={{ height: '100%' }}>
                        <Col span={8}></Col>
                        <Col span={8}>
                            <div style={{ marginBottom: 'auto' }}>
                                <Space direction="vertical" size="middle" style={{ display: 'flex', alignItems: 'end', position: 'fixed', marginTop: '10%', marginLeft: '5%' }}>
                                    <Space >
                                        <ReadOutlined />
                                        <h1 style={{fontSize:'2em'}} >Kullanıcı Oluştur</h1>

                                    </Space>
                                    <Space >
                                        <label>Kullanıcı Adı:</label>
                                        <Input placeholder="Kullanıcı Adı" onChange={(e)=>{setKullaniciAdi(e.target.value)}}/>
                                    </Space>
                                    <Space >
                                        <label>Şifre:</label>
                                        <Input placeholder="Şifre" type='password' onChange={(e)=>{setSifre(e.target.value)}}/>
                                    </Space>
                                    <Space >
                                        <label>Şifre Yeniden:</label>
                                        <Input placeholder="Şifre" type='password' onChange={(e)=>{setSifre2(e.target.value)}}/>
                                    </Space>
                                    <Space style={{ width: '100%' }}>
                                        <Button style={{ width: '100px' }} onClick={kayit} >Kayıt Ol</Button>
                                    </Space>
                                    
                                   
                                </Space>
                            </div>
                        </Col>
                        <Col span={8}>


                        </Col>
                    </Row>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center', bottom: '0px', position: 'fixed', width: '100%' }}>Kütüphane ©2023 </Footer>
        </Layout>
    )
}
