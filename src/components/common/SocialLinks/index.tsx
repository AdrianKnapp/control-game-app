import Button from '@/components/ui/Button'
import Link from 'next/link'
import { SocialLinksProps } from './types'

const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div data-cid="social-links" className="flex gap-4">
      {links.map(({ icon, url }) => (
        <Link key={icon} href={url} target="_blank">
          <Button
            icon={icon}
            variant="floating"
            className="flex w-fit items-center justify-center rounded-full bg-white p-2 shadow-md shadow-gray-200 duration-default hover:bg-black-dark hover:text-white"
          />
        </Link>
      ))}
    </div>
  )
}

export default SocialLinks
