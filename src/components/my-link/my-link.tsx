import React, { forwardRef, ForwardRefExoticComponent } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

export const MyLink: ForwardRefExoticComponent<NavLinkProps> = forwardRef((props, _): JSX.Element => {
  return <NavLink {...props} />
})
