import './Button.scss'
import type { FC, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline'
  children?: ReactNode
}

const Button: FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...rest }) => {
  const cls = `btn btn--${variant} ${className}`.trim()
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}

export default Button
