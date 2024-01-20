
import React, { useState, useEffect } from "react";
import { Button, Form, Input, Modal, Steps, Checkbox } from "antd";
import pross from '../../imgs/pross.png'
import unpross from '../../imgs/unpross.png'


import MintStyle from "./style";

const Mint = () => {
    const [activeNav, setActiveNav] = useState(1)
    const [isShowView, setIsShowView] = useState(false)
    const [isShowCheck, setIsShowCheck] = useState(false)

    const [form] = Form.useForm()
    const description = 'This is a description.';
    const handleView = () => {


    }
    const handleChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    useEffect(() => {


    }, [])

    return (
        <MintStyle>
            <Modal className="view-dialog check-dialog" style={{ width: '70%' }} title="Inscribe Progress" open={isShowCheck}
                footer={null}
                onCancel={() => {
                    setIsShowCheck(false)
                }}>
                <Steps
                    direction="vertical"
                    current={2}
                    items={[
                        {
                            title: 'Connect Wallet',
                            status: 'finish',
                            icon: <img className="progress" src={pross} alt="" />
                        },
                        {
                            title: 'Check UTXOs',
                            status: 'finish',
                            icon: <img className="progress" src={pross} alt="" />
                        },
                        {
                            title: 'Building Transactions',
                            status: 'finish',
                            icon: <img className="progress" src={pross} alt="" />
                        },
                        {
                            title: 'Sign and push commit transactions',
                            status: 'finish',
                            icon: <img className="progress" src={pross} alt="" />
                        },
                        {
                            title: 'Push reveal transactions',
                            status: 'wait',
                            icon: <img className="progress" src={unpross} alt="" />
                        },
                    ]}
                />
            </Modal>
            <Modal className="view-dialog" style={{ width: '70%' }} title="Preview" open={isShowView} onOk={handleView}
                footer={null}
                onCancel={() => {
                    setIsShowView(false)
                }}>
                <Form form={form} name="control-hooks" className="mint-form">
                    <Form.Item
                        label="Operation Type"
                        name="realm-type"
                    >
                        <Input placeholder="Enter mint realm" />
                    </Form.Item>
                    <Form.Item
                        className="atom-id"
                        label="Mint Args"
                        name="realm-value"
                    >
                        <div className="realm-json">
                            <p>
                                {
                                    `{
                                    "mint_amount": 1000,
                                    "mint_height": 822780,
                                    "max_mints": 21000,
                                    "mint_bitworkc": "0000",
                                    "request_ticker": "photon",
                                    "bitworkc": "0000",
                                    "nonce": "24159606",
                                    "time": 1703445437
                            }`
                                }
                            </p>
                        </div>
                    </Form.Item>

                    <Form.Item
                        label='Fee'
                        name="fee"
                        className='fee'
                    >
                        <div className="trans-box">
                            <div className="trans-mid" tabindex="1">
                                <p className="trans-name">Slow</p>
                                <p className="trans-value">20 Sat/vB ~ 3 Hours</p>
                            </div>
                            <div className="trans-mid" tabindex="2">
                                <p className="trans-name">Average</p>
                                <p className="trans-value">20 Sat/vB ~ 3 Hours</p>
                            </div>
                            <div className="trans-mid" tabindex="3">
                                <p className="trans-name">Fast</p>
                                <p className="trans-value">20 Sat/vB ~ 3 Hours</p>
                            </div>
                            <div className="trans-mid" tabindex="4">
                                <p className="trans-name">Custom</p>
                                <Input />
                            </div>
                        </div>

                    </Form.Item>

                    <Form.Item
                        label="Sats in inscription"
                        name="inscript"
                        className="inscript"
                    >
                        <span className="sats-font">2,000 Sats</span>
                        <span className="sats-font" style={{ textAlign: "right", color: "#FE6D46" }}>～$ 0.02</span>
                    </Form.Item>
                    <Form.Item
                        label="Commit transaction fee"
                        name="commit"
                        className="inscript"
                    >
                        <span className="sats-font">2,000 Sats</span>
                        <span className="sats-font" style={{ textAlign: "right", color: "#FE6D46" }}>～$ 0.02</span>
                    </Form.Item>
                    <Form.Item
                        label="Reveal transaction fee"
                        name="reveal"
                        className="inscript"
                    >
                        <span className="sats-font">2,000 Sats</span>
                        <span className="sats-font" style={{ textAlign: "right", color: "#FE6D46" }}>～$ 0.02</span>
                    </Form.Item>
                    <Form.Item
                        label="Service fee"
                        name="servefee"
                        className="inscript"
                    >
                        <span className="sats-font">2,000 Sats</span>
                        <span className="sats-font" style={{ textAlign: "right", color: "#FE6D46" }}>～$ 0.02</span>
                    </Form.Item>
                    <Form.Item
                        label="Total"
                        name="total"
                        className="inscript"
                    >
                        <span className="sats-font">2,000 Sats</span>
                        <span className="sats-font" style={{ textAlign: "right", color: "#FE6D46" }}>～$ 0.02</span>
                    </Form.Item>
                    <Form.Item
                        label="Receive address"
                        name="receive-add"
                    >
                        <Input />
                    </Form.Item>
                </Form>
                <div style={{ display: "flex" }}>
                    <Button className="ant-btn-primary">Inscribe</Button>
                    <Button className="ant-btn-primary ant-btn-pre">Previous</Button>
                </div>
            </Modal>
            <div className="flex-container">

                <div className="wallet-nav-list send-nav-list">
                    <div className={"nav-item send-item " + (activeNav == 1 ? "active" : "")} onClick={() => {
                        setActiveNav(1)
                    }}>
                        Realm
                    </div>
                    <div className={"nav-item send-item " + (activeNav == 2 ? "active" : "")} onClick={() => {
                        setActiveNav(2)
                    }}>
                        FT
                    </div>
                    <div className={"nav-item send-item " + (activeNav == 3 ? "active" : "")} onClick={() => {
                        setActiveNav(3)
                    }}>
                        NFT
                    </div>
                    <div className={"nav-item send-item " + (activeNav == 4 ? "active" : "")} onClick={() => {
                        setActiveNav(4)
                    }}>
                        DMint
                    </div>
                </div>

                {activeNav == 1 && <div className="panel-box">
                    <div className="realm-data">
                        <div className="realm-mid">
                            <Form>
                                <div className="realm-boxes">
                                    <Form.Item
                                        label="Realm"
                                        name="realm"
                                        className="realm-check"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter realm and then check.',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Enter mint realm" />

                                    </Form.Item>
                                    <Button className="check-btn" onClick={() => { setIsShowCheck(true) }}>Check</Button>
                                </div>
                                <Form.Item
                                    label="Bitword Commit"
                                    name="bitword"
                                >
                                    <Input placeholder="Enter bitwordc" />
                                </Form.Item>
                                <Form.Item
                                    label="Sats"
                                    name="sats"
                                >
                                    <Input placeholder="Enter Sats" />
                                </Form.Item>
                                <div className="check-bx">

                                    <Checkbox className="checkboxes" onChange={handleChange} />
                                    <span className="rece-add">Receive by other address</span>
                                </div>
                                <Form.Item
                                    label="Receive Address"
                                    name="address"
                                >
                                    <Input placeholder="Enter receive address" />
                                </Form.Item>
                            </Form>
                            <Button className="ant-btn-primary" onClick={() => { setIsShowView(true) }}>Preview</Button>
                        </div>

                    </div>
                </div>
                }
            </div>

        </MintStyle>
    )
}
export default Mint