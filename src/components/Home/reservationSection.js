import React from 'react'
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import {useStaticQuery, graphql, Link } from 'gatsby';
import Img from "gatsby-image";
import { reservationSection, defaultSection, reservationContainer} from './styles';

const ReservationSection = () => {
  return (
    <div>
      <section css={[reservationSection]}>
      <div css={[defaultSection, reservationContainer]}>
        <h2>Make a Reservation</h2>
        <p>
          Fingerstache heirloom food truck typewriter aesthetic craft beer. Cardigan leggings godard unicorn, cloud bread cred ramps mixtape everyday carry post-ironic listicle chia polaroid kitsch. Waistcoat try-hard artisan beard wayfarers, aesthetic narwhal gastropub squid vegan tote bag venmo gluten-free mixtape cloud bread. Cornhole jean shorts kogi umami ugh vaporware XOXO food truck enamel pin +1 sriracha.
        </p>
      </div>
    </section>
    </div>
  )
}

export default ReservationSection
