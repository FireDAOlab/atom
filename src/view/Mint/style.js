
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
.fee{
    margin-top:1em;
}
.rece-add{
    font-size: 19px;
font-family: Inter, Inter;
font-weight: 500;
color: #FFFFFF;
line-height: 27px;
vertical-align:text-bottom;
}
.check-bx{
    margin-bottom:1em;
}


@media screen and (max-width: 1440px){
    .rece-add{
    font-size: 14px;
font-family: Inter, Inter;
font-weight: 500;
color: #FFFFFF;
line-height: 20px;
}
    
    .send-nav-list{
        .send-item{
            font-size: 16px;
    line-height:25px;
        }
    }
    
    .atom-id{
font-size: 16px;
line-height: 20px;
  }
  .atom-datas{
font-size: 16px;
line-height: 20px;
  }
}
`