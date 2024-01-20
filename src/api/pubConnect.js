import React, { useState, useEffect, useContext, useReducer } from "react";
import reducer from "./reducer";
import initState, { networkId } from "./initState";
import { shallowEqual } from "react-redux";

import getWeb3 from "./getWeb3";


const pubConnect = async (state, dispatch) => {

    const { apiState } = state;
    if (apiState) {
        console.log(apiState)
        return
    }
    console.log(state);

    dispatch({ type: 'CONNECT_INIT' });

    try {
        // await getWeb3().then(async res=>{
            await window.unisat.requestAccounts().then(async res=>{
            dispatch({ type: "CONNECT",payload:res })

            window.unisat.requestAccounts().then(async (accounts) => {
                if (accounts && accounts.length > 0) {
                    dispatch({type: "SET_ACCOUNT", payload: accounts[0]})
                    dispatch({type: "CONNECT_SUCCESS"})
                }
                
    
    
            });
            await window.unisat.on("accountsChanged", async (accounts) => {
                dispatch({ type: "SET_ACCOUNT", payload: accounts[0] })
                res.getAccounts().then(async res => {
                    let balance = await res.getBalance(res[0])
                    dispatch({ type: "SET_BALANCE", payload: balance })
                })
    
            });
    
    
            await window.unisat.on("networkChanged", async (netWarkId) => [
                dispatch({ type: "SET_NETWORKID", payload: netWarkId }),
                res.getAccounts().then(async res => {
                    let balance = await res.getBalance(res[0])
                    dispatch({ type: "SET_BALANCE", payload: balance })
                })
            ]);
    
         
    })

        // const unisat = window.unisat;

        // const [address] = await unisat.getAccounts();


        // const publicKey = await unisat.getPublicKey();


        // const balance = await unisat.getBalance();


        // const network = await unisat.getNetwork();


    } catch (e) {
        console.log(e);
    }
}

const ConnectContext = React.createContext();

const ConnectProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const { api, } = state

    // if (api == null) {
    //     connect(state, dispatch)
    // }

    return <ConnectContext.Provider value={{ state, dispatch }}>
        {props.children}
    </ConnectContext.Provider>
}
const useConnect = () => ({ ...useContext(ConnectContext) });
export { ConnectProvider, useConnect, pubConnect }