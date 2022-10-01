import BmoIcon from "@/components/elements/icons/BmoIcon";
import styles from "@/styles/profile.module.css";

type Props = {
  title: string;
  subtitle: string;
};

const SelfIntroduction: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <div className={styles.profileTitleContainer}>
          <h1 className={styles.title}>{title}</h1>
          <BmoIcon />
        </div>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div>
        <h1 className={styles.subtitle}>Age : 23</h1>
        <h1 className={styles.subtitle}>Occupation : Frontend Engineer</h1>
        <h1 className={styles.subtitle}>Birthplace : Wakayama</h1>
        <h1 className={styles.subtitle}>Address : Tokyo</h1>
        <h1 className={styles.subtitle}>
          Hobby : Soccer / Guitar / Interior / Fassion
        </h1>
      </div>
    </div>
  );
};

export default SelfIntroduction;
