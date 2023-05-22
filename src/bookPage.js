import React, { useEffect, useState } from 'react'
import { Breadcrumb, Button, Layout, Space, theme, Input, Row, Col, Image } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import API from './api';
import kitaplar from './images/images.jpeg'
import TextArea from 'antd/es/input/TextArea';
import kitap8 from './images/kitap8.jpeg'
import FormData from 'form-data'
import { useLocation } from "react-router-dom"

const { Header, Content, Footer } = Layout;
export default function BookPage() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [kitapAdi, setKitapAdi] = useState("")
    const [yazar, setYazar] = useState("")
    const [adres, setAdres] = useState("")
    const [ucret, setUcret] = useState("")
  const [uploadProgress, setProgress] = useState(0);
    const [resim, setResim] = useState()
    const [kitap,setKitap] = useState([])
    const location = useLocation()
    const params = new URLSearchParams(location.search)
   
    useEffect(() => {
            var loginJson= {
                id:params.get("id"),
            }
            // Update the document title using the browser API
            API.post("/getBook", loginJson).then((response)=>{
            
                setKitap(response.data[0])
                console.log(kitap)
            }) 
        },[]);
       
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Space>
                    <ReadOutlined style={{ color: 'white' }} />
                    <Space style={{ color: 'white' }}> Kütüphane </Space>
                    <Button style={{ marginLeft: '50px' }} type="primary"  danger onClick={() => window.location.href = "/Anasayfa"}>Ana Sayfa</Button></Space>

            </Header>
            <Content style={{ padding: '0 50px', height: '100%',background:'white' }}>

                <div className="site-layout-content" style={{ height: '100%' ,background:'white'}}>
                    <Row style={{ height: '100%' }}>
                        <Col span={8} style={{background:'white'}}>
                        <div style={{ marginBottom: 'auto' }}>
                                <Space direction='vertical'><Space direction="vertical" style={{ alignItems: 'end', position: 'fixed', marginTop: '7%', marginLeft: '5%' }}>
                                    <Space >
                                      

                                    </Space>
                                    
                                    <Space >
                                        <label style={{ fontSize: '1.5em' }}>Kitap Adı:</label>
                                        <p style={{ fontSize: '1.5em' }} >{kitap[0]}</p>
                                    </Space>
                                    <Space >
                                        <label style={{ fontSize: '1.5em' }}>Yazar:</label>
                                        <h2 style={{ fontSize: '1.5em' }} >{kitap[1]}</h2>
                                    </Space>
                                    <Space >
                                        <label style={{ fontSize: '1.5em' }}>Kitap Ücreti:</label>
                                        <h2 style={{ fontSize: '1.5em' }} >{kitap[5]}</h2>
                                    </Space>
                                    <Space >
                                        <label style={{ fontSize: '1.5em' }}>Kitap Sahibi:</label>
                                        <h2 style={{ fontSize: '1.5em' }}>{kitap[4]}</h2>
                                    </Space>
                                    <Space >
                                        <label style={{ fontSize: '1.5em' }}>Adresi:</label>
                                        <p style={{ fontSize: '1em' }} >{kitap[2]}</p>
                                    </Space>
                                    <Space >
                                        <Button type='primary' >Mesaj At</Button>
                                    </Space>

                                    </Space>


                                </Space>

                            </div>

                        </Col>
                        <Col span={12} style={{background:'white', marginTop:'8%'}}>
                            <img width="400" height="525" src ={kitap[3]}></img>
                        </Col>
                        <Col span={4}>
                            {/* 
                        <Image src={kitap8}  style={{position:'static'}}></Image> */}
                        </Col>
                    </Row>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center', bottom: '0px', position: 'fixed', width: '100%' }}>Kütüphane ©2023 </Footer>
        </Layout>
    )
}
