import React from 'react'
type Props = {
  height?: number
  width?: number
}

const ContactIcon: React.FC<Props> = React.memo(
  ({ height = 24, width = 24 }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        viewBox="0 0 48 48"
      >
        <path
          fill="#FF7043"
          d="M38,44H12V4h26c2.2,0,4,1.8,4,4v32C42,42.2,40.2,44,38,44z"
        ></path>
        <path
          fill="#BF360C"
          d="M10,4h2v40h-2c-2.2,0-4-1.8-4-4V8C6,5.8,7.8,4,10,4z"
        ></path>
        <path
          fill="#AB300B"
          d="M26 16A4 4 0 1 0 26 24 4 4 0 1 0 26 16zM33 30c0 0-1.9-4-7-4-5.1 0-7 4-7 4v2h14V30z"
        ></path>
      </svg>
    )
  }
)

export default ContactIcon
