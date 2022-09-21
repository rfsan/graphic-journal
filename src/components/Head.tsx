import NextHead from "next/head"

export const Head = () => {
  const { og } = {
    og: {
      title: "Rafael's Graphic Journal",
      description:
        "Moments of my life accompanied by images created with Text-to-Image models",
      url: "https://graphic-journal.vercel.app/",
    },
  }

  return (
    <NextHead>
      <title>{og.title}</title>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧙‍♂️</text></svg>"
      ></link>
      <meta
        name="description"
        content="Rafael's Graphic Journal. I use Text-to-Image models to create an image for my daily entries."
      />
      {/* OG */}
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:title" property="og:title" content={og.title} />
      <meta
        key="og:description"
        property="og:description"
        content={og.description}
      />
      <meta key="og:url" property="og:url" content={og.url} />
      {/* OG Image */}
      <meta
        key="og:image"
        property="og:image"
        content="https://graphic-journal.vercel.app/images/preview.jpg"
      />
      <meta
        key="image"
        property="image"
        content="https://graphic-journal.vercel.app/images/preview.jpg"
      />
      <meta property="og:image:width" content="512" />

      <meta property="og:image:height" content="512" />
    </NextHead>
  )
}
