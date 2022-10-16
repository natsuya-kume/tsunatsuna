import React from 'react'

const ClockIcon = React.memo(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="36"
      height="36"
      viewBox="0 0 48 48"
    >
      <path
        fill="#00acc1"
        d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"
      ></path>
      <path
        fill="#eee"
        d="M40,24c0,8.838-7.162,16-16,16S8,32.838,8,24S15.163,8,24,8S40,15.163,40,24z"
      ></path>
      <path d="M23 11H25V24H23z"></path>
      <path
        d="M26.082 22.654H28.419V31.846H26.082z"
        transform="rotate(-45.001 27.25 27.25)"
      ></path>
      <path d="M27,24c0,1.657-1.344,3-3,3c-1.657,0-3-1.343-3-3s1.343-3,3-3C25.656,21,27,22.343,27,24"></path>
      <path
        fill="#00acc1"
        d="M25,24c0,0.551-0.448,1-1,1s-1-0.449-1-1c0-0.553,0.448-1,1-1S25,23.447,25,24"
      ></path>
    </svg>
  )
})

export default ClockIcon