import styles from '@/styles/contact.module.css'
const Contact = () => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.contactContainer}>
        <form>
          <div>
            <label className={styles.labelTitle}>
              <span>Name</span>
            </label>
            <input className={styles.contactInput} />
          </div>
          <div style={{ marginTop: 20 }}>
            <label className={styles.labelTitle}>
              <span>Email</span>
            </label>
            <input className={styles.contactInput} />
          </div>
          <div style={{ marginTop: 20 }}>
            <label className={styles.labelTitle}>
              <span>Message</span>
            </label>
            <textarea className={styles.textArea} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
