
import { Button, Form, Input } from "antd";
import React, { useState, useEffect } from "react";
import deletes from '../../imgs/delete.png';
import btc from '../../imgs/BTC.png';
import nft from '../../imgs/nft.png';


import SendStyle from "./style";

const Send = () => {

    const [activeNav, setActiveNav] = useState(1)
    const [form] = Form.useForm()

    return (
        <SendStyle>
            <div className="flex-container">

                <div className="wallet-nav-list send-nav-list">
                    <div className={"nav-item send-item " + (activeNav == 1 ? "active" : "")} onClick={() => {
                        setActiveNav(1)
                    }}>
                        Send BTC
                    </div>
                    <div className={"nav-item send-item " + (activeNav == 2 ? "active" : "")} onClick={() => {
                        setActiveNav(2)
                    }}>
                        Send FT
                    </div>
                    <div className={"nav-item send-item " + (activeNav == 3 ? "active" : "")} onClick={() => {
                        setActiveNav(3)
                    }}>
                        Send NFT
                    </div>
                    <div className={"nav-item send-item " + (activeNav == 4 ? "active" : "")} onClick={() => {
                        setActiveNav(4)
                    }}>
                        Send Realm
                    </div>
                </div>

                {activeNav == 1 && <div className="panel-box">
                    <div className="receive-data">

                        <Form form={form} name="control-hooks" className="form">
                            <div className="receive-mid">
                                <Form.Item
                                    label="Receiver"
                                    name="btc-receive"
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Amount(BTC)"
                                    name="btc-amount"
                                >
                                    <Input />
                                </Form.Item>
                                <div style={{ margin: '50px auto' }}>

                                    <img src={deletes} style={{ width: '20px' }} />
                                </div>

                            </div>
                            <Button className="add-btn">
                                <span>Add Receiver And Amount</span>
                            </Button>
                            <div className="trans-speed">
                                <p className="trans-title">Balance</p>
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
                            </div>
                            <div className="wallet-box">
                                <div className="wallet-mid">
                                    <p className="wallet-name">Wallet Balance</p>
                                    <img src={btc} className="btc-img" /><span>0.0002140000</span>
                                </div>
                                <div className="wallet-mid">
                                    <p className="wallet-name">Amount</p>
                                    <img src={btc} className="btc-img" /><span>0.0000</span>
                                </div>
                            </div>
                            <Button className="ant-btn-primary">Confirm</Button>
                        </Form>
                    </div>
                </div>
                }

                {activeNav == 3 && <div className="panel-box">
                    <div className="receive-data">
                        <Form form={form} name="control-hooks" className="form">
                            <div className="nft-mid">
                                <p className="nft-font">Choose NFT</p>
                                <div className="nft-imgbox">
                                    <div className="img-mid" tabIndex="1" >
                                        <img className="nft-img" />
                                        <div className="img-id">
                                            <span className="img-name"># 0333</span>
                                            <div>
                                                <img src={nft} className="nfticon-img" />
                                                <span className="img-value">1,0000</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img-mid" tabIndex="2" >
                                        <img className="nft-img" />
                                        <div className="img-id">
                                            <span className="img-name"># 0333</span>
                                            <div>
                                                <img src={nft} className="nfticon-img" />
                                                <span className="img-value">1,0000</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img-mid" tabIndex="3">
                                        <img className="nft-img" />
                                        <div className="img-id">
                                            <span className="img-name"># 0333</span>
                                            <div>
                                                <img src={nft} className="nfticon-img" />
                                                <span className="img-value">1,0000</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img-mid" tabIndex="4">
                                        <img className="nft-img" />
                                        <div className="img-id">
                                            <span className="img-name"># 0333</span>
                                            <div>
                                                <img src={nft} className="nfticon-img" />
                                                <span className="img-value">1,0000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Form.Item
                                    label="Receive Address"
                                    name="nft-address"
                                >
                                    <Input placeholder="Enter Receive Address" />
                                </Form.Item>
                            </div>
                            <div className="wallet-box">
                                <div className="wallet-mid">
                                    <p className="wallet-name">Sats In NFT</p>
                                    <img src={nft} className="btc-img" /><span>10,000</span>
                                </div>
                            </div>
                            <div className="trans-speed">
                                <p className="trans-title">Balance</p>
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
                            </div>
                            <div className="wallet-box">
                                <div className="wallet-mid">
                                    <p className="wallet-name">Wallet Balance</p>
                                    <img src={btc} className="btc-img" /><span>0.0002140000</span>
                                </div>
                                <div className="wallet-mid">
                                    <p className="wallet-name">Amount</p>
                                    <img src={btc} className="btc-img" /><span>0.0000</span>
                                </div>
                            </div>
                            <Button className="ant-btn-primary">Confirm</Button>
                        </Form>
                    </div>

                </div>
                }

                {activeNav == 4 && <div className="panel-box">
                    <div className="receive-data">
                        <Form form={form} name="control-hooks" className="form">
                            <div className="nft-mid">
                                <p className="nft-font">Choose NFT</p>
                                <div className="nft-imgbox">
                                    <div className="img-mid" tabIndex="1" >
                                        <img className="nft-img" />
                                        <div className="img-id">
                                            <span className="img-name"># 0333</span>
                                            <div>
                                                <img src={nft} className="nfticon-img" />
                                                <span className="img-value">1,0000</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img-mid" tabIndex="2" >
                                        <img className="nft-img" />
                                        <div className="img-id">
                                            <span className="img-name"># 0333</span>
                                            <div>
                                                <img src={nft} className="nfticon-img" />
                                                <span className="img-value">1,0000</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img-mid" tabIndex="3">
                                        <img className="nft-img" />
                                        <div className="img-id">
                                            <span className="img-name"># 0333</span>
                                            <div>
                                                <img src={nft} className="nfticon-img" />
                                                <span className="img-value">1,0000</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img-mid" tabIndex="4">
                                        <img className="nft-img" />
                                        <div className="img-id">
                                            <span className="img-name"># 0333</span>
                                            <div>
                                                <img src={nft} className="nfticon-img" />
                                                <span className="img-value">1,0000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Form.Item
                                    label="Receive Address"
                                    name="realm-address"
                                >
                                    <Input placeholder="Enter Receive Address" />
                                </Form.Item>
                            </div>
                            <div className="wallet-box">
                                <div className="wallet-mid">
                                    <p className="wallet-name">Sats In NFT</p>
                                    <img src={nft} className="btc-img" /><span>10,000</span>
                                </div>
                            </div>
                            <div className="trans-speed">
                                <p className="trans-title">Balance</p>
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
                            </div>
                            <div className="wallet-box">
                                <div className="wallet-mid">
                                    <p className="wallet-name">Wallet Balance</p>
                                    <img src={btc} className="btc-img" /><span>0.0002140000</span>
                                </div>
                                <div className="wallet-mid">
                                    <p className="wallet-name">Amount</p>
                                    <img src={btc} className="btc-img" /><span>0.0000</span>
                                </div>
                            </div>
                            <Button className="ant-btn-primary">Confirm</Button>
                        </Form>
                    </div>

                </div>
                }
            </div>

        </SendStyle >
    )
}
export default Send