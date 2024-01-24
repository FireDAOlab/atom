import { createGlobalStyle } from "styled-components";
const AntdOverride = createGlobalStyle`
  @primary-color: #FFC02C!important; // 全局主色
  @link-color: #FFC02C; // 链接色
  @success-color: #52c41a; // 成功色
  @warning-color: #faad14; // 警告色
  @error-color: #f5222d; // 错误色
  @font-size-base: 14px; // 主字号
  @heading-color: rgba(0, 0, 0, 0.85); // 标题色
  @text-color: rgba(255, 255,255, 0.65); // 主文本色
  @text-color-secondary: rgba(255, 255, 255, 0.45); // 次文本色
  @disabled-color: rgba(255, 255, 255, 0.25); // 失效色
  @border-radius-base: 2px; // 组件/浮层圆角
  @border-color-base: #d9d9d9; // 边框色
  @box-shadow-base: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05); // 浮层阴影


  .wallet-btn{
    background: #241B1B;
border-radius: 5px 5px 5px 5px;
font-family: Roboto, Roboto;
font-weight: bold;
padding: 5px;
  height: auto;
width: 150px;
color: #FE6D46;
border-color: rgba(255,255,255,0.15);
  }
  .wallet-btn:hover{
color: #FE6D46;
background: #241B1B;
border-color:rgba(255,255,255,0.15); 
  }
  .wallet-btn:active{
color: #FE6D46;
border-color:rgba(255,255,255,0.15); 
  }
    .wallet-btn:focus{
color: #FE6D46;
border-color:rgba(255,255,255,0.15); 
  }

  .convert-btn{
  height: auto;
    margin: auto 2em;
    border: 1px solid rgba(169,58,237,0.5);
       background:rgba(169,58,237,0.1);
border-radius: 5px 5px 5px 5px;
border-color:rgba(169,58,237,0.5);
.convert{
                        width: 20px;
                    }
                    
  }
  .convert-btn:hover{
color:#FE6D46;
background:rgba(169,58,237,0.1);
border-color:rgba(169,58,237,0.5);
  }
  .convert-btn:active{
color:#FE6D46;
background:rgba(169,58,237,0.1);
border-color:rgba(169,58,237,0.5);
  }
  .convert-btn:focus{
color: #FE6D46;
border-color: rgba(169,58,237,0.5);
  }
  .check-btn{
    margin: 37px 5px;
    padding: 5px 2em;
    height: auto;
    color: #FE6D46;
    font-size:21px;
    line-height:37px;
    background: #140E0E;
border-radius: 4px 4px 4px 4px;
border: 2px dashed rgba(255,255,255,0.1);
  }
  .check-btn:hover{
color:#FE6D46;
background:#140E0E;
border-color:rgba(255,255,255,0.1);
  }
  .check-btn:active{
color:#FE6D46;
background:#140E0E;
border-color:rgba(255,255,255,0.1);
  }
  .check-btn:focus{
color: #FE6D46;
border-color: rgba(255,255,255,0.1);
  }
.add-btn{
  height: auto;
  background: #140E0E;
border-radius: 4px 4px 4px 4px;
border: 2px dashed rgba(255,255,255,0.1);
span{
  font-size: 21px;
font-family: Roboto, Roboto;
font-weight: normal;
color: #FFFFFF;
line-height: 42px;
}
}
.add-btn:hover{
color:#FFFFFF;
background: #140E0E;
border-color:rgba(255,255,255,0.1);
  }
  .add-btn:active{
color:#FFFFFF;
background: #140E0E;
border-color:rgba(255,255,255,0.1);
  }
  .add-btn:focus{
color: #FFFFFF;
border-color: rgba(255,255,255,0.1);
  }

  .ant-btn-pre{
    background: #241B1B!important;
    border: 1px solid #FE6D46!important;
    margin-left: 10px!important;
    color: #FE6D46!important;
  }
  .ant-btn-primary {
    height:auto;
    width: 180px;
    background: #FE6D46;
border-radius: 5px 5px 5px 5px;
border: none;
font-size: 21px;
font-family: Inter, Inter;
font-weight: bold;
color: #FFFFFF;
line-height: 48px;
    &:hover {
    background: #FE6D46;
    }

    &:focus {
    background: #FE6D46;
    }

    &:active {
    background: #FE6D46;
    }

    /* ::after {
      content: '';
      position: absolute;
    background: #FE6D46;
      width: 80%;
      left: 10%;
      height: 10%;
      bottom: -10%;
      filter: blur(10px);
    } */
  }
  
  .ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub {
    background: #201414;
  }

  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: #150D0D;
    background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .ant-menu-dark .ant-menu-inline.ant-menu-sub {
    background: #150D0D;
  }

  .ant-message-notice {

    .ant-message-notice-content {
      background: rgba(0, 0, 0, 0.9);
      border-radius: 20px;
      max-width: 600px;
      padding: 2em 3em;

      .ant-message-custom-content {
        display: flex;
        flex-direction: column;
        align-items: center;

        .anticon {
          font-size: 22px;
        }

        span {
          margin-top: 0.5em;
          font-size: 16px;
        }
      }

    }

    &:nth-child(1) {
      margin-top: 20vh;
    }
  }
  .receive-mid{
display: flex;
 
  p {
    width: 50%;
    font-size: 21px;
font-family: Roboto, Roboto;
font-weight: 500;
color: #999999;
line-height: 27px;
  }
}
.realm-mid{
.ant-form {
  display: block;
}
}

.ant-checkbox:hover .ant-checkbox-inner{
  border-color: #A93AED;

}
.checkboxes{
  margin-right:10px;
  .ant-checkbox-input{
    border-color: #A93AED;
    
  width: 27px;
  height: 27px;
  border-color: #A93AED;
  }
  .ant-checkbox-inner{
    border-color: #A93AED;
    
  width: 27px;
  height: 27px;
  border-color: #A93AED;
  }
}

.ant-checkbox-checked .ant-checkbox-inner{
  
  width: 27px;
  height: 27px;
  background-color: #A93AED;
  border-color: #A93AED;
&:after{
  width: 8px;
  height: 14px;
}
}

.items-box{
  width: 100%;
  display: flex;
  .ant-form-item{
    
  }
}

.ant-form-item-explain-error{
  font-size: 21px;
font-family: Roboto, Roboto;
font-weight: 500;
color: #E55D5D;
line-height: 37px;

}
.mint-form{
  .ant-form-item{
    width: 100%;
  }
}
  .ant-form-item {
    width: 47%;
    margin-right:1em;
  }

  .ant-row{
    display: block;
}
  .ant-input{
        background: #140E0E;
border-radius: 5px;
border: 2px solid rgba(255,255,255,0.1);
      }

  .ant-radio-inner::after {
    background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
  }

  .ant-radio-checked .ant-radio-inner {
    border-color: #FFC02C;
  }

  .ant-switch-checked {
    background: #c29322;;
  }

  .ant-input, .ant-form-item-control-input, .ant-select, .ant-select-selector, .ant-input-status-error, .ant-input-affix-wrapper-status-error, .ant-input-affix-wrapper {
   
    &:focus{
      border-color: rgba(255, 255, 255, 0.10) !important;
    }

    &:hover{
      border-color: rgba(255, 255, 255, 0.10) !important;
    }
    &:active{
      border-color:rgba(255, 255, 255, 0.10) !important;
    }
    &::selection{
      background: rgba(255, 255, 255, 0.10) !important;
    }
  }
  .ant-input-affix-wrapper-focus{
    border-color: rgba(255, 255, 255, 0.10) !important;
  }
  
  .ant-form-item-label>label {
    font-size: 21px;
font-family: Roboto, Roboto;
font-weight: 500;
color: #999999;
line-height: 27px;
  }
.ant-col{
  margin-bottom:10px;
}
  .ant-input-number {
    width: 100%;
  }

  .ant-pagination {
    margin-top: 20px;
    padding: 1em 2em;
    .ant-pagination-total-text{
      float: right;
      font-size: 21px;
font-family: Roboto, Roboto;
font-weight: 500;
color: #5A607F;
line-height: 32px;
    }
    .ant-pagination-options{
      display: none;
    }  
    .ant-pagination-item-active:hover a {
      color: #FF8D4D;
    }

    .ant-pagination-item-active {
      border-color: #FF8D4D;

      a {
        color: #FF8D4D;
      }
    }

    .ant-pagination-item-link {
      color: hsla(0, 0%, 100%, .3);
      border-color: #434343;
      cursor: not-allowed;
      border-radius: 10px;
    }
  }

  .ant-pagination-item-link, .ant-pagination-item {
    background: #3F3535 !important;
    border-radius: 5px;
  }

  //ant step


  .ant-steps-vertical>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail {
    margin: 13px 2.5px;
    height: 115%;
    &:after {
      padding: 10px 2px;
      width: 2px;
    background-color: #1FD286;
}
  }

  .progress{
    width: 40px;
  }
  .ant-steps-item-container {
    outline: none;
    margin: 15px 0;
}
  .ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title {
    vertical-align: text-top;
    font-size: 27px;
font-family: Roboto, Roboto;
font-weight: 500;
color: #999999;
line-height: 37px;

  }
  .ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title {
    vertical-align: text-top;
    font-size: 27px;
font-family: Roboto, Roboto;
font-weight: 500;
color: #1FD286;
line-height: 37px;

  }
  .ant-steps-item-finish .ant-steps-item-icon {
    border-color: #FF8D4D;


    svg {
      fill: #FF8D4D;
    }
  }

  /* .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-tail:after {
    background-color: #FF8D4D;
  } */

  .ant-modal{
    width: 60%!important;
  }
  .ant-modal-content{
 
    background-color: #241B1B!important;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.1);
    .ant-modal-header{
      background: none;
      border-bottom: none;
      padding-top:20px;
      padding-bottom: 0px;
    }
    .ant-modal-close-x{
      margin: 14px 6px 0 0;

      svg{
        position: relative;
        vertical-align: super;
        width: 32px;
height: 32px;
        color: #FFFFFF;
      }
    }
    .ant-modal-title{
      text-align: left;
      font-family: Roboto-SemiBold, Roboto;
      font-weight: 600;
      padding: 10px 0;
      color: #FFFFFF;
    font-size: 32px;
line-height: 48px;
    }
    
    .input-title{
      font-size: 20px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #8A8080;
    }
    .input-content{
      padding: 0 20px;
      width: 100%;
    }
    .dialog-input,.input-content{
      margin-top: 10px;
      border-radius: 50px;
      height: 60px;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.1);
      font-size: 18px;
      overflow: hidden; 
      display: flex;
      .ant-row{
        width: 100%;
      }
      align-items: center;
      .temp-input{
        padding: 0 20px;
        font-size: 18px;
      }
      .ant-form-item-control-input{
        background: none;
        height: 100%;
        
      }
  
    }

  }
  .ant-modal-body {
padding-left:24px;
padding-right:24px;
padding-bottom: 3em;
padding-top: 0em;
    .up-list-box {
      margin: 1em 0;
      border-radius: 20px 20px 20px 20px;

      .up-header {
        display: flex;
        padding: 10px 1.8em;
        border-bottom: 1px solid rgba(234, 234, 234, 0.10);
      }

      .up-item, .up-header {
        justify-content: flex-start;

        .col {
          text-align: left;
          font-size: 16px;

          &:nth-child(1) {
            margin-left: 10px;
            width: 20%;
          }

          &:nth-child(2) {
            width: 70%;
            margin-left: 10px;
          }
        }
      }

      .up-item:last-child {
        border-bottom: none;
      }

      .up-item {
        padding: 10px 2em;
        color: #FFFFFF;
        margin: 0 auto;
        border-radius: 0px;
        border-bottom: 1px solid rgba(234, 234, 234, 0.10);;
        display: flex;
        .col {
          overflow: hidden;
          padding-left: 0%;

        }

        .address {
          a {
            color: #CD9E57;
            font-size: 12px;
          }
        }
      }
    }

    .pagination {
      text-align: center;

      .ant-pagination {
        margin: 10px auto;
      }
    }
  }

  @media screen and (max-width:1440px){

    .receive-mid{
display: flex;
 
  p {
    width: 50%;
    font-size: 16px;
font-family: Roboto, Roboto;
font-weight: 500;
color: #999999;
line-height: 20px;
  }
}
    .ant-btn-primary {
      font-size:16px;
      line-height:36px;
    }
    .ant-form-item-explain-error{
  font-size: 16px;
line-height: 28px;
}

.checkboxes{
  margin-right:10px;
  .ant-checkbox-input{
    border-color: #A93AED;
    
  width: 27px;
  height: 27px;
  border-color: #A93AED;
  }
  .ant-checkbox-inner{
    border-color: #A93AED;
    
  width: 20px;
  height: 20px;
  border-color: #A93AED;
  }
}
.ant-checkbox-checked .ant-checkbox-inner{
  
  width: 20px;
  height: 20px;
  background-color: #A93AED;
  border-color: #A93AED;
&:after{
  width: 6px;
  height: 10px;
}
}

  .ant-modal-content{
    .ant-modal-title{
    font-size: 24px;
line-height: 36px;
    }
    .ant-modal-close-x{
  
      svg{
 width: 24px;
height: 24px;
      }
    }
  }


  .ant-steps-vertical>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail {
    margin: 3px -2px;
    height: 127%;
    &:after {
      padding: 10px 2px;
      width: 2px;
    background-color: #1FD286;
}
  }
  .ant-steps-item-container {
    outline: none;
    margin: 10px 0;
}

  .ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title {
    font-size: 20px;
line-height: 28px;
  }
  .ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title {
    font-size: 20px;
line-height: 28px;
  }
  .progress{
    width: 30px;
  }
  .ant-pagination {
    .ant-pagination-total-text{
      font-size: 14px;
line-height: 20px;
    }
  }
  .ant-form-item-label>label {
    font-size: 16px;
line-height: 20px;
  }
  .check-btn{
    
    font-size:16px;
    line-height:28px;
  }
.add-btn{
span{
  font-size: 16px;
line-height: 34px;
}
}
}
`
export default AntdOverride
