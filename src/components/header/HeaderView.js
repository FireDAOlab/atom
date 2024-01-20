import React from "react";
import { NavLink } from "react-router-dom";
import ConnectWallet from "../wallet/ConnectWallet";
import HeaderStyle from './HeaderStyle'
import logo from '../../imgs/logo.png'

const HeaderView = () => {

    return (
        <HeaderStyle>
            <div className="head-contain">
                <div className="logobox">
                    <img src={logo} className="logo" />
                </div>
                <div className="nav-list">

                    <div className="nav-item">
                        <NavLink to='/'><span>ASSETS</span></NavLink>
                    </div>

                    <div className="nav-item">
                        <NavLink to='/Send'><span>SEND</span></NavLink>
                    </div>

                    <div className="nav-item">
                        <NavLink to='/Mint'><span>MINT</span></NavLink>
                    </div>
                </div>

                <ConnectWallet className="walletbox" />

            </div>
            <hr />
        </HeaderStyle>
    )

}
export default HeaderView