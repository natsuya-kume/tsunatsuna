import React from 'react'

import styles from '@/components/elements/typography/common/styles.module.css'
import type { FontProps } from '@/components/elements/typography/common/types'

export const Text = React.memo((props: FontProps) => {
  const {
    size = 'size-14',
    weight = '500',
    color = 'primary',
    className: _className,
    textAlign = 'inherit',
    children,
  } = props
  const fontSizeStyle = styles[size]
  const weightStyle = styles[`weight-${weight}`]
  const colorStyle = color && styles[color]
  const textAlignStyle = styles[textAlign]

  const className = `${styles.defaultTextStyle} ${fontSizeStyle} ${weightStyle} ${colorStyle} ${textAlignStyle} ${_className}`
  return <p className={className}>{children}</p>
})
