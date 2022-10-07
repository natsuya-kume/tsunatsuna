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
import styles from '@/styles/profile.module.css'

const Skills = () => {
  return (
    <>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.skillsContainer}>
        <div className={styles.skillContainer}>
          <HtmlIcon />
          <p className={styles.skillText}>HTML5</p>
          <p className={styles.skillText}>2 years</p>
        </div>
        <div className={styles.skillContainer}>
          <CssIcon />
          <p className={styles.skillText}>CSS3</p>
          <p className={styles.skillText}>2 years</p>
        </div>
        <div className={styles.skillContainer}>
          <SassIcon />
          <p className={styles.skillText}>SASS</p>
          <p className={styles.skillText}>1 years</p>
        </div>
        <div className={styles.skillContainer}>
          <MaterialUiIcon />
          <p className={styles.skillText}>MUI</p>
          <p className={styles.skillText}>1 years</p>
        </div>
        <div className={styles.skillContainer}>
          <JavaScriptIcon />
          <p className={styles.skillText}>JavaScript</p>
          <p className={styles.skillText}>2 years</p>
        </div>
        <div className={styles.skillContainer}>
          <TypeScriptIcon />
          <p className={styles.skillText}>TypeScript</p>
          <p className={styles.skillText}>1 years</p>
        </div>
        <div className={styles.skillContainer}>
          <ReactIcon />
          <p className={styles.skillText}>React</p>
          <p className={styles.skillText}>2 years</p>
        </div>
        <div className={styles.skillContainer}>
          <ReactIcon />
          <p className={styles.skillText}>React Native</p>
          <p className={styles.skillText}>2 years</p>
        </div>
        <div className={styles.skillContainer}>
          <ReduxIcon />
          <p className={styles.skillText}>Redux</p>
          <p className={styles.skillText}>1 years</p>
        </div>
        <div className={styles.skillContainer}>
          <GraphQLIcon />
          <p className={styles.skillText}>GraphQL</p>
          <p className={styles.skillText}>1 month</p>
        </div>
        <div className={styles.skillContainer}>
          <PythonIcon />
          <p className={styles.skillText}>Python </p>
          <p className={styles.skillText}>1 month</p>
        </div>
        <div className={styles.skillContainer}>
          <GolangIcon />
          <p className={styles.skillText}>Golang</p>
          <p className={styles.skillText}>1 day</p>
        </div>
      </div>
    </>
  )
}

export default Skills
