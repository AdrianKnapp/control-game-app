import { cloneElement } from 'react'
import {
  LiaLinkedin,
  LiaInstagram,
  LiaGithub,
  LiaWhatsapp
} from 'react-icons/lia'
import { TbMessagePlus } from 'react-icons/tb'

const availableIcons = {
  linkedin: <LiaLinkedin />,
  instagram: <LiaInstagram />,
  github: <LiaGithub />,
  whatsapp: <LiaWhatsapp />,
  email: <TbMessagePlus />
}

export type ButtonProps = {
  children: JSX.Element | string
  icon?: keyof typeof availableIcons
}

const Button = ({ children, icon }: ButtonProps) => {
  return (
    <button className="flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-black-dark shadow-md shadow-gray-200 duration-default hover:bg-black-dark hover:text-white">
      {icon ? (
        <div className="mr-2 h-6 w-6">
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
