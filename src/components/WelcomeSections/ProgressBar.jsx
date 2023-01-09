import React, { useEffect, useState } from 'react'

import "./styles.css";

export default function ProgressBar({ counter }) {


  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (filled < counter && isRunning) {
      setTimeout(() => setFilled(prev => prev += 1), 100)
    }
  }, [filled, isRunning])

  addEventListener("scroll", () => {
    if (window.scrollY >= 212) {
      setIsRunning(true);
    }
  })

  return (
    <>
      <div className="progressbar">
        <div className='element' style={{
          height: "100%",
          width: `${filled}%`,
          transition: "width 0.5s",
        }}></div>
        <div className="elementLoader" style={{
          height: "100%",
          width: `${counter}%`,
        }}></div>
        <span className='progressPorcent'>{filled}+</span>
      </div>
    </>
  )
}
