import React from 'react'
type Props = {
  navListStyle?: string
  navChildstyle?: string
  linkText?: string
  linkTextStyle?: string
}

const ProfileIcon: React.FC<Props> = React.memo(
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
            //   style=" fill:#000000;"
          >
            <path
              fill="#ffa726"
              d="M16,21h-1.09C13.855,21,13,20.145,13,19.09V17h3V21z"
            ></path>
            <path
              fill="#ffa726"
              d="M32,21h1.09c1.055,0,1.91-0.855,1.91-1.91V17h-3V21z"
            ></path>
            <path fill="#37474f" d="M29,31H19l-2,13h14L29,31z"></path>
            <path fill="#ff9800" d="M24,37l-5-6v-6h10v6L24,37z"></path>
            <path
              fill="#ffb74d"
              d="M33,13c0-7.635-18-4.971-18,0v7c0,4.971,4.028,9,9,9c4.971,0,9-4.029,9-9V13z"
            ></path>
            <path
              fill="#784719"
              d="M27,19c0-0.551,0.448-1,1-1s1,0.449,1,1s-0.448,1-1,1S27,19.551,27,19 M19,19c0,0.551,0.448,1,1,1 s1-0.449,1-1s-0.448-1-1-1S19,18.449,19,19"
            ></path>
            <path
              fill="#fff"
              d="M24,41c-5-4-5-10-5-10l5,1l5-1C29,31,28.917,37.167,24,41z"
            ></path>
            <path
              fill="#00897b"
              d="M23,35l-0.667,4.465L24,42l1.667-2.535L25,35l1-1l-2-2l-2,2L23,35z"
            ></path>
            <path fill="#37474f" d="M8,44h11V31C19,31,8,32.986,8,44z"></path>
            <path fill="#37474f" d="M29,31v13h11C40,33.025,29,31,29,31z"></path>
            <path fill="#37474f" d="M24,43l-0.001-0.002"></path>
            <path
              fill="#ffe082"
              d="M24,4c5.523,0,11,3,11,10v3h-6h-2c-3.866,0-7-3.134-7-7v0h0c-2.209,0-4,1.791-4,4v3h-3v-2 c0-4.025,2.038-8.016,7-9l1-2H24z"
            ></path>
            <path
              fill="#00897b"
              d="M12.851,33.843L17.538,44H19V31C19,31,15.799,31.581,12.851,33.843z"
            ></path>
            <path
              fill="#00897b"
              d="M35.149,33.843L30.462,44H29V31C29,31,32.201,31.581,35.149,33.843z"
            ></path>
          </svg>
          <p className={linkTextStyle}>{linkText}</p>
        </div>
      </div>
    )
  }
)
export default ProfileIcon
