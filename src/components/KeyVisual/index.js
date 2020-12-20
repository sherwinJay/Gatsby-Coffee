import React from 'react'
import Video from '../../assets/videos/video06.mp4'
import { kvContainer, kvBg, kvBgContainer, kvContent, kvButton } from './styles'

/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const KeyVisual = () => {
  return (
    <div css={kvContainer}>
      <div css={kvBgContainer}>
        <video css={kvBg} src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </div>
      <div css={kvContent}>
        <h2>Amazing Paradise</h2>
        <p>Explore top rated tours, hotels and restaurants around the world.</p>
        <p css={kvButton}>Travel Now</p>
      </div>
    </div>
  )
}

export default KeyVisual
