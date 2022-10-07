import BmoIcon from '@/components/elements/icons/BmoIcon'
import styles from '@/styles/profile.module.css'

type Props = {
  title: string
  subtitle: string
}

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
      <div className={styles.text}>
        <p className={styles.subtitle}>Age : 23</p>
        <p className={styles.subtitle}>Occupation : Frontend Engineer</p>
        <p className={styles.subtitle}>Birthplace : Wakayama</p>
        <p className={styles.subtitle}>Address : Tokyo</p>
        <p className={styles.subtitle}>
          Hobby : Soccer / Guitar / Interior / Fassion
        </p>
      </div>
    </div>
  )
}

export default SelfIntroduction
