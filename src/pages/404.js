import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Layout } from "../components";

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
        />
      }
      className="h-full justify-center"
    >
      <h2 className="text-4xl font-poppins">Nothing to see here...</h2>
    </Layout>
  );
}
