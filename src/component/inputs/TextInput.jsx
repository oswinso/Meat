import React from 'react'

import './inputs.css'

const TextInput = React.forwardRef(({placeholder, text, setText, ...rest}, ref) => {
  const onChange = e => {
    setText(e.target.value)
  }

  return <input type="text" ref={ref} className="text-input" {...rest} placeholder={placeholder} value={text} onChange={onChange} />
})

export default TextInput
