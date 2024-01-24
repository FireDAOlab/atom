import React, { useState, useEffect } from "react"
import initState from "../../api/initState"
import reducer from "../../api/reducer"
import { useConnect, pubConnect } from "../../api/pubConnect"
import { Button } from "antd"

import wallet from '../../imgs/wallet.png'
import speed from '../../imgs/speed.png'
import ConnectWalletStyle from "./ConnectWalletStyle"

const ConnectWallet = (props) => {
    let { state, dispatch } = useConnect();
  
    const connectWallet = async () => {
        const accounts = await window.unisat.requestAccounts();
        if (accounts && accounts[0]) {
            await pubConnect(state, dispatch)
            console.log(state);
        } else{

        }
    }

    
    return (
        <ConnectWalletStyle>
            <div className="wallet-contain">
                <div className="speed-box">
                    <img src={speed} className="speed-img" />
                    <span>{ }30 sat/vB</span>
                </div>
                <Button className="wallet-btn" onClick={() => { connectWallet() }}>
                    <img src={wallet} className="wallet-img" />
                    <span>{
                        state.account ? state.account.substring(0,5) + "..." + state.account.substring(state.account.length - 5, state.account.length) : 'Connect'
                    }</span>
                </Button>
            </div>
        </ConnectWalletStyle>

    )

}

export default ConnectWallet