import React from 'react'

import './inputs.css'

const TextArea = ({placeholder, text, setText, attributes}) => {
  const onChange = e => {
    setText(e.target.value)
  }

  return <textarea className="text-area" {...attributes} placeholder={placeholder} value={text} onChange={onChange} />
}

export default TextArea
