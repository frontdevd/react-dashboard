import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'

const SidebarItem = (props) => {
  const layout = useSelector(state => state.layout)
  const collapseMenu = useSelector(state => state.collapseMenu)

  let itemTitle = props.item.title
  if (props.item.icon) {
    itemTitle = <span className='mtext'>{props.item.title}</span>
  }

  let subContent = (
    <NavLink to={props.item.url} className='nav-link' exact={true}>
      {props.item && <span className='micon'><i className={props.item.icon}/></span>}
      {itemTitle}
    </NavLink>
  )
  let mainContent = ''
  // if (props.layout === 'horizontal') {
  //   mainContent = (
  //     <li onClick={props.onItemLeave}>{subContent}</li>
  //   )
  // } else {
  if (props.windowWidth < 992) {
    mainContent = (
        <div className={props.item.classes} onClick={props.onItemClick}>{subContent}</div>
    )
  } else {
    mainContent = (
      <div className={props.item.classes}>{subContent}</div>
    )
  }
  // }
  console.log(mainContent)

  return (
    <>
      {mainContent}
    </>
  )
}

export default SidebarItem
