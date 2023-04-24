import React from 'react'
import { Breadcrumb, Button, Layout, Space, theme, Input, Row, Col, Image } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
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
    return (
        <Layout className="layout">
            <Header style={{ textAlign: 'center', top: '0px', position: 'fixed', width: '100%' }}>
                <div className="logo" />
                <Space >
                    <ReadOutlined style={{ color: 'white' }} />
                    <Space style={{ color: 'white' }}> Kütüphane </Space>
                    <Space style={{ color: 'white', marginLeft:'900px'}}> Kullanıcı </Space>
                    <Button type="primary"  style={{ marginLeft: '10px' }}>Hesabım</Button>
                    <Button type="primary" danger style={{ marginLeft: '20px' }} onClick={()=> window.location.href = "/" }>Çıkış yap</Button></Space>

            </Header>
            <Content style={{ padding: '120px', height: '100%', }}>

                <div className="site-layout-content" style={{ height: '100%' }}>
                    <Row style={{ height: '100%' }}>
                       
                        <Col span={6}> <a href=""><Space direction='vertical' >
                        <Space><img width="150" height="200" src={kitap1}></img>
                            
                            </Space>
                            <Space direction='vertical' >
                                <Space > <h3 style={{ marginBottom:'-10px'}}>Kürk Mantolu Madonna</h3></Space>
                                <Space> <h3 style={{ textAlign:'center'}}>40 tl</h3></Space>
                            
                               
                                </Space>
                            </Space> 
                            </a>
                        </Col>
                        <Col span={6}> <a href=""><Space direction='vertical' >
                        <Space><img width="150" height="200" src={kitap2}></img>
                            
                            </Space>
                            <Space direction='vertical' >
                                <Space align='center'> <h3 style={{ textAlign:'center', marginBottom:'-10px'}}>Harry Potter Kitap Serisi</h3></Space>
                                 <Space> <h3 style={{ textAlign:'center'}}>250 tl</h3></Space>
                            
                               
                                </Space>
                            </Space> 
                            </a>
                        </Col>
                        <Col span={6}> <a href=""><Space direction='vertical' >
                        <Space><img width="150" height="200" src={kitap3}></img>
                            
                            </Space>
                            <Space direction='vertical' >
                                <Space align='center'> <h3 style={{ textAlign:'center', marginBottom:'-10px'}}>Romeo ve Juliet</h3></Space>
                                <Space> <h3 style={{ textAlign:'center'}}>Ücretsiz</h3></Space>
                            
                               
                                </Space>
                            </Space> 
                            </a>
                        </Col>
                        <Col span={6}> <a href=""><Space direction='vertical' >
                        <Space><img width="150" height="200" src={kitap4}></img>
                            
                            </Space>
                            <Space direction='vertical' >
                                <Space align='center'> <h3 style={{ textAlign:'center', marginBottom:'-10px'}}>Hayvan Çiftliği</h3></Space>
                                <Space> <h3 style={{ textAlign:'center'}}>Ücretsiz</h3></Space>
                            
                               
                                </Space>
                            </Space> 
                            </a>
                        </Col>
                        
                       
                    </Row>
                    <Row style={{ height: '100%' }}>
                       
                        <Col span={6}> <a href=""><Space direction='vertical' >
                        <Space><img width="150" height="200" src={kitap5}></img>
                            
                            </Space>
                            <Space direction='vertical' >
                                <Space > <h3 style={{ marginBottom:'-10px'}}>Denizler Altında 20 Bin Fersah</h3></Space>
                                <Space> <h3 style={{ textAlign:'center'}}>80 tl</h3></Space>
                            
                               
                                </Space>
                            </Space> 
                            </a>
                        </Col>
                        <Col span={6}> <a href=""><Space direction='vertical' >
                        <Space><img width="150" height="200" src={kitap6}></img>
                            
                            </Space>
                            <Space direction='vertical' >
                                <Space align='center'> <h3 style={{ textAlign:'center', marginBottom:'-10px'}}> Küçük Prens</h3></Space>
                                 <Space> <h3 style={{ textAlign:'center'}}>Ücretsiz</h3></Space>
                            
                               
                                </Space>
                            </Space> 
                            </a>
                        </Col>
                        <Col span={6}> <a href=""><Space direction='vertical' >
                        <Space><img width="150" height="200" src={kitap7}></img>
                            
                            </Space>
                            <Space direction='vertical' >
                                <Space align='center'> <h3 style={{ textAlign:'center', marginBottom:'-10px'}}>Güliverin Gezileri</h3></Space>
                                <Space> <h3 style={{ textAlign:'center'}}>Ücretsiz</h3></Space>
                            
                               
                                </Space>
                            </Space> 
                            </a>
                        </Col>
                        <Col span={6}> <a href=""><Space direction='vertical' >
                        <Space><img width="150" height="200" src={kitap8}></img>
                            
                            </Space>
                            <Space direction='vertical' >
                                <Space align='center'> <h3 style={{ textAlign:'center', marginBottom:'-10px'}}>Alice Harikalar Diyarında</h3></Space>
                                <Space> <h3 style={{ textAlign:'center'}}>50 tl</h3></Space>
                            
                               
                                </Space>
                            </Space> 
                            </a>
                        </Col>
                        
                       
                    </Row>
                    
                   
                    
                </div>
            </Content>
            <Footer style={{ textAlign: 'center', bottom: '0px', position: 'fixed', width: '100%' }}>Kütüphane ©2023 </Footer>
        </Layout>
    )
}
