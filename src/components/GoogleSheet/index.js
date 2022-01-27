import React from 'react'
import {useStaticQuery, graphql, Link } from 'gatsby';
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { noMargin } from './styles';

const getGoogleSheetData = graphql`
{  
  allGoogleSheet1Sheet{
    nodes {
      nameCn
      nameEn
      gCode
      category
    }
  }
}
`;

const GoogleSheet = () => {

  const { 
    allGoogleSheet1Sheet: {
      nodes: googleData
    }     
  } = useStaticQuery(getGoogleSheetData);

  const bkDesktop = () => {
    return (
      googleData.map((sheetData, idx) => (
        `<div class="col-md-3 game-slot-container all-games ${sheetData.category}">
          <div class="game-slot-overlay-container">
            <p>${sheetData.nameCn}</p>
            <div class="game_favorite">FAVORITE<button class="fav-button" onclick="favorite(this)" data-name="${sheetData.nameCn}" data-image="http://www.staging.guide.t1t.inhttp://gamegateway.t1t.games/includes/images/microgaming/108Heroes.png" alt="${sheetData.nameCn}" data-url="/iframe_module/goto_mggame/2/108Heroes/false/real/zh"></button></div>
            <div class="game-slot-buttons">
                <a href="http://player.staging.guide.t1t.in/player_center/goto_habagame/real/${sheetData.gCode}" target="_blank" class="playnow">开始游戏</a>
                <a href="http://player.staging.guide.t1t.in/player_center/goto_habagame/real/${sheetData.gCode}" target="_blank" class="trial">免费试玩</a>
              </div>
          </div>
          <a>
          <img class="game-img" src="http://gamegateway.t1t.games/includes/images/habanero/${sheetData.gCode}.png">
          </a>
        </div>
        `
      ))
    )
  }

  const bkMobile = () => {
    return (
      googleData.map((sheetData, idx) => (
      <p css={noMargin}>{`HB_${sheetData.category},/player_center/goto_habagame/real/${sheetData.gCode},${sheetData.nameCn},http://gamegateway.t1t.games/includes/images/cn/habanero/${sheetData.gCode}.png`}</p>
      ))
    )
  }
 
  return (
    <div>
      {
        bkMobile()
      }
    </div>
  )
}

export default GoogleSheet
