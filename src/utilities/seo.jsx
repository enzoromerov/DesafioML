import React from "react";
import { Helmet } from "react-helmet";

function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{title || "Mercado Libre - Busca todo lo que necesites"}</title>
      <meta name="description" content={description || "Encontrá productos, marcas y más en Mercado Libre"} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}

export default SEO;