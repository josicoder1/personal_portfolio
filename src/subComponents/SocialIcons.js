import React from 'react'
import { Github, Facebook, Twitter, YouTube } from '../Components/AllSvgs'
import styled from 'styled-components'
import {darkTheme} from '../Components/Themes'

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${props => props.color ==='dark' ? darkTheme.text : darkTheme.body};
`

const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <a
          href="https://github.com/josicoder1"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit' }}
        >
          <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit' }}
        >
          <Twitter width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
        </a>
      </div>
      <div>
        <a
          href="https://facebook.com/jo josi"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit' }}
        >
          <Facebook width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
        </a>
      </div>
      <div>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit' }}
        >
          <YouTube width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
        </a>
      </div>
      <Line color={props.theme}/>
    </Icons>
  )
}

export default SocialIcons
