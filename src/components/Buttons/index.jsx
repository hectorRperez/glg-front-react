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


/**

La función Button es un componente de React que se utiliza para mostrar un botón en la interfaz de usuario.
@param {Object} props - Los props del componente Button.
@param {string} props.children - El contenido del botón.
@param {string} props.size - El tamaño del botón. Puede ser "small", "medium" o "large".
@param {string} props.color - El color del botón. Puede ser "primary", "secondary" o "tertiary".
@param {bool} props.rounded - Un indicador de si el botón debe tener bordes redondeados.
@param {string} props.className - Una clase CSS adicional para aplicar al botón.
@param {Object} props.other - Cualquier otro atributo que se desee agregar al botón.
*/

// La función Button es un componente de React que muestra un botón en la interfaz de usuario.
export const Button = (props) => {


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
