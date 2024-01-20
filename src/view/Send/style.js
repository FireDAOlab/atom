
import { styled } from "styled-components";
export default styled.div`


    .flex-container {
    width: 80%;
    margin: 1.5em auto;
}

.send-nav-list{
    border-bottom: none;
height: auto;
    .send-item{
        text-align:center;
        padding: 10px 2em;
        font-size: 21px;
line-height:35px;
height: auto;
        &.active {
    border: none;
    font-weight: bold;
    background: #FE6D46;
border-radius: 5px 5px 5px 5px;
color: #FFFFFF;
    border-bottom:none;

  }
    }
}
.trans-speed{
    margin-top: 1.5em;
    .trans-title{
        font-size: 21px;
font-family: Roboto, Roboto;
font-weight: 500;
color: #FFFFFF;
line-height: 37px;
    }
    .trans-box{
  display: flex;
  width: 80%;
  justify-content:space-between;
  .trans-mid{
    padding: 1.5em 0.5em 1em 0.5em;
    text-align:center;
    width: 24%;
    background: #140E0E;
border-radius: 13px 13px 13px 13px;
border: 3px solid rgba(255,255,255,0.1);

&:active{
    border: 3px solid #FE6D46;
}
&:focus{
    border: 3px solid #FE6D46;
}
.trans-name{
    font-size: 29px;
font-family: Inter, Inter;
font-weight: normal;
color: #FFFFFF;
line-height: 37px;
}
.trans-value{
    font-size: 21px;
font-family: Roboto, Roboto;
font-weight: 500;
color: #999999;
line-height: 37px;
}
  }
}
}
.btc-img{
    width: 28px;
}
.wallet-box{
    margin: 2.5em 0;
    display: flex;
    justify-content:space-between;
    width: 40%;
    .wallet-mid{
        width: 45%;
        .wallet-name{
            font-size: 21px;
font-family: Roboto, Roboto;
font-weight: 500;
color: #999999;
line-height: 27px;
        }
        span{
            margin: 0 10px;
    vertical-align: middle;
            font-size: 24px;
font-family: Roboto, Roboto;
font-weight: 600;
color: #FFFFFF;
line-height: 37px;
        }
    }
}


.nft-mid{
    .nft-font{
    font-size: 21px;
font-family: Roboto, Roboto;
font-weight: 500;
color: #FFFFFF;
line-height: 37px;
}


.nft-imgbox{
    margin-bottom:1.5em;
    display: flex;
    width: 80%;
    .img-mid{
        width: 24%;
        margin-right: 1em;
        padding: 10px;
        background: #140E0E;
border-radius: 13px 13px 13px 13px;
border: 3px solid rgba(255,255,255,0.1);

    &:focus{
        border: 3px solid #FE6D46;
    }
    .img-id{
        display: flex;
        justify-content:space-between;
        .nfticon-img{
            width: 28px;
        }
        .img-name{
            font-size: 21px;
font-family: Inter, Inter;
font-weight: normal;
color: #FFFFFF;
line-height: 37px;
        }
        .img-value{
            vertical-align:middle;
            font-size: 21px;
font-family: Roboto, Roboto;
font-weight: 600;
color: #FFFFFF;
line-height: 37px;
margin-left:5px;
        }
    }
    }
}
}

@media screen and (max-width: 1440px){
    
.send-nav-list{
    .send-item{
        font-size: 16px;
line-height:25px;
    }
}
    .btc-img{
    width: 20px;
}
    .trans-speed{

.trans-title{
    font-size: 16px;
line-height: 28px;
}

.trans-box{
    .trans-mid{
        .trans-name{        
            line-height: 28px;
        font-size: 22px;
        }
        .trans-value{  
    font-size: 16px;
line-height: 28px;
        }
    }
}
}
.btc-img{
    width: 20px;
}
.wallet-box{
    .wallet-mid{
        .wallet-name{
            font-size:16px;
line-height: 20px;
        }
        span{
        font-size: 18px;
line-height: 28px;
}
    }
}

.nft-mid{
    .nft-font{
        font-size: 16px;
line-height: 28px;
    }
    .nft-imgbox{
        .img-mid{
            .img-id{
                .img-name{
                font-size: 16px;
line-height: 28px;
            }
            .img-value{
                font-size: 16px;
line-height: 28px;
            
            }
            .nfticon-img {
    width: 20px;
}
            }
           
        }
    }
}
}
`