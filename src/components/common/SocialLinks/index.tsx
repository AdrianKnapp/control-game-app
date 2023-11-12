import Button from '@/components/ui/Button'
import Link from 'next/link'
import { SocialLinksProps } from './types'

const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div data-cid="social-links" className="flex flex-col gap-4">
      {links.map(({ icon, url, name }) => (
        <Link key={icon} href={url} target="_blank">
          <Button icon={icon}>{name}</Button>
        </Link>
      ))}
    </div>
  )
}

export default SocialLinks
