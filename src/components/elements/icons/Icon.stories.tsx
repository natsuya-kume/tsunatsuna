import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import styles from '../../../styles/nav.module.css'

import BlogIcon from './BlogIcon'
import BmoIcon from './BmoIcon'
import ClockIcon from './ClockIcon'
import ContactIcon from './ContactIcon'
import CssIcon from './CssIcon'
import { FolderIcon } from './FolderIcon'
import GithubIcon from './GithubIcon'
import GolangIcon from './GolangIcon'
import GraphQLIcon from './GraphQLIcon'
import HomeIcon from './HomeIcon'
import HtmlIcon from './HtmlIcon'
import JavaScriptIcon from './JavaScriptIcon'
import { LeftArrowIcon } from './LeftArrowIcon'
import MaterialUiIcon from './MaterialUiIcon'
import PrivacyIcon from './PrivacyIcon'
import ProfileIcon from './ProfileIcon'
import PythonIcon from './PythonIcon'
import ReactIcon from './ReactIcon'
import ReduxIcon from './ReduxIcon'
import SassIcon from './SassIcon'
import TwitterIcon from './TwitterIcon'
import TypeScriptIcon from './TypeScriptIcon'
import WorksIcon from './WorksIcon'

export default {
  title: 'Design System/Icon',
  component: ContactIcon,
  argTypes: {
    navListStyle: {
      description: 'ヘッダーナビゲーションで親要素に適用するスタイル',
    },
    navChildstyle: {
      description: 'ヘッダーナビゲーションで子要素に適用するスタイル',
    },
    height: {
      description: 'アイコンの高さ',
    },
    width: {
      description: 'アイコンの幅',
    },
    linkText: {
      description: 'アイコンと並べるテキスト',
    },
    linkTextStyle: {
      description: 'アイコンと並べるテキストのスタイル',
    },
  },
} as ComponentMeta<typeof ContactIcon>

export const Default: ComponentStory<typeof ContactIcon> = () => <ContactIcon />
export const Size: ComponentStory<typeof ContactIcon> = () => {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
      <ContactIcon width={16} height={16} />
      <ContactIcon width={24} height={24} />
      <ContactIcon width={32} height={32} />
      <ContactIcon width={40} height={40} />
      <ContactIcon width={48} height={48} />
      <ContactIcon width={56} height={56} />
    </div>
  )
}

export const WithText: ComponentStory<typeof ContactIcon> = () => (
  <ContactIcon linkText="Contact" navChildstyle={styles.list} />
)
export const All: ComponentStory<typeof ContactIcon> = () => (
  <>
    <div
      style={{
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <HomeIcon />
        <p>Home</p>
      </div>
      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <ProfileIcon />
        <p>Profile</p>
      </div>
      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <BlogIcon />
        <p>Blog</p>
      </div>
      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <WorksIcon />
        <p>Works</p>
      </div>
      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <ContactIcon />
        <p>Contact</p>
      </div>
      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <PrivacyIcon />
        <p>Privacy</p>
      </div>
    </div>

    <div
      style={{
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        marginTop: 10,
      }}
    >
      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          padding: 10,
        }}
      >
        <HtmlIcon />
        <p>Html</p>
      </div>
      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          padding: 10,
        }}
      >
        <CssIcon />
        <p>Css</p>
      </div>
      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <SassIcon />
        <p>Sass</p>
      </div>
      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <MaterialUiIcon />
        <p>MaterialUi</p>
      </div>
      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <JavaScriptIcon />
        <p>JavaScript</p>
      </div>

      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <TypeScriptIcon />
        <p>TypeSctipt</p>
      </div>
      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <ReactIcon />
        <p>React</p>
      </div>
      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <ReduxIcon />
        <p>Redux</p>
      </div>
      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <GraphQLIcon />
        <p>GraphQL</p>
      </div>

      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <PythonIcon />
        <p>Python</p>
      </div>

      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <GolangIcon />
        <p>Golang</p>
      </div>

      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <BmoIcon />
        <p>Bmo</p>
      </div>

      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <FolderIcon />
        <p>Folder</p>
      </div>

      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <LeftArrowIcon />
        <p>LeftArrow</p>
      </div>
    </div>
    <div
      style={{
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        marginTop: 10,
      }}
    >
      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <GithubIcon />
        <p>Github</p>
      </div>
      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <TwitterIcon />
        <p>Twitter</p>
      </div>
      <div
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <ClockIcon />
        <p>Clock</p>
      </div>
    </div>
  </>
)
