import React, { useState,useEffect } from "react";
import { Input } from "antd";
import { useConnect } from "../../../api/pubConnect";

import FeeRateBarStyle from './FeeRateBarStyle'

const FeeRateBar = (props) => {
    let { state, dispatch } = useConnect();
    const [feeOptions, setFeeOptions] = useState([]);
    const [feeRateInputVal, setFeeRateInputVal] = useState('');

    useEffect(() => {
        wallet.getFeeSummary().then((v) => {
          setFeeOptions([...v.list, { title: 'Custom', feeRate: 0 }]);
        });
      }, []);
    
    const adjustFeeRateInput = (inputVal) => {
       
        setFeeRateInputVal(inputVal);
      };
      
    useEffect(()=>{
        
  }, []);      
        
    return (
        <FeeRateBarStyle>
            <div className="trans-box">
                <div className="trans-mid" tabindex="1">
                    <p className="trans-name">Slow</p>
                    <p className="trans-value">20 Sat/vB ~ 3 Hours</p>
                </div>
                <div className="trans-mid" tabindex="2">
                    <p className="trans-name">Average</p>
                    <p className="trans-value">20 Sat/vB ~ 3 Hours</p>
                </div>
                <div className="trans-mid" tabindex="3">
                    <p className="trans-name">Fast</p>
                    <p className="trans-value">20 Sat/vB ~ 3 Hours</p>
                </div>
                <div className="trans-mid" tabindex="4">
                    <p className="trans-name">Custom</p>
                    <Input
                        placeholder={'sat/vB'}
                        value={feeRateInputVal}
                        onChange={async (e) => {
                            adjustFeeRateInput(e.target.value);
                        }} 
                        onAmountInputChange={(amount) => {
                            adjustFeeRateInput(amount);
                        }}
                        autoFocus={true}
                        />
                   
                </div>
            </div>

        </FeeRateBarStyle>
    )
}
export default FeeRateBar