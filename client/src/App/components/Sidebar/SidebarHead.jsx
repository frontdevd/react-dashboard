import React from 'react'

const SidebarHead = (props) => {
  let toggleClass = ['mobile-menu']
  if (props.collapseMenu) {
    toggleClass = [...toggleClass, 'on']
  }

  return (
    <div>
      <div className='navbar-brand header-logo'>
        <a href='#' className='logo'><span className='b-title'>Dashboard</span></a>
      </div>

      <div>
        <a href='#'
           className={toggleClass.join(' ')}
           id='mobile-collapse'
           onClick={props.onToggleNavigation}><span/></a>
      </div>
    </div>
  )
}

export default SidebarHead
