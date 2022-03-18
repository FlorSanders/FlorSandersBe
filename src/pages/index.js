import React from "react"
import { graphql } from "gatsby"

import { NavigationTabs, TypingAnimation, HeroImage, SEO } from "../components"
import { whatIAm } from "../constants"

import "../styles/index.scss"

export default function Home({ data }) {
  var images = data.allImageSharp.edges.filter(elem =>
    elem.node.parent.name.includes("main_background")
  )
  var image = images[Math.floor(Math.random() * images.length)].node.fluid

  return (
    <React.Fragment>
      <script type="text/turtle">
        {`
                @base <https://www.florsanders.be/>.
                @prefix foaf: <http://xmlns.com/foaf/0.1/>.
                @prefix schema: <http://schema.org/>.
                <#me> 
                    a foaf:Person;
                    a schema:Person;
                    foaf:name "Flor Sanders";
                    foaf:knows <https://pietercolpaert.be/#me>.
                `}
      </script>
      <SEO title="Home" />
      <HeroImage
        image={image}
        header={null}
        footer={<NavigationTabs light={true} />}
        fullheight={true}
      >
        <div className="container has-text-centered">
          <div className="subtitle is-3 has-text-light">Hi! My name is</div>
          <div className="title is-1 has-text-light">Flor Sanders</div>
          <div className="subtitle is-3 has-text-light is-flex-direction-row">
            <TypingAnimation base={"I am a"} content={whatIAm} />
          </div>
        </div>
      </HeroImage>
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  }
`
