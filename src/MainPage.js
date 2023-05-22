import React, { useState , useEffect} from 'react'
import { Breadcrumb, Button, Layout, Space, theme, Input, Row, Col, Image } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import API from './api';
import kitaplar from './images/images.jpeg'
import kitap1 from './images/kitap1.jpeg'
import kitap2 from './images/kitap2.jpeg'
import kitap3 from './images/kitap3.png'
import kitap4 from './images/kitap4.jpeg'
import kitap5 from './images/kitap5.jpeg'
import kitap6 from './images/kitap6.jpeg'
import kitap7 from './images/kitap7.jpeg'
import kitap8 from './images/kitap8.jpeg'
const { Header, Content, Footer } = Layout;
export default function MainPage() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [kitaplar,setKitaplar] = useState([])
        
    useEffect(() => {
    var loginJson= {
            kullanici:sessionStorage.getItem('name'),
        }
        API.post("/getBooks", loginJson).then((response)=>{
            
              setKitaplar(response.data)
            
          })  
        },[]);
    return (
        <Layout className="layout" style={{  background:'#f5fffa' }}>
            <Header style={{ textAlign: 'center', top: '0px', position: 'fixed', width: '100%' }}>
                <div className="logo" />
                <Space >
                    <ReadOutlined style={{ color: 'white' }} />
                    <Space style={{ color: 'white' }}> Kütüphane </Space>
                    <Space style={{ color: 'white', marginLeft:'900px'}}> Kullanıcı </Space>
                    <Button href="/KitapEkle" type="primary"  style={{ marginLeft: '10px' }}>Kitap Ekle</Button>
                    <Button type="primary" danger style={{ marginLeft: '20px' }} onClick={()=> window.location.href = "/" }>Çıkış yap</Button></Space>

            </Header>
            
            <Content style={{ padding: '120px', height: '100%', background:'#f5fffa' }}>

                <div className="site-layout-content" style={{ height: '100%', background:'#f5fffa' }}>
                    <Row style={{ height: '100%',background:'#f5fffa' }}>
                       {kitaplar.map((val)=>{
                        console.log(val)
                        return(<Col style={{  background:'#f5fffa' }}span={6}> <a href={"http://localhost:3000/kitapSayfasi?id="+val[6]}><Space direction='vertical' >
                        <Space style={{  background:'#f5fffa' }}><img width="150" height="200" src={val[3]}></img>
                            
                            </Space>
                            <Space direction='vertical' style={{  background:'#f5fffa' }}>
                                <Space style={{  background:'#f5fffa' }} > <h3 style={{ marginBottom:'-10px'}}>{val[0]}</h3></Space>
                                <Space style={{  background:'#f5fffa' }}> <h3 style={{ textAlign:'center'}}>{val[5]}</h3></Space>
                            
                               
                                </Space>
                            </Space> 
                            </a>
                        </Col>)
                            

                       })}
                        
                      
                    
                       
                    </Row>
                   
                    
                   
                    
                </div>
            </Content>
            <Footer style={{ textAlign: 'center', bottom: '0px', position: 'fixed', width: '100%' }}>Kütüphane ©2023 </Footer>
        </Layout>
    )
}
