import { styled } from "styled-components";

export default styled.div`
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


@media screen and (max-width:1440px){

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




`