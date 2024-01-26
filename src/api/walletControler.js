import React, { useEffect, useState } from "react";
import mempoolService from '../config/mempoolServe'

const walletController = () => {
    const changeAtomicalEndpoint = (url) => {
        this.atomicalApi = new AtomicalService(ElectrumApi.createClient(url));
    }

    openapi: OpenApiService = openapiService;
    mempoolService: MempoolService = mempoolService;

    const getFee = async () => {
        return mempoolService.getFee();
    };

}
export default walletController;
