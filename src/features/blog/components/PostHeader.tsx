import ClockIcon from '@/components/elements/icons/ClockIcon'
import ConvertDate from '@/features/blog/components/ConvertDate'
import styles from '@/styles/postHeader.module.css'

type Props = {
  title: string
  subtitle?: string
  publish?: string
}

const PostHeader: React.FC<Props> = ({ title, subtitle, publish = '' }) => {
  return (
    <div className={styles.stack}>
      <p className={styles.subtitle}>{subtitle}</p>
      <h2 className={styles.title}>{title}</h2>
      {publish && (
        <div className={styles.publish}>
          <ClockIcon />
          <ConvertDate dateISO={publish} />
        </div>
      )}
    </div>
  )
}

export default PostHeader
