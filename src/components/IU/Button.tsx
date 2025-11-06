import React from 'react'
import './Button.scss'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline'
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...rest }) => {
  const cls = `btn btn--${variant} ${className}`.trim()
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}

export default Button
