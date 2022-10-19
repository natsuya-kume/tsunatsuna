import CssIcon from '@/components/elements/icons/CssIcon'
import GolangIcon from '@/components/elements/icons/GolangIcon'
import GraphQLIcon from '@/components/elements/icons/GraphQLIcon'
import HtmlIcon from '@/components/elements/icons/HtmlIcon'
import JavaScriptIcon from '@/components/elements/icons/JavaScriptIcon'
import MaterialUiIcon from '@/components/elements/icons/MaterialUiIcon'
import PythonIcon from '@/components/elements/icons/PythonIcon'
import ReactIcon from '@/components/elements/icons/ReactIcon'
import ReduxIcon from '@/components/elements/icons/ReduxIcon'
import SassIcon from '@/components/elements/icons/SassIcon'
import TypeScriptIcon from '@/components/elements/icons/TypeScriptIcon'
import { PostBody } from '@/components/layouts/postBody/PostBody'
import styles from '@/styles/profile.module.css'

const Skills = () => {
  return (
    <PostBody>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skillContainer}>
          <HtmlIcon />
          <p>HTML5</p>
          <p>2 years</p>
        </div>
        <div className={styles.skillContainer}>
          <CssIcon />
          <p>CSS3</p>
          <p>2 years</p>
        </div>
        <div className={styles.skillContainer}>
          <SassIcon />
          <p>SASS</p>
          <p>1 years</p>
        </div>
        <div className={styles.skillContainer}>
          <MaterialUiIcon />
          <p>MUI</p>
          <p>1 years</p>
        </div>
        <div className={styles.skillContainer}>
          <JavaScriptIcon />
          <p>JavaScript</p>
          <p>2 years</p>
        </div>
        <div className={styles.skillContainer}>
          <TypeScriptIcon />
          <p>TypeScript</p>
          <p>1 years</p>
        </div>
        <div className={styles.skillContainer}>
          <ReactIcon />
          <p>React</p>
          <p>2 years</p>
        </div>
        <div className={styles.skillContainer}>
          <ReactIcon />
          <p>React Native</p>
          <p>2 years</p>
        </div>
        <div className={styles.skillContainer}>
          <ReduxIcon />
          <p>Redux</p>
          <p>1 years</p>
        </div>
        <div className={styles.skillContainer}>
          <GraphQLIcon />
          <p>GraphQL</p>
          <p>1 month</p>
        </div>
        <div className={styles.skillContainer}>
          <PythonIcon />
          <p>Python </p>
          <p>1 month</p>
        </div>
        <div className={styles.skillContainer}>
          <GolangIcon />
          <p>Golang</p>
          <p>1 day</p>
        </div>
      </div>
    </PostBody>
  )
}

export default Skills
