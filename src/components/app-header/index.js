import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import {headLinks} from '@/services/local-data.js'

import {Input} from 'antd'
import {SearchOutlined} from '@ant-design/icons'

import {
  AppHeaderWrapper, 
  HeaderLeft,
  HeaderRight
} from './style'

export default memo(function MHAppHeader() {

  const showItem = (item, index) => {
    if(index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    }else {
      return <a href={item.link} target='_blank' rel="noopener noreferrer">{item.title}</a>
    }
  }

  return (
    <AppHeaderWrapper>
      <div className="wrap-v1  content">
        <HeaderLeft>
          <a className="logo sprite_01" href='#/'>网易云音乐</a>
          <div className="select-list">
            {
              headLinks.map((item, index) => {
                return (
                  <div className="select-item" key={item.title}>
                    {showItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input placeholder="音乐/视频/电台/用户" className="search" prefix={<SearchOutlined />}></Input>
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </AppHeaderWrapper>
  )
})
