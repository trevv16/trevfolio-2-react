function getSeo(title: string, description: string, image: string, site_url: string) {
  return (
    <>
      <html lang='en' />
      <title>{title}</title>
      <link rel='canonical' href={site_url} />
      <meta name='description' content={description} />
      {/* OG SEO */}
      <meta property='og:locale' content='en_us' />
      <meta property='og:url' content={site_url} />s
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:image:alt' content={description} />
      {/* Twitter SEO */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={image} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:image:alt' content={description} />
    </>
  );
}

export { getSeo };
