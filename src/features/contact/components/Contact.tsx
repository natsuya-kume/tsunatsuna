import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import * as yup from 'yup'
import 'react-toastify/dist/ReactToastify.css'

import type { Contact as ContactType } from '@/features/contact/types/contact'
import styles from '@/styles/contact.module.css'

const schema = yup
  .object({
    name: yup.string().required('名前は必須項目です'),
    email: yup.string().email('正しいメールアドレスではありません').required(),
    body: yup.string().required('お問い合わせ内容は必須です。'),
  })
  .required()

export const Contact = () => {
  const baseUrl = process.env.TSUNATSUNA_NEXT_PUBLIC_BASE_URL ?? ''
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactType>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  })

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
      toast.success('Your message has been sent!')
    } catch (err) {
      toast.error('An error occurred.')
    }
    reset()
  }
  return (
    <div className={styles.flexContainer}>
      <div className={styles.toast}>
        <ToastContainer />
      </div>
      <div className={styles.contactContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className={styles.labelTitle}>
              <span>Name</span>
              <span className={styles.validationText}>
                {errors.name && 'Name is required'}
              </span>
            </label>
            <input
              {...register('name', { required: true, maxLength: 20 })}
              className={styles.contactInput}
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.labelTitle}>
              <span>Email</span>
              <p className={styles.validationText}>
                {errors.name && 'Email is required'}
              </p>
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
          <div className={styles.inputContainer}>
            <label className={styles.labelTitle}>
              <span>Message</span>
              <p className={styles.validationText}>
                {errors.name && 'Body is required'}
              </p>
            </label>
            <textarea
              {...register('body', { required: true, maxLength: 20 })}
              className={styles.textArea}
            />
          </div>
          <div className={styles.submitButtonContainer}>
            <button type="submit" className={styles.submitButton}>
              <span>送信する</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
