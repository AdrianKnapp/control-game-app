import { ButtonProps } from "@/components/ui/Button/types"

export interface SocialLinksProps {
  links: {
    icon: ButtonProps['icon']
    url: string
    name: string
  }[]
}