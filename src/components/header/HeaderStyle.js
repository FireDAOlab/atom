
import { styled } from "styled-components"
export default styled.div`

.head-contain{
    display:flex;
    width: 100%;
    height: 50px;
    margin: 1em 0;
  
    .logobox{
        width: 20%;
        margin: auto;

        .logo{
            width: 160px;
        }
    }
    .nav-list{
        width: 50%;
        display: flex;
      flex-grow: 1;
      padding: 0 4em;
      align-items: center;

      .nav-item {
        margin: 0 2em;
        font-size: 21px;
line-height: 25px;
        cursor: pointer;
font-family: Roboto, Roboto;
        font-weight: 600;
        a {
          color: #FFFFFF;
        }

        .active {
          font-weight: 600;
          color: #FE6D46;
        }
      }

    }

.walletbox{
width: 30%;
}

}

hr{
    background: #140E0E;
box-shadow: 0px 1px 4px 0px rgba(255,255,255,0.08);
opacity: 0.1;
}
@media screen and (max-width:1440px){

    .head-contain{
        .logo-box{
             width: 20%;
            .logo{
            width: 120px;
            margin: 1em 0;
        }
        }
       
        .nav-list{
             width: 50%;
            .nav-item{ 
            font-size: 16px;
            line-height: 19px;
            }
        }
        .walletbox{
            width: 30%;
        }

    }

}
`



