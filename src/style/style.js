import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    ${require('./variable.css')};
    
  @font-face {
    font-family: "RoBoto-Medium";
    src: url("./font/RobotoMedium.ttf");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Russo One-Regular";
    src: url("./font/RussoOne-Regular.ttf");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto-Bold";
    src: url("./font/Roboto-Bold.ttf");
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    font-family: Helvetica-Bold, Helvetica, sans-serif;

  }

  .ant-input-affix-wrapper:hover {
    border-color: rgba(255, 255, 255, 0.10);

  }

  .ant-input-affix-wrapper:focus {
    border-color: rgba(255, 255, 255, 0.10);

  }

  .ant-input {
    border-color: rgba(255, 255, 255, 0.10);
    font-size:21px;
    line-height:27px;
    padding: 8px 15px
  }


  .ant-input:focus {
    border-color: rgba(255, 255, 255, 0.10);
  }

  .ant-input:hover {
    border-color: rgba(255, 255, 255, 0.10);
  }

  input::-webkit-validation-bubble {
    display: none !important;
  }

  input::-webkit-inner-spin-button {
    appearance: none !important;
  }

  input::-webkit-outer-spin-button {
    appearance: none !important;
  }

  /* Firefox */

  input:-moz-validation-bubble {
    display: none;
  }

  /* Edge and IE */
  input::-ms-validation-bubble {
    display: none;
  }

  input[type='number'] {
    appearance: textfield;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  body {
background: #140E0E;
    color: #fff;
    position: relative;
  }

  .App {
    min-height: calc(100vh - 12em);
    position: relative;
    z-index: 2;
  }

  .flex-container {
    width: 80%;
    margin: 1.5em auto;
    .panel-title{
      font-size: 32px;
font-family: Inter, Inter;
font-weight: bold;
color: #FFFFFF;
line-height: 48px;
    }
 
  }


  .content {
    position: relative;
    z-index: 1;
    padding-left: 256px;
    left: 0;
  }

  .firebg {
    width: 100vw;
    position: fixed;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 0;
    object-fit: fill;
  }

  div {
    box-sizing: border-box;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
    font-size: 14px;
  }


  //  common css


  .wallet-list-box {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0em 0 0em;
    margin: 1em 0;

    .col {
      
      font-size:19px;
      line-height:27px;
      font-family: Roboto, Roboto;
font-weight: 500;
      text-align: center;
      flex-shrink: 0;
      margin: 0 2em;
    }

    .list-header {
      display: flex;
      justify-content: space-between;
      font-weight: bold;

      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      color: #8A8080;
      padding: 10px 0;

      .col {
        text-align:left;
        display: flex;
        white-space: nowrap;

        &:last-child{
          margin-right:6em;
        }
        .list-icon {
          width: 16px;
          height: 13px;
          cursor: pointer;
          margin-top: 4px;
          margin-left: 6px;
        }
      }
    }

    .list-item {
      padding: 1em 0em;
      display: flex;
      justify-content: space-between;
      font-family: Helvetica-Bold, Helvetica, sans-serif;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      .col{
        font-size:
      }
      .no {
        color: #E48686;
      }

    }
  }

.panel-box{
  margin: 1em 0;
      padding: 2em 2em;
      background: #241B1B;
box-shadow: 0px 1 4px 0px rgba(21,34,50,0.08);
border-radius: 6px 6px 6px 6px;
border: 1px solid rgba(255,255,255,0.1);
}

 .details{
    .details-name{
      
  margin-top:1em;
font-family: Roboto, Roboto;
font-weight: 500;
color: #FFFFFF;
font-size: 21px;
line-height: 37px;
    }
.details-box{
            display: flex;
            justify-content:space-between;
            .details-internal{
              width: 23%;
              padding-top: 2em;
              padding-bottom: 1em;
                background: #140E0E;
border-radius: 13px 13px 13px 13px;
border: 3px solid rgba(255,255,255,0.1);
text-align:center;
                .internal-name{
font-family: Inter, Inter;
font-weight: normal;
color: #FFFFFF;
font-size: 29px;
                    line-height: 37px;
                }
                .internal-value{
                    font-family: Roboto, Roboto;
font-weight: 500;
color: #999999;
 font-size: 21px;
                    line-height: 37px;
                }
            }
        }
    }

    .sats-balance{
      margin-top:1em;
      p{
      margin-bottom:10px;
    }
    }
    
  
    .mint-box{
      margin-top: 2em;
      margin-bottom: 1em;
      .mint-mid{
        display: flex;
        justify-content:space-between;
        .mint-internal{
          width: 23%;
          .mint-name{
            font-size: 21px;
font-family: Roboto, Roboto;
font-weight: 500;
color: #999999;
line-height: 37px;
          }
          .mint-value{
            font-size: 24px;
font-family: Roboto, Roboto;
font-weight: 600;
color: #FFFFFF;
line-height: 37px;
          }
        }
      }
    }
    .ord-box{
      .ord-details{
        font-size: 21px;
font-family: Roboto, Roboto;
font-weight: 500;
color: #FFFFFF;
line-height: 37px;
      }
.slider-box{
  display: flex;
  width: 100%;
 
  span{
    width: 10%;
    margin:3px 1em;
  }
}
    }

.atomical-box{
  .atom-id{
font-size: 21px;
font-family: Roboto, Roboto;
font-weight: 500;
color: #999999;
line-height: 27px;
  }
  .atom-id-value{
    font-size: 24px;
font-family: Roboto, Roboto;
font-weight: 600;
color: #FFFFFF;
line-height: 37px;

  }
  .atom-datas{
    width: 27%;
    padding: 1.5em;
    background: #140E0E;
border-radius: 5px 5px 5px 5px;
border: 2px dashed rgba(161,167,196,0.5);
      p{
        font-size: 21px;
font-family: Roboto, Roboto;
font-weight: 500;
color: #FFFFFF;
line-height: 27px;
      }
  }
}

.realm-json{
  width: 28%;
  padding: 2em;
  background: #140E0E;
border-radius: 4px 4px 4px 4px;
border: 1px solid rgba(161,167,196,0.5);
  p{
    font-size: 21px;
font-family: Roboto, Roboto;
font-weight: 500;
color: #FFFFFF;
line-height: 27px;
  }
}
.ant-form-item-control-input-content{
.trans-box{
  display: flex;
  width: 100%;
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

.realm-boxes{
  display: flex;
  .ant-row{
    .ant-form-item-control{
        .ant-form-item-control-input{
          .ant-form-item-control-input-content{

          }
        }
    }
  }
}

.inscript{
  margin: 0;
  .ant-row{
  display: flex;
  justify-content:space-between;
  .ant-form-item-label {
    width: 45%;
    text-align: left;
  }
  .ant-form-item-control {
    width: 45%;
    /* text-align: left; */
    .ant-form-item-control-input-content {
      display: flex;
    }
  }
  }
  
.sats-font{
  width:50%;
font-size: 24px;
font-family: Roboto, Roboto;
font-weight: 600;
color: #A93AED;
line-height: 37px;
}
}

  @media screen and (max-width: 1440px) {
    .App {
      align-items: flex-start;
      overflow-x: auto;
      padding-bottom: 6em;

      &::-webkit-scrollbar {
        width: 20px;
        height: 20px;
      }

      &::-webkit-scrollbar-track,
      &::-webkit-scrollbar-thumb {
        border-radius: 999px;
        border: 5px solid transparent;
      }

      &::-webkit-scrollbar-thumb {
        min-height: 20px;
        background-clip: content-box;
        box-shadow: 0 0 0 10px rgba(0, 0, 0, .8) inset;
      }

      &::-webkit-scrollbar-corner {
        background: transparent;
      }
    }

  
    .flex-container {
    width: 80%;
    margin: 1.5em auto;
    .panel-title{
      font-size:24px;
      line-height:36px;
    }
  }
    .fire-list-box {
      .col {
        font-size: 15px;
      }

      .list-header {
        font-size: 15px;
      }
    }
    .details{
    .details-name{
font-family: Roboto, Roboto;
font-weight: 500;
color: #FFFFFF;
font-size: 16px;
line-height: 28px;
    }
.details-box{
            display: flex;
            justify-content:space-between;
            .details-internal{
                background: #140E0E;
border-radius: 13px 13px 13px 13px;
border: 3px solid rgba(255,255,255,0.1);
text-align:center;

                .internal-name{
font-family: Inter, Inter;
font-weight: normal;
color: #FFFFFF;
font-size: 22px;
                    line-height: 28px;
                }
                .internal-value{
                    font-family: Roboto, Roboto;
font-weight: 500;
color: #999999;
 font-size: 16px;
                    line-height: 28px;
                }
            }
        }
    }

    .mint-box{
      .mint-mid{
        .mint-internal{
          .mint-name{
            font-size: 16px;
line-height: 20px;
          }
          .mint-value{
            font-size: 18px;
line-height: 28px;
          }
        }
      }
    }

    .ord-box{
      .ord-details{
        font-size: 16px;
line-height: 28px;
      }
    }

    .atomical-box{
  .atom-id{
font-size: 16px;
line-height: 20px;
  }
  .atom-id-value{
    font-size: 18px;
line-height: 28px;

  }
  .atom-datas{
    width: 33%;
    p{
      font-size: 16px;
line-height: 20px;
    }
  }
}
.realm-json{
  
  width: 35%;
p{
  font-size: 16px;
line-height: 20px;
}
}
.ant-input {
    border-color: rgba(255, 255, 255, 0.10);
    font-size:16px;
    line-height:20px;
  }
.ant-form-item-control-input-content{
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
.sats-font{
  font-size: 18px;
line-height: 28px;
}
.inscript{
  

}

.wallet-list-box{
  
    .col{
      font-size:14px;
      line-height:20px;
    }
    .list-header {
      .col {
        &:last-child{
          margin-right:7em;
        }
      }
    }
  
}


  }





  @media screen and (max-width: 450px) {

    .App {
      background: rgba(20, 14, 14, 1);
      padding-bottom: 2em;
    }

    .flex-container {
      width: 95%;
    }

    .firebg {
      display: none;
    }

    
    .nav-box-box {

      display: none;
    }

    .content {
      padding-left: 0px;
    }

    .firedao-header {
      width: 100% !important;

      .nav-list {
        display: none !important;
      }

      .member {
        border: 1px solid white;
        width: 100%;
        height: 100%;
        background: #1E0000;
        border-radius: 50%;
      }
    }


    .fire-list-box {
      border-radius: 10px;

      .col {
        font-size: 14px;
      }
    }

    .fire-list-box {
      .list-header {
        font-size: 14px;
      }
    }

    
   }


  @media screen and (max-width: 400px) {

    .App {
      background: rgba(20, 14, 14, 1);
      padding-bottom: 2em;
    }

    .flex-container {
      width: 100%;
      padding: 0 4%;

      
    }

    .firebg {
      display: none;
    }

    .logo-box1 {
      display: block;
    }

    .nav-box-box {

      display: none;
    }

    .content {
      padding-left: 0px;
    }

    .firedao-header {
      width: 100% !important;

      .nav-list {
        display: none !important;
      }

      .member {
        border: 1px solid white;
        width: 100%;
        height: 100%;
        background: #1E0000;
        border-radius: 50%;
      }
    }


    .fire-list-box {
      border-radius: 10px;

      .col {
        font-size: 14px;
      }
    }

    .fire-list-box {
      .list-header {
        font-size: 14px;
      }
    }
  }

`
export default GlobalStyle
