const OpenApiService=()=> {
    // let store: OpenApiStore;
    clientAddress = '';
    const setHost = async (host) => {
      this.store.host = host;
      await this.init();
    };
  
    const getHost = async () => {
      return this.store.host;
    };
  
    const init = async () => {
      this.store = await createPersistStore({
        name: 'openapi',
        template: {
          host: OPENAPI_URL_MAINNET,
          deviceId: randomstring.generate(12)
        }
      });
  
      if ([OPENAPI_URL_MAINNET, OPENAPI_URL_TESTNET].includes(this.store.host) === false) {
        this.store.host = OPENAPI_URL_MAINNET;
      }
  
      if (!this.store.deviceId) {
        this.store.deviceId = randomstring.generate(12);
      }
  
      const getConfig = async () => {
        try {
          this.store.config = await this.getWalletConfig();
        } catch (e) {
          this.store.config = {
            version: '0.0.0',
            moonPayEnabled: true,
            statusMessage:e.message
          };
        }
      };
      getConfig();
    };
  
    setClientAddress = async (token) => {
      this.clientAddress = token;
    };
  
    httpGet = async (route, params) => {
      let url = this.getHost() + route;
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
      headers.append('X-Client', 'UniSat Wallet');
      headers.append('X-Version', VERSION);
      headers.append('x-address', this.clientAddress);
      headers.append('x-channel', CHANNEL);
      headers.append('x-udid', this.store.deviceId);
      const res = await fetch(new Request(url), { method: 'GET', headers, mode: 'cors', cache: 'default' });
      const data = await res.json();
      return data;
    };
}  