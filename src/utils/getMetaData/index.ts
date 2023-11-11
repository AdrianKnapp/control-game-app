import { Metadata } from 'next'
import { OpenGraphType } from 'next/dist/lib/metadata/types/opengraph-types'

interface GetMetaDataProps {
  title: string
  description: string
  image: string
  url: string
  type?: OpenGraphType
}

const baseDomain = process.env.BASE_DOMAIN ?? ''

export const getMetaData = ({
  title,
  description,
  image,
  url,
  type = 'website'
}: GetMetaDataProps): Metadata => {
  const images = [image]
  const fullUrl = `${baseDomain}${url}`

  return {
    metadataBase: new URL(baseDomain),
    title,
    description,
    alternates: {
      canonical: fullUrl,
      languages: {
        'pt-BR': fullUrl
      }
    },
    openGraph: {
      type,
      images,
      title,
      description,
      url: fullUrl
    },
    twitter: {
      title,
      description,
      images
    }
  }
}
