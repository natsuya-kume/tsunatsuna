import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import type { Contact as ContactType } from '@/features/contact/types/contact'
import styles from '@/styles/contact.module.css'

export const Contact = () => {
  const router = useRouter()

  const baseUrl = process.env.TSUNATSUNA_NEXT_PUBLIC_BASE_URL ?? ''
  const { register, handleSubmit } = useForm<ContactType>()

  const onSubmit = async (contact: ContactType): Promise<void> => {
    try {
      await fetch(baseUrl + '/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(contact),
      }).then((res) => {
        if (!res.ok) {
          throw Error(`${res.status} ${res.statusText}`)
        }
      })

      void router.push('/contact/success')
    } catch (err) {
      void router.push('/contact/error')
    }
  }
  return (
    <div className={styles.flexContainer}>
      <div className={styles.contactContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className={styles.labelTitle}>
              <span>Name</span>
            </label>
            <input
              {...register('name', { required: true, maxLength: 20 })}
              className={styles.contactInput}
            />
          </div>
          <div style={{ marginTop: 20 }}>
            <label className={styles.labelTitle}>
              <span>Email</span>
            </label>
            <input
              {...register('email', {
                required: true,
                maxLength: 20,
                pattern: {
                  value: /^[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
                  message: '入力形式がメールアドレスではありません。',
                },
              })}
              className={styles.contactInput}
            />
          </div>
          <div style={{ marginTop: 20 }}>
            <label className={styles.labelTitle}>
              <span>Message</span>
            </label>
            <textarea
              {...register('body', { required: true, maxLength: 20 })}
              className={styles.textArea}
            />
          </div>
          <button type="submit">
            <span>送信する</span>
          </button>
        </form>
      </div>
    </div>
  )
}
