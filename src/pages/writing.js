import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Layout } from "../components";

export default function Writing() {
  return (
    <Layout
      page="writing"
      title="Writing"
      image={
        <StaticImage
          src="../assets/images/writing-cover.jpg"
          className="w-full brightness-75"
          height={680}
          quality={90}
          alt="About cover image"
        />
      }
    >
      Hello there
    </Layout>
  );
}
