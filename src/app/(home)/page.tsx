import SocialLinks from '@/components/common/SocialLinks'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <picture>
          <Image src="/logo.svg" alt="Vercel Logo" width={150} height={150} />
        </picture>
        <h1 className="text-2xl font-semibold">App Control Game</h1>
      </div>
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
          },
          {
            icon: 'email',
            url: 'mailto:adrknapp@gmail.com',
            name: 'E-mail'
          }
        ]}
      />
    </div>
  )
}

export default Home
