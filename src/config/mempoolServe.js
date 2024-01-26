import { MEMPOOL_URL } from "./constant";

const MempoolService =()=> {
  const host = MEMPOOL_URL
    
  const getHost=()=> {
    return host;
  }

  const setHost=(host)=> {
    host = host;
  }

  const httpGet = async (route, params) => {
    let url = getHost() + route;
    let c = 0;
    for (const id in params) {
      if (c == 0) {
        url += '?';
      } else {
        url += '&';
      }
      url += `${id}=${params[id]}`;
      c++;
    }
    const headers = new Headers();
    headers.append('X-Client', 'ATOM Wallet');
    const res = await fetch(new Request(url), { method: 'GET', headers, mode: 'cors', cache: 'default' });
    console.log({ res });
    const data = await res.json();
    return data;
  };
  
    const getFee=async()=> {
      return httpGet('/api/v1/fees/recommended', {});
    }
  
    const getPrice=async()=> {
      return httpGet('/api/v1/historical-price', { timestamp: Date.now() });
    }
  
    const getUtxo=async(address)=> {
      return httpGet(`/api/address/${address}/utxo`, {});
    }
  
    const getBlockHeight=async()=> {
      return httpGet('/api/blocks/tip/height', { });
    }
  
    const txsMempool=async(address)=> {
      return httpGet(`/api/address/${address}/txs/mempool`, { });
    }
  
  }

  export default MempoolService
  export const mempoolService = new MempoolService(MEMPOOL_URL);
export const mempoolServiceTest = new MempoolService(MEMPOOL_URL_TEST);