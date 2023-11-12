import { cloneElement } from 'react'
import {
  LiaLinkedin,
  LiaInstagram,
  LiaGithub,
  LiaWhatsapp
} from 'react-icons/lia'
import { TbMessagePlus } from 'react-icons/tb'
import { ButtonProps } from './types'
import { buttonVariants } from './variance'

export const availableIcons = {
  linkedin: <LiaLinkedin />,
  instagram: <LiaInstagram />,
  github: <LiaGithub />,
  whatsapp: <LiaWhatsapp />,
  email: <TbMessagePlus />
}

const Button = ({ children, icon, variant, ...props }: ButtonProps) => {
  return (
    <button
      className={buttonVariants({
        variant
      })}
      {...props}
    >
      {icon ? (
        <div className="h-6 w-6">
          {cloneElement(availableIcons[icon], {
            className: 'w-full h-full'
          })}
        </div>
      ) : null}
      {children}
    </button>
  )
}

export default Button
