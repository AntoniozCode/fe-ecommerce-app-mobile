import * as React from "react"
import Svg, { SvgProps, LinearGradient, Stop, Path } from "react-native-svg"

export const Shopping = (props: SvgProps) => (
  <Svg
    width={100}
    height={100}
    viewBox="0 0 48 48"
    {...props}
  >
    <LinearGradient
      id="a"
      x1={40.638}
      x2={7.362}
      y1={6.79}
      y2={40.066}
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0.014} stopColor="#fe6d60" />
      <Stop offset={0.046} stopColor="#fe766a" />
      <Stop offset={0.208} stopColor="#fea097" />
      <Stop offset={0.37} stopColor="#ffc2bd" />
      <Stop offset={0.532} stopColor="#ffddda" />
      <Stop offset={0.692} stopColor="#fff0ee" />
      <Stop offset={0.849} stopColor="#fffbfb" />
      <Stop offset={1} stopColor="#fff" />
    </LinearGradient>
    <Path
      fill="url(#a)"
      d="M41.5 8.531c0-1.122-.853-2.031-1.906-2.031H8.406C7.353 6.5 6.5 7.409 6.5 8.531v8.19c0 1.201.436 2.285 1.132 3.115v19.613c0 1.133.862 2.052 1.926 2.052h28.885c1.064 0 1.926-.919 1.926-2.052V19.836a4.833 4.833 0 0 0 1.132-3.115v-8.19z"
    />
    <Path
      fill="none"
      stroke="#e02f24"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M14.25 6.5v10.375A4.625 4.625 0 0 1 9.625 21.5h0A4.625 4.625 0 0 1 5 16.875V8.5a2 2 0 0 1 2-2h2.383M18.875 21.5h0a4.625 4.625 0 0 1-4.625-4.625V6.5h9.25v10.375a4.625 4.625 0 0 1-4.625 4.625zM28.125 21.5a4.625 4.625 0 0 1-4.625-4.625V6.5h9.25v10.375M37.375 21.5h0a4.625 4.625 0 0 1-4.625-4.625V6.5H40a2 2 0 0 1 2 2v8.375a4.625 4.625 0 0 1-4.625 4.625zM16.362 41.5H8.5a2 2 0 0 1-2-2V21M40.5 21v18.5a2 2 0 0 1-2 2H28.125"
    />
    <Path
      fill="none"
      stroke="#e02f24"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M19.5 41.5h-7v-12a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v12zM34.5 35.5h-9a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1z"
    />
  </Svg>
)