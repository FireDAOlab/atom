
import { styled } from "styled-components"
export default styled.div`

.wallet-contain{
    width: 100%;
    display: flex;
 
    .wallet-btn{
        width: 200px;
        height: 50px;
margin-left:20px;
font-family: Roboto, Roboto;
font-weight: bold;
color: #FE6D46;
font-size: 21px;
font-family: Roboto, Roboto;
font-weight: 600;
line-height: 25px;
        .wallet-img{
            width:36px;
            float:left;
        }
    }
    .wallet-btn>span{
        
    vertical-align: sub;
    font-size: 21px;
font-family: Roboto, Roboto;
font-weight: 600;
line-height: 25px;
    }

    .speed-box{
        display: flex;
        padding: 8px;
        .speed-img{
            width:36px;
        }
        span{
font-family: Roboto, Roboto;
font-weight: 600;
color: #FFFFFF;
margin: auto 5px;
vertical-align: sub;
font-size: 21px;
line-height: 25px;
        }
    }
}


@media screen and (max-width:1440px){
    
.wallet-contain{
    .speed-box{
 .speed-img{
            width:28px;
        }
        span{
line-height: 19px;
font-size: 16px;
        }
    }
    .wallet-btn{
        
        width: 150px;
        height: 40px;
padding: 5px;
margin-left:20px;
  .wallet-img{
            width:28px;
        }
    }
    .wallet-btn>span{
    font-size: 16px;
line-height: 24px;
vertical-align:bottom;
}
}
}

@media screen and (max-width:750px){

}
`



