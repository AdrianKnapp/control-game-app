import { ContactForm } from '@/components/common/ContactForm'
import SocialLinks from '@/components/common/SocialLinks'
import Button from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="mx-auto flex w-full max-w-[550px] flex-col px-5 pb-5 pt-5 lg:pt-10">
      <div className="flex w-full flex-col items-center">
        <Image src="/logo.svg" alt="Vercel Logo" width={150} height={150} />
        <h1 className="sr-only text-2xl font-semibold">App Control Game</h1>
      </div>
      <div className="mb-4 flex w-full justify-center">
        <SocialLinks
          links={[
            {
              icon: 'instagram',
              url: 'https://www.instagram.com/app_controlgame/',
              name: 'Instagram'
            },
            {
              icon: 'whatsapp',
              url: 'https://wa.me/555384577633',
              name: 'WhatsApp'
            }
          ]}
        />
      </div>
      <ContactForm />
      <div className="mt-5 flex flex-col items-center justify-between gap-1 text-sm font-light text-gray-400 lg:flex-row">
        <p>Powered by Control Game App</p>
        <p>Política de Privacidade</p>
      </div>
    </div>
  )
}

export default Home
