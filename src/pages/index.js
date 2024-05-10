import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as Icons from "react-icons/io5";
import {
  P,
  A,
  HorizontalSection,
  ColumnSection,
  SectionColumn,
  Layout,
} from "../components";
import { graphql } from "gatsby";
import CV from "../assets/docs/cv.pdf";

export default function About({ data }) {
  const siteUrl = data.site.siteMetadata.siteUrl;

  return (
    <Layout
      page="about"
      title="About"
      image={
        <StaticImage
          src="../assets/images/about-cover.jpg"
          className="w-full brightness-75"
          width={1920}
          height={680}
          quality={90}
          alt="About cover image"
          itemProp="image"
        />
      }
    >
      <aside
        className="w-full space-y-2 text-center text-xl sm:text-2xl md:text-3xl font-poppins font-thin pt-8 pb-6 sm:pt-12 sm:pb-9 md:pt-16 md:pb-12"
        id="titles"
      >
        <p>
          <span itemProp="jobTitle">MSc. EE Graduate</span> from{" "}
          <span itemProp="alumniOf">Ghent University</span> and{" "}
          <span itemProp="alumniOf">Columbia University</span>
        </p>
        <p>
          <span itemProp="jobTitle">Freelance AI Engineer</span> at{" "}
          <span itemProp="brand">FS Technologies</span>
        </p>
      </aside>
      <div className="flex flex-col w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
        <HorizontalSection
          title="Who am I?"
          image={
            <StaticImage
              src="../assets/images/profile-picture.jpg"
              quality={90}
              className="w-80 rounded-md my-4"
              alt="Portrait of Flor Sanders"
              itemprop="image"
            />
          }
          className="sm:px-4"
          itemScope
          itemType="https://schema.org/Person"
          itemID={`${siteUrl}/#me`}
          itemRef="titles contact"
          itemProp="creator"
        >
          <P>
            Hi! My name is{" "}
            <span itemProp="name">
              <span itemProp="givenName">Flor</span>{" "}
              <span itemProp="familyName">Sanders</span>
            </span>
            .
          </P>
          <P itemProp="description">
            Ever since I was young, I've had a fascination with science and
            technology. I found my passion in the fields of computer science and
            electrical engineering, which I have pursued in my academic studies
            at Ghent University and Columbia University. Today, I am committed
            to leveraging cutting-edge technologies to create positive impact in
            our world.
          </P>
          <P>
            Beyond engineering, I find joy in the culinary arts, strumming
            melodies on my guitar, immersing myself in literature, and engaging
            with diverse topics ranging from economics and entrepreneurship to
            politics and philosophy.
          </P>
          <P>
            I thrive on connection and am always eager to exchange ideas over a
            drink.
            <br />
          </P>
          <P className="pt-3">
            <a
              href="https://cal.com/florsanders/meet"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white font-bold text-xl py-2 px-3 rounded-md mt-2 flex flex-row items-center justify-center"
            >
              <Icons.IoCalendarOutline className="mr-2" />
              Schedule a meeting
            </a>
            <a
              href={CV}
              download
              className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white font-bold text-xl py-2 px-3 rounded-md mt-2 flex flex-row items-center justify-center"
            >
              <Icons.IoDownloadOutline className="mr-2" />
              Download CV
            </a>
          </P>
        </HorizontalSection>
        <ColumnSection
          id="contact"
          title="Get in touch"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          <SectionColumn
            className="hidden sm:block"
            title="Online"
            icon={<Icons.IoMailOutline />}
          >
            <P>
              For short questions or messages, send me a message on{" "}
              <A to="https://www.linkedin.com/in/flor-sanders/">LinkedIn</A>.
            </P>
            <P>
              For longer enquiries, please send me an{" "}
              <A to="mailto:me@florsanders.be">email</A>.
            </P>
          </SectionColumn>
          <SectionColumn
            className="hidden sm:block"
            title="Phone"
            icon={<Icons.IoCallOutline />}
          >
            <P>
              Want to discuss something quickly over the phone? Urgently need to
              get a hold of me?
            </P>
            <P>
              Give me a call on <A to="tel:+32479873490">0479873490</A>.
            </P>
          </SectionColumn>
          <SectionColumn
            className="sm:col-span-2 lg:col-span-1 hidden sm:block"
            title="Real life"
            icon={<Icons.IoCafeOutline />}
          >
            <P>Real conversations happen in the real world.</P>
            <P>
              If you want to discuss something or just have a talk, hit me up
              and we'll make it happen!
            </P>
          </SectionColumn>
          <div className="space-y-2 sm:hidden">
            <div className="flex flex-row items-center justify-center space-x-2">
              <Icons.IoMail className="text-xl" />
              <A to="mailto:me@florsanders.be" itemProp="email">
                me@florsanders.be
              </A>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <Icons.IoCall className="text-xl" />
              <A to="tel:+32479873490" itemProp="telephone">
                0479873490
              </A>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <Icons.IoLogoLinkedin className="text-xl" />
              <A to="https://www.linkedin.com/in/flor-sanders/">
                in/Flor-Sanders
              </A>
            </div>
            <div className="flex flex-row items-center space-x-2 col-span-2 justify-center">
              <Icons.IoCafe className="text-xl" />
              <P>Real life</P>
            </div>
          </div>
        </ColumnSection>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
