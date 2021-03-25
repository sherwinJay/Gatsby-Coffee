import React from 'react'
import Video from '../../assets/videos/video06.mp4'
import CoffeeKV from '../../assets/images/two-coffeecups.jpg'
import { kvContainer, kvBg, kvBgContainer, kvContent, kvButton } from './styles'

/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const KeyVisual = () => {
  return (
    <div css={kvContainer}>
      <div css={kvContent}>
        <h2>Amazing Coffee Products</h2>
        <p>As roast dark, iced, strong irish crema whipped ristretto crema. Breve, cup americano filter trifecta est strong redeye half and half.</p>
        <p css={kvButton}>Order Now</p>
      </div>
    </div>
  )
}

export default KeyVisual
