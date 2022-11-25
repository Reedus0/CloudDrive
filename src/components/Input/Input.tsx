import React from 'react'

import './Input.scss'

export default function Input(props: any) {
  return (
    <div className='input'>
      <h1 className='input__placeholder'>{props.placeholder}</h1>
      <input
        name={props.name}
        type={props.type}
        className={["input__input", props.class].join(" ")}
      />
    </div>
  )
}
