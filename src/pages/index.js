import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as Icons from "react-icons/io5";
import {
  P,
  A,
  Ul,
  Ol,
  Li,
  HorizontalSection,
  ColumnSection,
  SectionColumn,
  SliderSection,
  SectionSlide,
  Layout,
} from "../components";

export default function About() {
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
        />
      }
    >
      <aside className="w-full space-y-2 text-center text-xl sm:text-2xl md:text-3xl font-poppins font-thin pt-8 pb-6 sm:pt-12 sm:pb-9 md:pt-16 md:pb-12">
        <p>MSc. EE Student at Ghent University</p>
        <p>Freelance Developer at FS Technologies</p>
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
            />
          }
          className="sm:px-4"
        >
          <P>Hi! My name is Flor Sanders.</P>
          <P>
            Ever since I was young, I've had a fascination with science and
            technology. Over the years I have explored this interest, building
            knowledge and honing my skills. Today, I make use of innovative
            approaches to solve real-world practical problems.
          </P>
          <P>
            Besides engineering I enjoy cooking, play the guitar, like reading
            and have a general interest in a broad range of other subjects, from
            economy and entrepreneurship to psychology and philosophy.
          </P>
          <P>
            As I love meeting new people, I'm always up for a drink.
            <br />
            Feel free to <A to="/#contact">reach out</A>!
          </P>
        </HorizontalSection>
        <ColumnSection
          title="Goals"
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          <SectionColumn title="Time" icon={<Icons.IoTimeOutline />}>
            <P>
              I truly believe that time is our most valuable possession. By
              reminding myself of this fact regularly, I hope to spend it in a
              way that helps me reach all of my other goals.
            </P>
          </SectionColumn>
          <SectionColumn title="Learning" icon={<Icons.IoBookOutline />}>
            <P>
              I'm an infinitely curious person. Learning about all aspects of
              the wonderful world we live in is what drives me.
            </P>
          </SectionColumn>
          <SectionColumn title="Health" icon={<Icons.IoHeartOutline />}>
            <P>Mens sana in corpore sano.</P>
            <P>
              Even the old Greek and Romans already knew the importance of
              physical health.
            </P>
          </SectionColumn>

          <SectionColumn title="Relationships" icon={<Icons.IoPeopleOutline />}>
            <P>
              Building and maintaining deep, trustful relationships makes me
              very happy. Hence, I spend a lot of time and effort in being a
              supportive and present friend and family member.
            </P>
          </SectionColumn>
          <SectionColumn title="Food" icon={<Icons.IoNutritionOutline />}>
            <P>
              Ever since volunteering in the kitchens of{" "}
              <A to="https://clipvakanties.be/">Clip Taalvakanties</A>, cooking
              has been a passion of mine. Food contains a lot of culture and
              identity and has the power to bring people together.
            </P>
          </SectionColumn>
          <SectionColumn title="Travel" icon={<Icons.IoTrainOutline />}>
            <P>
              Travelling not only covers my interest of seeing new places and
              having novel experiences, they also offer the perfect opportunity
              to spend quality time with friends and family.
            </P>
          </SectionColumn>
        </ColumnSection>
        <SliderSection random={true} title="What I'm working on">
          <SectionSlide
            title="Master thesis"
            image={
              <StaticImage
                src="../assets/images/thesis.jpg"
                quality={90}
                className="w-80 rounded-md my-4"
                alt="Antenna Array"
              />
            }
            flip={true}
          >
            <P>
              During my master thesis at the{" "}
              <A to="https://em.idlab.ugent.be/welcome.php">
                EM research group
              </A>{" "}
              I am researching 140 GHz System-on-Chip (SoC) antenna arrays for
              beyond-5G applications.
            </P>
            <P>
              The thesis is planned to be finished by June 2023, which will also
              mark the completion of my engineering studies.
            </P>
          </SectionSlide>
          <SectionSlide
            title="Student representation"
            image={
              <StaticImage
                src="../assets/images/fris.jpg"
                quality={90}
                className="w-80 rounded-md my-4"
                alt="FRiS logo"
              />
            }
          >
            <P>
              As a former board member at{" "}
              <A to="https://fris.ugent.be/">FRiS</A> and member of the faculty
              council of the <A to="https://ugent.be/ea">UGent FEA</A> as well
              as various commitees, I defend the interests of my fellow
              engineering students.
            </P>
            <P>My main points of focus are:</P>
            <Ol>
              <Li>
                High quality courses and learning material, both online and in
                person.
              </Li>
              <Li>
                Stimulation of entrepreneurship and support for extracurricular
                activities.
              </Li>
              <Li>Support and encouragement for internationalization.</Li>
            </Ol>
          </SectionSlide>
          <SectionSlide
            title="Freelance projects"
            image={
              <StaticImage
                src="../assets/images/freelance.jpg"
                quality={90}
                className="w-80 rounded-md my-4"
                alt="Freelance developer & IT consultant cover"
              />
            }
            flip={true}
          >
            <P>
              As a freelance developer and IT consultant, I help organizations
              solve problems using cutting-edge technologies.
            </P>
            <P>
              My main strengths lie in web development and scientific
              programming, though I'm not afraid to tackle other challenges.
              I've had the chance of working for some amazing organizations,
              such as:
            </P>
            <Ul>
              <Li>
                <A to="https://redpencil.io/">Redpencil.io</A>
              </Li>
              <Li>
                <A to="https://www.wur.nl">Wageningen University & Research</A>
              </Li>
              <Li>
                <A to="https://alert-opleidingen.be/">Alert! Opleidingen</A>
              </Li>
            </Ul>
            <P>
              For more information, see my <A to="/projects">projects page</A>.
            </P>
          </SectionSlide>
        </SliderSection>
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
              For short questions or messages, tweet me{" "}
              <A to="https://twitter.com/FlorPSanders">@FlorPSanders</A> or send
              me a direct message on{" "}
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
              <A to="mailto:me@florsanders.be">me@florsanders.be</A>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <Icons.IoCall className="text-xl" />
              <A to="tel:+32479873490">0479873490</A>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <Icons.IoLogoTwitter className="text-xl" />
              <A to="https://twitter.com/FlorPSanders">@FlorPSanders</A>
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
