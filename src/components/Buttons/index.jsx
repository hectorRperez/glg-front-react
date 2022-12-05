import clsx from "clsx";

import "./styles.css";

import React from 'react'

const sizes = {
  "medium": "button-medium",
  "large": "button-large"
}

const colors = {
  "primary": "button-primary",
  "secondary": "button-secondary"
}


export const Button = (props) => {

  /**
* Custom Button
* @param {Object} props it have multiples properties 
* @param {String} children children
* @param {String} size button length (medium or large)
* @param {String} color button 
* @param {Boolean} rounded true or false for rounded button 
* @param {Object} className class CSS independent 
* @return {Button} The Button ready for use
*/

  const { children, size, color, rounded, className, ...other } = props;

  const classButton = clsx('button-main', {
    "buttonButton": rounded,
    [colors[color] || "button-primary"]: true,
    [sizes[size] || "button-medium"]: true,
    [className]: className
  })

  return (
    <button {...other} className={classButton} >
      {children}
    </button>
  )
}
