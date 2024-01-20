//Redux的reducer函数结构 
//用于创建一个为组件服务的reducer,管理状态，reducer本质是一个纯函数,只管最基础的，不管细节上的

//reducer函数会有两个参数：prestate，action
const reducer = (state, action) => {

    switch (action.type) {
        case "CONNECT_INIT":
            return { ...state, apiState: "CONNECT_INIT" };
        case "CONNECT":
            return { ...state, api: action.payload, apiState: "CONNECTING" }
        case "CONNECT_SUCCESS":
            return { ...state, apiState: "READY" }
        case 'CONNECT_ERROR':
            return { ...state, apiState: 'ERROR', apiError: action.payload };
        case 'SET_ACCOUNT':
            return { ...state, account: action.payload };
        case "SET_NETWORKID":
            return { ...state, networkId: action.payload };
        case "SET_BALANCE":
            return { ...state, balance: action.payload };
        case "SET_IsShowNav":
            return { ...state, isShowNav: action.payload };
        case "SET_PUBLICKEY":
            return { ...state, publicKey: action.payload };
        case "SET_USERINFO":
            return { ...state, userInfo: action.payload };
    }
}
export default reducer
