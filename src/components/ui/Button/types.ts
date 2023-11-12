import { availableIcons } from "."

export interface ButtonProps {
  children: JSX.Element | string
  icon?: keyof typeof availableIcons
}