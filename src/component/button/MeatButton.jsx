import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import 'component/button/MeatButton.css'

const MeatButton = (props) => {
  const { to, enabled } = props
  const [redirect, setRedirect] = useState(false)

  const onClick = () => {
    if (props.onClick) {
      props.onClick()
    } else if (enabled) {
      setRedirect(true)
    }
  }

  return redirect ? <Redirect push to={to}/> : <button className={`go-next ${enabled ? "active" : "disabled"}`} onClick={onClick}>{props.children}</button>
}

export default MeatButton
