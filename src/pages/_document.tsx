import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

const META_TAGS_SETTINGS = {
  TITLE: 'Duo Studio Interativo',
  DESCRIPTION:
    'Somos uma agência digital 360º, certificada GPTW. Criamos projetos de apps, sites, mkt digital, SEO e Inbound com RD.',
  THUMBNAIL_URL: 'https://desafio-duo.vercel.app/thumbnail.png',
  URL: 'https://desafio-duo.vercel.app'
}

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="use-credentials"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Roboto+Condensed:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="favicon.png" />

          {/* Meta tags */}

          <meta name="robots" content="all" />

          <meta name="title" content={META_TAGS_SETTINGS.TITLE} />
          <meta name="description" content={META_TAGS_SETTINGS.DESCRIPTION} />
          <meta
            name="keywords"
            content="site, marketing digital, SEO, Inbound com RD, Software"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={META_TAGS_SETTINGS.URL} />
          <meta property="og:title" content={META_TAGS_SETTINGS.TITLE} />
          <meta
            property="og:description"
            content={META_TAGS_SETTINGS.DESCRIPTION}
          />
          <meta
            property="og:image"
            content={META_TAGS_SETTINGS.THUMBNAIL_URL}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={META_TAGS_SETTINGS.URL} />
          <meta property="twitter:title" content={META_TAGS_SETTINGS.TITLE} />
          <meta
            property="twitter:description"
            content={META_TAGS_SETTINGS.DESCRIPTION}
          />
          <meta
            name="twitter:image"
            content={META_TAGS_SETTINGS.THUMBNAIL_URL}
          />

          <meta charSet="utf-8" />
          <meta name="next-head-count" content="4" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
