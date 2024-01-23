
let curProvider = null
const getunisat= async (provider)=>{
    return new Promise(function (resolve,reject){
        try{
            if(provider){
                curProvider = provider
            }else if (window.unisat) {
                let unisat = window.unisat
                curProvider =  window.unisat
                resolve({
                    unisat,
                    account: curProvider.accounts && curProvider.accounts.length > 0 ? curProvider.accounts[0] : null
                })
            }else{
                reject(new Error("Unable to Connect"))
                alert("Unable to Connect")
            }
        }catch (e) {
            console.log(e)
            alert(e)
        } 
    })
}

export default getunisat