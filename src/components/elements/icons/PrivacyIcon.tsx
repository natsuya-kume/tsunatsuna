import React from 'react'
type Props = {
  navListStyle?: string | undefined
  navChildstyle?: string | undefined
  linkText?: string | undefined
  linkTextStyle?: string | undefined

  height?: number
  width?: number
}

const PrivacyIcon: React.FC<Props> = React.memo(
  ({
    navListStyle,
    navChildstyle,
    linkText,
    linkTextStyle,
    width = 24,
    height = 24,
  }) => {
    return (
      <div className={navListStyle}>
        <div className={navChildstyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={width}
            height={height}
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFA000"
              d="M30 41L26 45 22 45 18 41 18 21 30 21 30 29 28 31 30 33 30 35 28 37 30 39z"
            ></path>
            <path
              fill="#FFA000"
              d="M38,7.8C37.5,6,36,4.7,34.3,4.2C31.9,3.7,28.2,3,24,3s-7.9,0.7-10.3,1.2C12,4.7,10.5,6,10,7.8c-0.5,1.7-1,4.1-1,6.7c0,2.6,0.5,5,1,6.7c0.5,1.8,1.9,3.1,3.7,3.5C16.1,25.3,19.8,26,24,26s7.9-0.7,10.3-1.2c1.8-0.4,3.2-1.8,3.7-3.5c0.5-1.7,1-4.1,1-6.7C39,11.9,38.5,9.5,38,7.8z M29,13H19c-1.1,0-2-0.9-2-2V9c0-0.6,3.1-1,7-1s7,0.4,7,1v2C31,12.1,30.1,13,29,13z"
            ></path>
            <path fill="#D68600" d="M23 26H25V45H23z"></path>
          </svg>
          <p className={linkTextStyle}>{linkText}</p>
        </div>
      </div>
    )
  }
)

export default PrivacyIcon
