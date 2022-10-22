import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'
import type { CSSProperties } from 'react'

type Props = {
  dateISO: string
  style?: CSSProperties | undefined
}

const ConvertDate: React.FC<Props> = ({ dateISO, style }) => {
  return (
    <time dateTime={dateISO} style={style}>
      {format(parseISO(dateISO), 'yyyy.MM.dd', {
        locale: ja,
      })}
    </time>
  )
}

export default ConvertDate
