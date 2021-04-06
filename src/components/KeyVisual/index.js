import React from 'react';

/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { kvContainer, kvContent, kvButton } from './styles';

const KeyVisual = () => {
  return (
    <div css={kvContainer}>
      <div css={kvContent}>
        <h2>
          Amazing Coffee Products
        </h2>
        <p>
          As roast dark, iced, strong irish crema whipped ristretto crema. Breve, cup americano filter trifecta est strong redeye half and half.
        </p>
        <p css={kvButton}>
          Order Now
        </p>
      </div>
    </div>
  )
}

export default KeyVisual
