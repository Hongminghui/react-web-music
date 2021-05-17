import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;

  .content {
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 70px;
    /* 背景图从左上角开始，会覆盖sprite_01的位置 */
    background-position: 0 0;
    /* 文本缩进，让文字出现在屏幕外 */
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
    line-height: 70px;

    .select-item {
      position: relative;

      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      /* 加上hot，未成功 */
      :last-of-type a {
        display: block;
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          /* background-image: url(${require("@/assets/img/sprite_01.png")}); */
          /* background-image: url(../../assets/img/sprite_01.png); */
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADXCAMAAAATIiwuAAAB5lBMVEUAAAD////////////////////////////////////////////////////////////////mACb////////////////////////////////////////////mACbmACbmACbmACbmACb////mACbmACbmACbmACb////mACb////////////////mACb////////////////////////////////////////////////////////////////////////////////mACb///////8kJCT////mACZPT0/CDAzAABQAAACRkZEnJydFRUU8PDxLS0spKSnMzMwuLi45OTlBQUE2NjYxMTGLi4tgAApbW1tJSUl4eHiamppXV1dDQ0PADAwrKytISEjoDDDY2Nj55OW7u7uSkpLpH0DpFTjnByz+9ffp6emFhYWBgYF9fX12dnZubm5lZWVkZGRfX1/TUlJDICBzGBiMFBSzDg7/+/zw8PD6ztX6xs7xcofqJ0j+7/LtQl7AwMD4sbz2nayioqLzhJbwZHzsOVbrL0729vb96Oz83eLIyMi+vr71l6byfJBuAQr4uML3pbP0k6P0kKH0iJrvWHHuTGc+Pj5UAwhTAwj71dz5vcewsLDzgZRtAQrn5+cpq/+1AAAARXRSTlMA8HBAwLBQ4ZCAMND7DwugAwwgB/Xd5+zMaWJLGOrm5MrAt6iIeF1cQismHhMCvKiXildFNyMB2HYz0sR8cy7IUzsVrYRjo6JRAAAJY0lEQVR42uzZ+U/TYBzH8W/Zieu64u4NUZD7Hjdyq3waNP4PJIQEtp/lWDgD4QgkeGs8on+qz9N2e1o2pr/UxMIr0ZUl/PDm+fZp19H/bnFxcWNre3nJYnl7a4O9TaaX3Ldf+gv9/xYXN0WtaN58ZQv+9uLFW7cEby5VtWkN/vqCeeuO4A2+vtD/vV7F6uslcGyNN8hk9PJiVwRvLZWDV1+zZv2I2yITm2fTLzcEb4tglI+4bTLx9TW9pf/fsh7MXA9eJneqscLuVOMcdqeKXdoMZru0O9W4DrvTjXda7g2+4V7arcF37ty5c1v0dbY2N2ma1tTc2tlHrtfQ9lATHrY1kLu1P9DsHrSTizU81io9du8iP32kVfPoKblT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);
          background-position: -190px 0;
          top: 20px;
          right: -15px;
          border-radius: 50%;
        }
      }

      /* .active是NavLink自带的类 */
      &:hover a, .active {
        color: #fff;
        background-color: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
  }

  input {
    &::placeholder {
      font-size: 12px;
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
  }
`