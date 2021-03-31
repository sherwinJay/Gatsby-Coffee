import React from 'react';

/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import { defaultKV, defaultSection } from '../styles/main';
import BackgroundImage from 'gatsby-background-image';
import { titleKV } from './styles';

const TitleSection = ({bgImage, title}) => {

	return (
		<>
			<BackgroundImage
       css={[titleKV, defaultKV]}
       fluid={bgImage}
       tag="div"
      >
        <div css={[defaultSection]}>
          <h1>
            {title}
          </h1>
        </div>
      </BackgroundImage>
		</>
	)
}

export default TitleSection
