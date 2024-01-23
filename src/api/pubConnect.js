import React, { useState, useEffect, useContext, useReducer } from "react";
import reducer from "./reducer";
import initState, { networkId } from "./initState";
import getunisat from "./getunisat";

const pubConnect = async (state, dispatch) => {

    const { apiState } = state;
    if (apiState) {
        console.log(apiState)
        return
    }
    console.log(state);

    dispatch({ type: 'CONNECT_INIT' });

    try {
        await getunisat().then(async res => {
            console.log(res);
            dispatch({ type: "CONNECT", payload: res.unisat })
            await res.unisat.requestAccounts()
            console.log(11111111111111);
            res.unisat.getAccounts().then(async accounts => {
                if (accounts && accounts.length > 0) {
                    dispatch({ type: "SET_ACCOUNT", payload: accounts[0] })
                    dispatch({ type: "CONNECT_SUCCESS" })

                    let balance = await res.unisat.getBalance(accounts[0])
                
                    dispatch({ type: "SET_BALANCE", payload: balance })
                }
    
            })

            await window.unisat.on("accountsChanged", async (accounts) => {
                dispatch({ type: "SET_ACCOUNT", payload: accounts[0] })
                await res.unisat.getAccounts().then(async res => {
                    let balance = await res.unisat.getBalance(res[0])
                    dispatch({ type: "SET_BALANCE", payload: balance })
                })

            });

            await window.unisat.on("networkChanged", async (netWarkId) => [
                dispatch({ type: "SET_NETWORKID", payload: netWarkId }),
                await res.unisat.getAccounts().then(async res => {
                    let balance = await res.unisat.getBalance(res[0])
                    dispatch({ type: "SET_BALANCE", payload: balance })
                })
            ]);

        })


    } catch (e) {
        console.log(e);
    }
}



const ConnectContext = React.createContext();

const ConnectProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const { api, } = state

    if (api == null) {
        pubConnect(state, dispatch)
    }

    return <ConnectContext.Provider value={{ state, dispatch }}>
        {props.children}
    </ConnectContext.Provider>
}
const useConnect = () => ({ ...useContext(ConnectContext) });
export { ConnectProvider, useConnect, pubConnect }