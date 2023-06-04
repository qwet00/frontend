import React, { useEffect, useState } from 'react'
import { Breadcrumb, Button, Layout, Space, theme, Input, Row, Col, Image } from 'antd';
import { ReadOutlined, SendOutlined } from '@ant-design/icons';
import { useLocation } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import API from './api';

const { Header, Content, Footer } = Layout;
export default function Messages() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [mesaj, setMesaj] = useState("")
    const [mesajlar, setMesajlar] = useState([])
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const navigate = useNavigate();


    useEffect(() => {
        var mesajJson = {
            gonderen: sessionStorage.getItem("name"),
            alan: params.get('user'),
        }

        const interval = setInterval(() => {
            API.post("/getmessages", mesajJson).then((response) => {

                setMesajlar(response.data)
            })
        }, 1000);
    }, []);

    

    useEffect(() => {
// allow 1px inaccuracy by adding 1
var element = document.getElementById("out");
        element.scrollTop = element.scrollHeight;
    }, [mesajlar.length]);

  

    const send_Message = () => {


        var mesajJson = {
            gonderen: sessionStorage.getItem("name"),
            alan: params.get('user'),
            icerik: mesaj
        }
        API.post("/sendmessage", mesajJson).then((response) => {

            console.log(response.data)
            setMesaj("")

        })



    }
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Space>
                    <ReadOutlined style={{ color: 'white' }} />
                    <Space style={{ color: 'white' }}> Kütüphane </Space>
                    <Button style={{ marginLeft: '50px' }} type="primary" danger onClick={() => window.location.href = "/Anasayfa"}>Ana Sayfa</Button>
                    <Button style={{ marginLeft: '50px' }} type="primary" onClick={() => navigate(-1)}>Kitap Sayfası</Button></Space>

            </Header>
            <Content style={{ padding: '0 50px', height: '100%', background: 'white' }}>

                <div className="site-layout-content" style={{ height: '100%', background: 'white' }}>

                    <Row style={{ height: '100%' }}>


                        <Col span={8}></Col>
                        <Col span={8}>



                            <Row>
                                <Space>
                                    <ReadOutlined /><h1 style={{ fontSize: '2em' }}>{params.get('user').toUpperCase()} ile Mesajlaş</h1></Space></Row>


                            <div id = 'out'  style={{ overflow:'auto', height: '500px' }}> {
                                mesajlar.map((val) => {
                                    if (val[0] == sessionStorage.getItem("name")) {

                                        return (
                                            <Row style={{ background: '#ffebcd', marginLeft: 130, borderRadius: '155px', marginTop: '10px' }}>
                                                <p style={{ margin: '15px' }}>{val[2]}</p>
                                            </Row>
                                        )
                                    } else {
                                        return (
                                            <Row style={{ background: '#79cdcd', marginRight: 130, borderRadius: '155px', marginTop: '10px' }}>
                                                <p style={{ margin: '15px' }}>{val[2]}</p>
                                            </Row>
                                        )

                                    }
                                })



                            }
                            </div>




                            <input style={{ bottom: '130px', position: 'fixed', width: '410px', height: '30px', }} value={mesaj} onChange={(e) => { setMesaj(e.target.value) }}></input><SendOutlined style={{ bottom: '130px', position: 'fixed', marginLeft: '390px', height: '1.5em' }} />
                            <Button style={{ bottom: '90px', position: 'fixed', width: '90px', height: '30px', marginLeft: '160px' }} onClick={send_Message}>Gönder</Button>
                        </Col>

                        <Col span={8}></Col>



                    </Row>

                </div>
            </Content >
            <Footer style={{ textAlign: 'center', bottom: '0px', position: 'fixed', width: '100%' }}>Kütüphane ©2023 </Footer>
        </Layout >
    )
}
