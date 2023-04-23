import Image from 'next/image'

import avatarImage from '@/assets/images/avatarImage_3.jpg'
import { H1 } from '@/components/elements/typography/h1/H1'
import { Text } from '@/components/elements/typography/text/Text'
import styles, { mainTitle } from '@/features/home/styles.module.css'

type Props = {
  title: string
  subtitle: string
  imageOn: boolean
}

const Home = ({ title, subtitle, imageOn = false }: Props) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <H1 color="primary" weight="700" size="size-50" className={mainTitle}>
          {title}
        </H1>
        <div className={styles.nameContainer}>
          <div className={styles.circle} />
          <Text color="primary" weight="700" size="size-30">
            NATSUYA KUME
          </Text>
        </div>
        <Text color="primary" size="size-16" className={styles.description}>
          Hello, I am a creative developer. I was born in Japan in 1999.{'\n'}
          Currently, I am based in Tokyo,Japan.{'\n'}Get informed, collaborate
          and discover projects I was working on.
        </Text>
        <Text color="primary" size="size-16" className={styles.shortText}>
          {subtitle}
        </Text>
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
