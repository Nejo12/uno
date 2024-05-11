import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={ `py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[8px] mt-4 mb-4` }>
      Mehr Erfahren
    </button>
  )
}

export default Button
