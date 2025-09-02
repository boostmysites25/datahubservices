import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage, 
  ogType = 'website',
  structuredData,
  noindex = false
}) => {
  const baseUrl = 'https://www.advancedatahub.com';
  const defaultTitle = 'Advance Data Hub - AI, Web & App Development Services';
  const defaultDescription = 'Leading provider of AI development, web development, app development, data science, machine learning, NLP, and blockchain solutions. Custom software development services with ethical foundations.';
  const defaultKeywords = 'AI development, web development, app development, data science, machine learning, blockchain, NLP, software development, custom software, mobile apps, e-commerce, data analytics';
  const defaultImage = `${baseUrl}/logo.png`;

  const finalTitle = title ? `${title} | Advance Data Hub` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const finalImage = ogImage || defaultImage;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content="Advance Data Hub" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalCanonical} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={finalImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
