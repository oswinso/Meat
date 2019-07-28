import { useState, useEffect } from 'react'
import { createContainer } from 'unstated-next'

export const useMouseStatus = () => {
  const [down, setDown] = useState(false)

  function handleDown() {
    setDown(true)
  }

  function handleUp() {
    setDown(false)
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
    };
  }, []);

  return down
}

export const MouseStatusStore = createContainer(useMouseStatus)
