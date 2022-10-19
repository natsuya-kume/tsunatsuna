import BmoIcon from '@/components/elements/icons/BmoIcon'
import { PostBody } from '@/components/layouts/postBody/PostBody'
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
          <PostBody>
            <h2 className={styles.title}>{title}</h2>
          </PostBody>
          <BmoIcon />
        </div>
        <PostBody>
          <p>{subtitle}</p>
        </PostBody>
      </div>
      <div>
        <PostBody>
          <p className={styles.subtitle}>Age : 23</p>
          <p className={styles.subtitle}>Occupation : Frontend Engineer</p>
          <p className={styles.subtitle}>Birthplace : Wakayama</p>
          <p className={styles.subtitle}>Address : Tokyo</p>
          <p className={styles.subtitle}>
            Hobby : Soccer / Guitar / Interior / Fassion
          </p>
        </PostBody>
      </div>
    </div>
  )
}

export default SelfIntroduction
