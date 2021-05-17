import styled from 'styled-components'

export const AppFooterWrapper = styled.div`
  height: 172px;
  background-color: #f2f2f2;
  color: #666;
  border-top: 1px solid #d3d3d3;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const FooterLeft = styled.div`
  padding: 15px;
  line-height: 24px;

  .link {
    a {
      color: #999;
    }

    .line {
      margin: 0 10px;
      color: 999px;
    }
  }

  .copyright {
    span {
      margin-right: 15px;
    }
  }

  .report {
    span {
      margin-right: 15px;
    }
  }

  .info {
    span, a {
      margin-right: 15px;
    }
    .police-logo {
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 2px;
      vertical-align: -2px;
      background: url(https://s2.music.126.net/style/web2/img/3rd/police.png?f3e4cad1956d01413e0d9242e2b14cec) 0% 0% / cover no-repeat;
    }
  }
`

export const FooterRight = styled.div`
  display: flex;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;

    .link {
      display: block;
      width: 50px;
      height: 45px;
      /* background-image: url(${require("@/assets/img/sprite_footer_02.png")}); */
      /* background-image: url(../../assets/img/sprite_footer_02.png); */
      background-image: url(https://s2.music.126.net/style/web2/img/foot_enter_new.png?597eb674cc5b69f98b36c598ef890606);
      background-size: 110px 450px;
    }

    :nth-child(1) .link {
      background-position: -60px -78px;
    }
    :nth-child(2) .link {
      background-position: 0 -78px;
    }
    :nth-child(3) .link {
      background-position: 0 5px;
    }
    :nth-child(4) .link {
      background-position: -60px -37px;
    }

    .title {
      font-size: 10px;
      color: rgb(212,212,212);
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      text-align: center;
    }
  }
`
