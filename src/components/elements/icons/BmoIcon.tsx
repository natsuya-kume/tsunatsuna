import React from 'react'

type Props = {
  height?: number
  width?: number
}

const BmoIcon: React.FC<Props> = React.memo(({ height = 48, width = 48 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      //   style=" fill:#000000;"
    >
      <path
        fill="none"
        stroke="#00796b"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="3"
        d="M3.5 34.5C3.5 29.253 7.753 24 13 24M44.5 14.5c0 5.247-4.253 9.5-9.5 9.5M19.5 36.5L19.5 44.5M28.5 36.5L28.5 44.5"
      ></path>
      <path
        fill="#00bfa5"
        d="M34,37H14c-1.105,0-2-0.895-2-2V5c0-1.105,0.895-2,2-2h20c1.105,0,2,0.895,2,2v30 C36,36.105,35.105,37,34,37z"
      ></path>
      <path
        fill="#e0f2f1"
        d="M32,19H16c-0.552,0-1-0.448-1-1V7c0-0.552,0.448-1,1-1h16c0.552,0,1,0.448,1,1v11 C33,18.552,32.552,19,32,19z"
      ></path>
      <path
        fill="#212121"
        d="M18.5 9A1.5 1.5 0 1 0 18.5 12 1.5 1.5 0 1 0 18.5 9zM29.5 9A1.5 1.5 0 1 0 29.5 12 1.5 1.5 0 1 0 29.5 9z"
      ></path>
      <path
        fill="none"
        stroke="#212121"
        stroke-miterlimit="10"
        d="M26.5,13c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5"
      ></path>
      <path
        fill="#212121"
        d="M15 21H27V23H15zM32 21A1 1 0 1 0 32 23 1 1 0 1 0 32 21z"
      ></path>
      <path fill="#76ff03" d="M33 26A1 1 0 1 0 33 28A1 1 0 1 0 33 26Z"></path>
      <path fill="#ffea00" d="M17 25H19V31H17z"></path>
      <path
        fill="#ffea00"
        d="M17 25H19V31H17z"
        transform="rotate(-90 18 28)"
      ></path>
      <path
        fill="#212121"
        d="M18 35h-2c-.552 0-1-.448-1-1l0 0c0-.552.448-1 1-1h2c.552 0 1 .448 1 1l0 0C19 34.552 18.552 35 18 35zM24 35h-2c-.552 0-1-.448-1-1l0 0c0-.552.448-1 1-1h2c.552 0 1 .448 1 1l0 0C25 34.552 24.552 35 24 35z"
      ></path>
      <path
        fill="#ff3d00"
        d="M30.5 30A2.5 2.5 0 1 0 30.5 35A2.5 2.5 0 1 0 30.5 30Z"
      ></path>
      <path fill="#84ffff" d="M28 25L26 28 30 28z"></path>
    </svg>
  )
})

export default BmoIcon
