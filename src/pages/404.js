import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Layout, H1 } from "../components";

export default function NotFound() {
  return (
    <Layout
      page="404"
      title="Not found"
      image={
        <StaticImage
          src="../assets/images/notfound-cover.jpg"
          width={1920}
          height={680}
          quality={90}
          alt="Not found cover image"
          itemProp="thumbnailUrl"
        />
      }
      className="h-full justify-center"
    >
      <H1>Nothing to see here...</H1>
    </Layout>
  );
}
