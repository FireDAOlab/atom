
import React, { useState, useEffect } from "react";
import { useConnect } from "../../api/pubConnect";

import sats from '../../imgs/sats.png'
import convert from '../../imgs/convert.png'
import { Button, Pagination, Modal, Slider } from "antd";

import AssetsStyle from "./style";

const Assets = (props) => {

    let { state, dispatch } = useConnect();
    const [activeNav, setActiveNav] = useState(1)
    const [isShowView, setIsShowView] = useState(false)
    const [inputValue, setInputValue] = useState(1);

    const handleView = async () => {

    }
    const onChange = (newValue) => {
        setInputValue(newValue);
    };

    useEffect(() => {

    }, [])

    return (
        <AssetsStyle>
            <Modal className="view-dialog" style={{ width: '70%' }} title={("View ordinals")} open={isShowView} onOk={handleView}
                footer={null}
                onCancel={() => {
                    setIsShowView(false)
                }}>
                <div className="details">
                    <p className="details-name">Balance</p>
                    <div className="details-box">
                        <div className="details-internal">
                            <p className="internal-name">1,000</p>
                            <p className="internal-value">sndakj...asdmk</p>
                        </div>
                        <div className="details-internal">
                            <p className="internal-name">1,000</p>
                            <p className="internal-value">sndakj...asdmk</p>
                        </div>
                        <div className="details-internal">
                            <p className="internal-name">1,000</p>
                            <p className="internal-value">sndakj...asdmk</p>
                        </div>
                        <div className="details-internal">
                            <p className="internal-name">1,000</p>
                            <p className="internal-value">sndakj...asdmk</p>
                        </div>
                    </div>
                    <p className="details-name">Ordinals Details</p>
                    <div className="details-box">
                        <div className="details-internal">
                            <p className="internal-name">Ordinals</p>
                            {/* <p className="mint-value">10,000</p> */}
                        </div>
                    </div>
                    <div className="mint-box">
                        <div className="mint-mid">
                            <div className="mint-internal">
                                <p className="mint-name">Mint Amount</p>
                                <p className="mint-value">10,000</p>
                            </div>
                            <div className="mint-internal">
                                <p className="mint-name">Mint Height</p>
                                <p className="mint-value">10,000</p>
                            </div>
                            <div className="mint-internal">
                                <p className="mint-name">Max Supply</p>
                                <p className="mint-value">10,000</p>
                            </div>
                            <div className="mint-internal">
                                <p className="mint-name">Max Mints</p>
                                <p className="mint-value">10,000</p>
                            </div>
                        </div>
                        <div className="mint-mid">
                            <div className="mint-internal">
                                <p className="mint-name">Unique Holders</p>
                                <p className="mint-value">10,000</p>
                            </div>
                            <div className="mint-internal">
                                <p className="mint-name">Circulating Supply</p>
                                <p className="mint-value">10,000</p>
                            </div>
                            <div className="mint-internal">
                                <p className="mint-name">Mint Count</p>
                                <p className="mint-value">10,000</p>
                            </div>
                            <div className="mint-internal">
                                <p className="mint-name">Minted Amount</p>
                                <p className="mint-value">10,000</p>
                            </div>
                        </div>
                    </div>

                    <div className="ord-box">
                        <p className="ord-details">Ordinals Details</p>
                        <div className="slider-box">
                            <Slider
                                style={{ width: '80%' }}
                                min={0}
                                max={100}
                                onChange={onChange}
                                value={typeof inputValue === 'number' ? inputValue : 0}
                            />
                            <span>{inputValue}</span>

                        </div>
                    </div>
                    <div style={{ marginTop: '1em' }}>

                        <div className="atomical-box">
                            <p className="atom-id">Atomical ID</p>
                            <p className="atom-id-value">0000b29ab093addb1f334ae62e561be604258a01d252866fe46f597cc9d9be7bi0</p>

                        </div>
                        <div className="atomical-box">
                            <p className="atom-id">Owner</p>
                            <p className="atom-id-value">0000b29ab093addb1f334ae62e561be604258a01d252866fe46f597cc9d9be7bi0</p>
                        </div>

                        <div className="atomical-box">
                            <p className="atom-id">Mint Args</p>
                            <div className="atom-datas">
                                <p>
                                    {`{
                                        "mint_amount": 1000,
                                    "mint_height": 822780,
                                    "max_mints": 21000,
                                    "mint_bitworkc": "0000",
                                    "request_ticker": "photon",
                                    "bitworkc": "0000",
                                    "nonce": "24159606",
                                    "time": 1703445437
}`}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </Modal>


            <div className="flex-container">
                <h1 className="panel-title">Wallet Assets</h1>
                <div className="panel-box">
                    <div className="flex-box">
                        <div className="flex-datas">
                            <div style={{ margin: 'auto' }}>
                                <img src={sats} className="sats" />
                            </div>
                            <div className="sats-balance">
                                <p>{state.balance } Sats</p>
                                <p className="dolor">≈$40.55</p>
                            </div>
                            <Button className="convert-btn" onClick={()=>{}}>
                                <img src={convert} className="convert" />
                                <span>BTC</span>
                            </Button>
                        </div>
                        <div className="sats-value">
                            <div className="value-box">
                                <p className="name">Available</p>
                                <p className="value">3,000 Sats</p>
                            </div>
                            <div className="value-box">
                                <p className="name">Pending</p>
                                <p className="value">3,000 Sats</p>
                            </div>
                            <div className="value-box">
                                <p className="name">Atomicals</p>
                                <p className="value">3,000 Sats</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-box">

                    <div className="wallet-nav-list">
                        <div className={"nav-item " + (activeNav == 1 ? "active" : "")} onClick={() => {
                            setActiveNav(1)
                        }}>
                            ARC20(5)
                        </div>
                        <div className={"nav-item " + (activeNav == 2 ? "active" : "")} onClick={() => {
                            setActiveNav(2)
                        }}>
                            NFT(5)
                        </div>
                        <div className={"nav-item " + (activeNav == 3 ? "active" : "")} onClick={() => {
                            setActiveNav(3)
                        }}>
                            Realm(5)
                        </div>
                    </div>

                    {activeNav == 1 && <div>
                        <div className="wallet-list-box type-list">
                            <div className="list-header">
                                <div className="col">
                                    Name
                                </div>
                                <div className="col">
                                    View
                                </div>
                            </div>
                            <div className="list-item type-item">
                                <div className="col name">
                                    ordinals
                                </div>
                                <div className="col view">
                                    <Button className="convert-btn" onClick={() => { setIsShowView(true) }} >View</Button>
                                </div>
                            </div>
                        </div>
                        <Pagination

                            showSizeChanger
                            total={85}
                            showTotal={(total) => `${total} Results`}
                        />
                    </div>
                    }
                </div>
            </div>
        </AssetsStyle >
    )
}
export default Assets