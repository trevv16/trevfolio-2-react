import { Helmet } from 'react-helmet-async';

export default function SeoHelmet(props: any): any {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name='description' content={props.description} />
      <meta name={`og:${props.title}`} property="og:Trevor's Portfolio" content={props.description} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@trevva_' />
      <meta name='twitter:title' content={props.title} />
      <meta name='twitter:description' content={props.description} />
      <meta name='twitter:image' content={props.image} />
      <meta name='twitter:image:alt' content={props.image_alt} />
    </Helmet>
  );
}
