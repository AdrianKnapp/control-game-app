import { VariantProps } from "class-variance-authority"
import { availableIcons } from "."
import { buttonVariants } from "./variance"
import { PropsWithChildren } from "react"

export interface ButtonProps extends
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  PropsWithChildren,
  VariantProps<typeof buttonVariants> {
  icon?: keyof typeof availableIcons
}
