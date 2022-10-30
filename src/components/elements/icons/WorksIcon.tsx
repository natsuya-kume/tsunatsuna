import React from 'react'
type Props = {
  navListStyle?: string | undefined
  navChildstyle?: string | undefined
  linkText?: string | undefined
  linkTextStyle?: string | undefined
}

const WorksIcon: React.FC<Props> = React.memo(
  ({ navListStyle, navChildstyle, linkText, linkTextStyle }) => {
    return (
      <div className={navListStyle}>
        <div className={navChildstyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 48 48"
          >
            <path
              fill="#8BC34A"
              d="M39,15c0-2.2-1.8-4-4-4h-6c-0.7,0-1.1-0.8-0.7-1.4c0.6-1,0.9-2.2,0.6-3.5c-0.4-2-1.9-3.6-3.8-4C21.8,1.4,19,3.9,19,7c0,1,0.3,1.8,0.7,2.6c0.4,0.6,0,1.4-0.8,1.4h-6c-2.2,0-4,1.8-4,4v7c0,0.7,0.8,1.1,1.4,0.7c1-0.6,2.2-0.9,3.5-0.6c2,0.4,3.6,1.9,4,3.8c0.7,3.2-1.8,6.1-4.9,6.1c-1,0-1.8-0.3-2.6-0.7C9.8,30.9,9,31.3,9,32v6c0,2.2,1.8,4,4,4h22c2.2,0,4-1.8,4-4V15z"
            ></path>
          </svg>
          <p className={linkTextStyle}>{linkText}</p>
        </div>
      </div>
    )
  }
)
export default WorksIcon
