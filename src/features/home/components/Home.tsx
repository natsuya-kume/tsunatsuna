import Image from 'next/image'
import Typed from 'react-typed'

import avatarImage from '@/assets/images/avatarImage_3.jpg'
import { ROLES } from '@/features/home/const/ReactTyped'
import styles from '@/styles/home.module.css'

type Props = {
  title: string
  subtitle: string
  imageOn: boolean
}

const Home = ({ title, subtitle, imageOn = false }: Props) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>
          Get informed, collaborate and discover projects I was working on.
        </p>
        <div className={styles.typeText}>
          <Typed
            loop
            strings={ROLES}
            typeSpeed={70}
            backSpeed={70}
            backDelay={1000}
            loopCount={0}
            showCursor
            className="self-typed"
            cursorChar="|"
          ></Typed>
        </div>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.avatar}>
          <div className={styles.avatarBoxFirst}>
            <div className={styles.avatarBoxSecond}>
              <Image
                className={styles.avatarImage}
                src={avatarImage}
                alt=""
                layout="responsive"
                priority
                placeholder="blur"
              />
            </div>
          </div>
        </figure>
      )}
    </div>
  )
}
export default Home
