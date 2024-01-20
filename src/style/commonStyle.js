import {createGlobalStyle} from "styled-components";

const CommonStyle = createGlobalStyle`


.wallet-nav-list {

display: flex;
height: 45px;
width: 100%;
user-select: none;
border-bottom: 1px solid rgba(255,255,255,0.1);;
.nav-item {
  margin-right:30px;
  display: flex;
  font-size:21px;
  line-height:27px;
  cursor: pointer;
  font-family: Roboto, Roboto;
font-weight: bold;
  margin-left: 8px;
color:#999999;
  &:first-child {
    margin-left: 0;
  }

  &.active {
    border: none;
    font-weight: bold;
color: #FE6D46;
    border-bottom:2px solid #FE6D46;

  }
}
}

.send-nav-list{

.send-item{
  margin-right:10px;
  color: #FFFFFF;
    text-align:center;
    background: #241B1B;
border-radius: 5px 5px 5px 5px;

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

  .admin-icon-box {
    padding: 3px;
    border: 1px solid #fff;
    float: right;
    width: 50px;
    height: 50px;
    margin-right: 6vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    background: rgba(183, 183, 183, 0.3);

    .admin-icon {
      width: 30px;
      height: 30px;
    }
  }

  @media screen and (max-width: 1440px){
    .wallet-nav-list{
      .nav-item{
        
  font-size:16px;
  line-height:20px;
      }
    }
  }

`
export default CommonStyle