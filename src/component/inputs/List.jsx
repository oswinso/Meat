import React, {useRef, useEffect} from 'react'

import './List.css'
import scrollIntoView from 'scroll-into-view-if-needed'

const List = ({ values, listValue, setListValue, className=""}) => {
  let refs = useRef(Array(values.length).fill(React.createRef()))

  useEffect(() => {
    const index = values.findIndex(x => x === listValue)
    scrollIntoView(refs.current[index], {
      scrollMode: 'if-needed',
      block: 'nearest',
      inline: 'nearest',
    })
  }, [listValue, values, refs])

  return (
    <div className={"list " + className}>
      {values.map((value, index) => {
        return <div ref={node => refs.current[index] = node} className={`list-item ${value === listValue ? "active" : ""}`} key={index} onClick={() => setListValue(value)}>{value}</div>;
      })}
    </div>
  )
}

export default List
