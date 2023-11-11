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
    <button className="button">
      {icon ? <div className="button-icon">{availableIcons[icon]}</div> : null}
      {children}
    </button>
  )
}

export default Button
