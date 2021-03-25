import React from 'react'
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import {useStaticQuery, graphql, Link } from 'gatsby';
import Img from "gatsby-image";
import { aboutSection, defaultSection, aboutContainer} from './styles';

const imageData = graphql`
query {
  image: file(relativePath: { eq: "coffeeshop.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const AboutUsSection = () => {
  const { 
    image: data
  } = useStaticQuery(imageData);

  console.log(`aboboutSectionJs: ${data}`)

  return (
    <section css={[aboutSection]}>
      <div css={[defaultSection]}>
        <h2>About Us</h2>
        <div css={aboutContainer}>
          <Img fluid={data.childImageSharp.fluid} />
          <div>
            <p>
              Fingerstache heirloom food truck typewriter aesthetic craft beer. Cardigan leggings godard unicorn, cloud bread cred ramps mixtape everyday carry post-ironic listicle chia polaroid kitsch. Waistcoat try-hard artisan beard wayfarers, aesthetic narwhal gastropub squid vegan tote bag venmo gluten-free mixtape cloud bread. Cornhole jean shorts kogi umami ugh vaporware XOXO food truck enamel pin +1 sriracha.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
