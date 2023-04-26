import React from 'react'
type Props = {
  height?: number
  width?: number
}

const BlogIcon: React.FC<Props> = React.memo(({ height = 24, width = 24 }) => {
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
        fill="#1e88e5"
        d="M5.871,10.27l-0.967,0.256c-0.534,0.141-0.852,0.689-0.711,1.223l4.982,18.816 c0.086,0.323,0.004,0.668-0.218,0.918l-1.679,1.899c-0.221,0.25-0.303,0.595-0.218,0.918l2.678,10.116 c0.141,0.534,0.689,0.852,1.223,0.711l3.867-1.024l18.721-23.06L5.871,10.27z"
      ></path>
      <path
        fill="#64b5f6"
        d="M39.963,37.45l-25.134,6.655L5.871,10.27l24.167-6.399c0.534-0.141,1.081,0.177,1.223,0.711 L39.963,37.45z"
      ></path>
      <path
        fill="#eceff1"
        d="M37.847,11.639l3.61,23.727c0.165,1.087-0.589,2.113-1.676,2.278l0,0l0.301,1.977 c0.166,1.092-0.584,2.112-1.676,2.278l-19.278,2.933c-1.365,0.208-2.64-0.731-2.848-2.096l-4.136-27.187 c-0.165-1.087,0.589-2.113,1.676-2.278l21.75-3.309C36.657,9.797,37.682,10.551,37.847,11.639z"
      ></path>
      <path
        fill="#bdbdbd"
        d="M39.781,37.644l0.15,0.989c0.166,1.092-0.584,2.112-1.676,2.278l-19.278,2.933 c-0.819,0.125-1.584-0.438-1.709-1.257v0c-0.125-0.819,0.438-1.584,1.257-1.709L39.781,37.644z"
      ></path>
      <path
        fill="#42a5f5"
        d="M20.147,25.452c-0.242,0-0.456-0.177-0.493-0.425c-0.042-0.273,0.146-0.528,0.419-0.569 l12.852-1.956c0.271-0.041,0.528,0.146,0.569,0.419c0.042,0.273-0.146,0.528-0.419,0.569l-12.852,1.956 C20.198,25.45,20.173,25.452,20.147,25.452z"
      ></path>
      <path
        fill="#42a5f5"
        d="M19.546,21.498c-0.242,0-0.456-0.177-0.493-0.425c-0.042-0.273,0.146-0.528,0.419-0.569 l12.852-1.955c0.271-0.038,0.528,0.146,0.569,0.419c0.042,0.273-0.146,0.528-0.419,0.569l-12.852,1.955 C19.597,21.496,19.571,21.498,19.546,21.498z"
      ></path>
      <path
        fill="#42a5f5"
        d="M20.749,29.407c-0.242,0-0.456-0.177-0.493-0.425c-0.042-0.273,0.146-0.528,0.419-0.569 l12.853-1.956c0.271-0.038,0.528,0.146,0.569,0.419c0.042,0.273-0.146,0.528-0.419,0.569l-12.853,1.956 C20.8,29.405,20.774,29.407,20.749,29.407z"
      ></path>
      <path
        fill="#42a5f5"
        d="M21.501,34.35c-0.242,0-0.456-0.177-0.493-0.425c-0.042-0.273,0.146-0.528,0.419-0.569l1.061-0.161 c0.477-0.073,0.914-0.311,1.231-0.67l0.243-0.274c0.55-0.621,1.309-0.986,2.138-1.027c0.836-0.038,1.619,0.246,2.229,0.808 l0.434,0.398c0.463,0.428,1.089,0.617,1.707,0.523c0.622-0.095,1.16-0.461,1.476-1.007c0.14-0.24,0.443-0.32,0.683-0.183 c0.239,0.138,0.321,0.444,0.183,0.683c-0.468,0.81-1.267,1.355-2.19,1.496c-0.924,0.139-1.849-0.143-2.535-0.776l-0.434-0.398 c-0.41-0.38-0.951-0.574-1.501-0.544c-0.558,0.028-1.069,0.273-1.439,0.691l-0.242,0.273c-0.473,0.535-1.123,0.889-1.83,0.996 l-1.061,0.161C21.552,34.348,21.526,34.35,21.501,34.35z"
      ></path>
      <ellipse
        cx="37.325"
        cy="19.451"
        fill="#424242"
        rx="14.516"
        ry="2.5"
        transform="rotate(-68.739 37.325 19.452)"
      ></ellipse>
      <path
        fill="#424242"
        d="M41.126,17.953c-0.327,0.839-1.731,0.746-3.275,0.145c-1.544-0.601-2.643-1.481-2.316-2.321 c2.47-6.347,5.803-11.21,7.348-10.61C44.426,5.769,43.596,11.606,41.126,17.953z"
      ></path>
      <path
        fill="#bdbdbd"
        d="M39.9,18.56c-0.57,0-1.3-0.17-2.05-0.46c-0.96-0.38-1.75-0.86-2.13-1.38 c-0.14,0.34-0.28,0.68-0.42,1.03c0.45,0.43,1.15,0.87,2.19,1.28c0.62,0.24,1.55,0.53,2.41,0.53h0.05c0.14-0.35,0.27-0.7,0.38-1.04 C40.2,18.55,40.05,18.56,39.9,18.56z"
      ></path>
    </svg>
  )
})

export default BlogIcon
