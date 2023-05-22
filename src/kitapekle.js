import React, { useState } from 'react'
import { Breadcrumb, Button, Layout, Space, theme, Input, Row, Col, Image } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import API from './api';
import kitaplar from './images/images.jpeg'
import TextArea from 'antd/es/input/TextArea';
import kitap8 from './images/kitap8.jpeg'
import FormData from 'form-data'


const { Header, Content, Footer } = Layout;
export default function Addbook() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [kitapAdi, setKitapAdi] = useState("")
    const [yazar, setYazar] = useState("")
    const [adres, setAdres] = useState("")
    const [ucret, setUcret] = useState("")
  const [uploadProgress, setProgress] = useState(0);
    const [resim, setResim] = useState()
    const kitapEkle = () => {

        if(resim){
            

            
            let formData = new FormData(); // instantiate it
            // suppose you have your file ready

            formData.append('file', resim);
            
            formData.append('username', sessionStorage.getItem('name'))
            formData.append('bookName', kitapAdi);
            formData.append('yazar', yazar);
            formData.append('adress', adres);
            formData.append('ucret', ucret);
            // add some data you collected from the input fields
            //formData.set('data1', dataInputField1); // suppose you got dataInputField1 from your HTML5 form input
            API.post('/addbookresim',formData, {
              headers: {
               'content-type': 'multipart/form-data' // do not forget this 
              }}).then((response)=>{
            
                  window.location.href = "/AnaSayfa"
                
                
              
            })  
        

        }}


    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Space>
                    <ReadOutlined style={{ color: 'white' }} />
                    <Space style={{ color: 'white' }}> Kütüphane </Space>
                    <Button style={{ marginLeft: '50px' }} type="primary"  danger onClick={() => window.location.href = "/Anasayfa"}>İptal</Button></Space>

            </Header>
            <Content style={{ padding: '0 50px', height: '100%', }}>

                <div className="site-layout-content" style={{ height: '100%' }}>
                    <Row style={{ height: '100%' }}>
                        <Col span={8}></Col>
                        <Col span={8}>
                            <div style={{ marginBottom: 'auto' }}>
                                <Space direction='vertical'><Space direction="vertical" size="middle" style={{ alignItems: 'end', position: 'fixed', marginTop: '1%', marginLeft: '5%' }}>
                                    <Space >
                                        <ReadOutlined />
                                        <h1 style={{ fontSize: '2em' }} >Kitap Ekle</h1>

                                    </Space>
                                    <Space >
                                        <label>Kitap Adı:</label>
                                        <Input placeholder="Kitap Adı" onChange={(e) => { setKitapAdi(e.target.value) }} />
                                    </Space>
                                    <Space >
                                        <label>Yazar:</label>
                                        <Input placeholder="Yazar adı" onChange={(e) => { setYazar(e.target.value) }} />
                                    </Space>
                                    <Space >
                                        <label>Kitap Ücreti:</label>
                                        <Input placeholder="100 TL - Ücretsiz" onChange={(e) => { setUcret(e.target.value) }} />
                                    </Space>
                                    <Space >
                                        <label>Adres:</label>
                                        <TextArea placeholder="Adres" onChange={(e) => { setAdres(e.target.value) }} />
                                    </Space>

                                    <Space direction="vertical" size="middle" style={{ position: 'relative' }}>


                                        <label>Resim Dosyası seçiniz:</label>
                                        <input type="file" id="myFile" name="filename" accept="image/*" onChange={(e)=>{setResim(e.target.files[0])}}></input>

                                    </Space>
                                    <Space style={{ width: '100%' }}>
                                        <Button style={{ width: '100px' }} onClick={kitapEkle} type="primary" >Kitap Ekle</Button>
                                    </Space>
                                    </Space>


                                </Space>

                            </div>

                        </Col>
                        <Col span={8}>
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
