
import { Button, Form, Input } from "antd";
import React, { useState, useEffect } from "react";
import { useConnect } from "../../api/pubConnect";

import deletes from '../../imgs/delete.png';
import btc from '../../imgs/BTC.png';
import nft from '../../imgs/nft.png';

import SendStyle from "./style";

const Send = (props) => {

    const [activeNav, setActiveNav] = useState(1)
    const [form] = Form.useForm()
    let { state, dispatch } = useConnect();
    const [btcAddress, setBtcAddress] = useState([])
    const [btcAmount, setBtcAmount] = useState([])


    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };
    const getSendBTC =async () => {
        const btcbox = form.getFieldsValue()
        const addressBox = []
        const amountBox = []
        console.log(btcbox);
        btcbox.items.map((i)=>{
            addressBox.push(i.bReceive)
            amountBox.push(i.bAmount)
        })
        setBtcAddress(addressBox)
        setBtcAmount(amountBox)
       console.log(btcAddress);
        try {
            
            let txid = await window.unisat.sendBitcoin(btcAddress.toString(),btcAmount.toString(),);
            console.log(txid)
          } catch (e) {
            console.log(e);
          }
    }

    useEffect(() => {
        // getSendBTC()
    }, [])

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

                        <Form form={form} name="control-hooks" className="form" onFinish={onFinish}>
                            <div className="receive-mid">
                                <p className="recemid-receiver">Receiver</p>
                                <p className="recemid-amount">Amount(BTC)</p>
                            </div>
                            <Form.List name="items">
                                {(fields, { add, remove }, { errors }) => (
                                    <div>

                                        {fields.map(({ key, name, ...restField }) => (
                                            <div className="items-box">
                                                {/* <Form.Item
                                                    validateTrigger={['onChange', 'onBlur']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            whitespace: true,
                                                            message: "Please input passenger's name or delete this field.",
                                                        },
                                                    ]}
                                                    noStyle
                                                > */}
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "bReceive"]}
                                                >
                                                    <Input value={btcAddress} />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "bAmount"]}

                                                >
                                                    <Input value={btcAmount} />
                                                </Form.Item>
                                                {fields.length > 0 ? (
                                                    <div style={{ margin: '10px auto' }}
                                                        className="dynamic-delete-button"
                                                        onClick={() => remove(name)}>
                                                        <img src={deletes} style={{ width: '20px' }} />
                                                    </div>
                                                ) : null}

                                                {/* </Form.Item> */}
                                            </div>
                                        ))}

                                        <Button className="add-btn" onClick={() => add()}>
                                            <span>Add Receiver And Amount</span>
                                        </Button>
                                    </div>
                                )}
                            </Form.List>

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
                                    <img src={btc} className="btc-img" /><span>{state.balance.total}</span>
                                </div>
                                <div className="wallet-mid">
                                    <p className="wallet-name">Amount</p>
                                    <img src={btc} className="btc-img" /><span>0.0000</span>
                                </div>
                            </div>
                            <Button className="ant-btn-primary" onClick={() => { getSendBTC() }}>Confirm</Button>
                        </Form>
                    </div>
                </div>
                }
                {activeNav == 2 && <div className="panel-box">
                    <div className="receive-data">

                        <Form form={form} name="control-hooks" className="form">
                            <div className="nft-mid">
                                <p className="nft-font">Choose FT</p>
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
                            </div>
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
                                <p className="nft-font">Choose Realm</p>
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