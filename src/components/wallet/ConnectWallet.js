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

    const [network, setNetwork] = useState("livenet");

    // if (!firedaoInstalled) {
    //     return (
    //         <div className="wallet-contain">
    //             <div>
    //                 <div>
    //                     <Button
    //                         onClick={() => {
    //                             window.location.href = "https://firedao.io";
    //                         }}
    //                     >
    //                         Install Firedao Wallet
    //                     </Button>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }
    const connectWallet = async () => {
        const accounts = await window.unisat.requestAccounts();
        if (accounts && accounts[0]) {
            await pubConnect(state, dispatch)
        } else {

        }

        try {
            // let curChainId = await window.ethereum.request({method: "eth_chainId"})
            // if (curChainId != develop.chainId) {

            // }
        } catch (e) {
            console.log(e)
        }
        await pubConnect(state, dispatch)
        console.log(state);
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
                        state.account ? state.account.substring(1, 5) + "..." + state.account.substring(state.account.length - 5, state.account.length) : 'Connect'
                    }</span>
                </Button>
            </div>
        </ConnectWalletStyle>

    )

}

export default ConnectWallet