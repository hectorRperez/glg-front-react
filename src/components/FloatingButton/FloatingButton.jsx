import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./styles.css";

function FloatingButton() {
  return (
    <>
      <div className="floating-container">
        <div className="floating-button">
          <MoreHorizIcon />
        </div>
        <div className="element-container">
          <a href="">
            <span className='float-element tooltip-left'>
              <p>Register now</p>
            </span>
          </a>
          <span className="float-element">
            <p>status payment</p>
          </span>
          <span className="float-element">
            <p>Track a shipment</p>
          </span>
          <span className="float-element">
            <p>chat</p>
          </span>
        </div>
      </div>
    </>
  )
}

export default FloatingButton