import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import TypeAnimation from "react-type-animation";
import { HomeNavbar } from "../components";

export default function Index() {
  return (
    <>
      <main>
        <div className="flex w-full flex-col items-center h-screen justify-between">
          <div className="flex-grow flex flex-col items-center justify-center space-y-8">
            <StaticImage
              src="../assets/images/profile-picture.jpg"
              alt="Flor Sanders"
              placeholder="blurred"
              width={450}
              height={450}
              className="rounded-xl"
            />
            <div className="text-center">
              <h1 className="text-9xl font-poppins">Flor Sanders</h1>
              <TypeAnimation
                cursor={false}
                sequence={["Simplicity is the ultimate sophistication.", 1000]}
                repeat={1}
                wrapper="span"
                className="italic font-thin text-2xl font-poppins"
              />
            </div>
          </div>
          <HomeNavbar
            links={[
              {
                to: "",
                label: "About",
              },
              {
                to: "projects",
                label: "Projects",
              },
              {
                to: "writing",
                label: "Writing",
              },
            ]}
          />
        </div>
      </main>
    </>
  );
}
