module.exports = {
    isMobile: false,
    api: null,
    apiError: null,
    apiState: null,
    isShowNav: false,
    account: "",
    balance: {
        confirmed: 0,
        unconfirmed: 0,
        total: 0
    },
    publicKey: '',
    networkId: null,
    userInfo: {},
    feeSummary:{
        list: {
            title: '',
            desc: '',
            feeRate: 0,
          }
    }
};
