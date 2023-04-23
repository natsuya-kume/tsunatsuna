import React from 'react'

import type { FontProps } from '@/components/elements/typography/common/types'
import { Text } from '@/components/elements/typography/text/Text'

export const H1 = React.memo(
  ({ children, size = 'size-26', weight = '700', ...args }: FontProps) => (
    <h1>
      <Text size={size} weight={weight} {...args}>
        {children}
      </Text>
    </h1>
  )
)
