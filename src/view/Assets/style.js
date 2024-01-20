
import { styled } from "styled-components";
export default styled.div`
   
   .flex-container{
        .flex-box{
            display: flex;
            .flex-datas{
                border-right: 1px solid  rgba(255,255,255,0.1);
                display: flex;
    padding-top: 10px;
                .sats{
                    margin-right:1.5em ; 
                    vertical-align: super;
width: 40px;
                }
                .sats-balance{
                    p{
                        font-family: Inter, Inter;
                        line-height:37px;
                    font-size:29px;
font-weight: 600;
color: #FFFFFF;
                    }
                    .dolor{
                    line-height:27px;
                    font-size:21px;
                        font-family: Roboto, Roboto;
font-weight: 500;
color: #06A561;
                    }
              
                }
            }

            .sats-value{
                
    padding-top: 10px;
                width: 50%;
                margin-inline: auto;
                display: flex;
                justify-content:space-between;

                .value-box{
                    .name{
font-family: Roboto, Roboto;
font-weight: 500;
color: #999999;
font-size:21px;
line-height:27px;
                    }
                    .value{
font-family: Inter, Inter;
font-weight: 600;
font-size:29px;
line-height:37px;
color: #FFFFFF;
                    }
                }
            }
        }
   }
   .convert-btn{
    .convert{
        width: 25px;
    }
   }
   .convert-btn>span{   
font-family: Roboto, Roboto;
font-weight: 500;
color: #A93AED;
vertical-align: middle;
    margin-left: 5px;
    font-size:21px;
                    line-height:27px;
                    }

 .view-dialog {
   
    .input-title {
      font-size: 20px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #8A8080;
    }
  }
 
 
   @media screen and (max-width:1440px){
    .flex-container{
        .flex-box{

            .flex-datas{
                .sats{
                    width: 40px;
                    
                }
                .sats-balance{
                    p{
                        font-size: 22px;
                        line-height: 28px;
                    }
                    .dolor{
                        font-size: 16px;
                        line-height: 20px;
                    }
                    
                }
            }

            .sats-value{
                .value-box{
                    .name{ 
                    font-size: 16px;
                    line-height: 20px;
                    }
                    .value{
                        font-size: 22px;
                        line-height: 28px;
                    }
                }
            }
        }
    }
    .convert-btn{
                        .convert{
                            width: 20px;
                        }
                        
                    }
    .convert-btn>span{
        font-size: 16px;
        line-height: 20px;
    }

  
}

`