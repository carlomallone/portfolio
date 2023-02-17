import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Engineering Lead | Carlo Mallone',
    description: 'Empowering engineering teams for start-up and scale-up founders',
    image: 'https://media.licdn.com/dms/image/C4D03AQGObQk4_hkn9w/profile-displayphoto-shrink_800_800/0/1623419583502?e=1681948800&v=beta&t=6i9uwQFBgeh6590FlWK-I84GSe_hrnkCv9pK-FtwSIY'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@carlomallone" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
