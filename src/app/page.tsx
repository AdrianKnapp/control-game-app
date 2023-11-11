import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <Image src="/logo.svg" alt="Vercel Logo" width={200} height={200} />
      </div>
    </div>
  )
}
