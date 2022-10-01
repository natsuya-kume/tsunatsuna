import styles from "@/styles/profile.module.css";
import CssIcon from "@/components/elements/icons/CssIcon";
import GolangIcon from "@/components/elements/icons/GolangIcon";
import GraphQLIcon from "@/components/elements/icons/GraphQLIcon";
import HtmlIcon from "@/components/elements/icons/HtmlIcon";
import JavaScriptIcon from "@/components/elements/icons/JavaScriptIcon";
import MaterialUiIcon from "@/components/elements/icons/MaterialUiIcon";
import PythoniIcon from "@/components/elements/icons/PythonIcon";
import ReactIcon from "@/components/elements/icons/ReactIcon";
import SassIcon from "@/components/elements/icons/SassIcon";
import TypeScriptIcon from "@/components/elements/icons/TypeScriptIcon";
import ReduxIcon from "@/components/elements/icons/ReduxIcon";
const Skills = () => {
  return (
    <>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.skillsContainer}>
        <div className={styles.skillContainer}>
          <HtmlIcon />
          {/* TODO: starライブラリ探す */}
          <h1 className={styles.subtitle}>HTML5 : ⭐️⭐️⭐️</h1>
        </div>
        <div className={styles.skillContainer}>
          <CssIcon />
          <h1 className={styles.subtitle}>CSS3 : ⭐️⭐️⭐️</h1>
        </div>
        <div className={styles.skillContainer}>
          <SassIcon />
          <h1 className={styles.subtitle}>SASS : ⭐️⭐️⭐️</h1>
        </div>
        <div className={styles.skillContainer}>
          <MaterialUiIcon />
          <h1 className={styles.subtitle}>MUI : ⭐️⭐️⭐️</h1>
        </div>
        <div className={styles.skillContainer}>
          <JavaScriptIcon />
          <h1 className={styles.subtitle}>JavaScript : ⭐️⭐️⭐️</h1>
        </div>
        <div className={styles.skillContainer}>
          <TypeScriptIcon />
          <h1 className={styles.subtitle}>TypeSctipt : ⭐️⭐️⭐️</h1>
        </div>
        <div className={styles.skillContainer}>
          <ReactIcon />
          <h1 className={styles.subtitle}>React(React Native) : ⭐️⭐️⭐️</h1>
        </div>
        <div className={styles.skillContainer}>
          <ReduxIcon />
          <h1 className={styles.subtitle}>Redux : ⭐️⭐️⭐️</h1>
        </div>
        <div className={styles.skillContainer}>
          <GraphQLIcon />
          <h1 className={styles.subtitle}>GraphQL : ⭐️⭐️⭐️</h1>
        </div>
        <div className={styles.skillContainer}>
          <PythoniIcon />
          <h1 className={styles.subtitle}>Python : ⭐️⭐️⭐️</h1>
        </div>
        <div className={styles.skillContainer}>
          <GolangIcon />
          <h1 className={styles.subtitle}>Golang : ⭐️⭐️⭐️</h1>
        </div>
      </div>
    </>
  );
};

export default Skills;
