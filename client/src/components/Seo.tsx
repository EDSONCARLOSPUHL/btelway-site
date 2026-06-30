/**
 * Seo — meta tags por página (title, description, robots, canonical, Open Graph).
 * Mantém o site indexável (index,follow) e posiciona a BTELWAY como IA privada,
 * soberana e em conformidade com a LGPD. Não altera conteúdo nem design.
 */
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.btelway.ia.br";
const SITE_NAME = "IA BTELWAY";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

export default function Seo({ title, description, path = "/" }: SeoProps) {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="pt_BR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
