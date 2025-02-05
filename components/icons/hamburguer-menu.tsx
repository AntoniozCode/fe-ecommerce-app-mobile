import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const HamburguerMenu = (props: SvgProps) => {
  return (
    <Svg
      viewBox="0 0 16 14"
      width={16}
      height={14}
      fill="none"
      {...props}
    >
      <Path
        stroke={props.color || "#000"}
        strokeLinecap="round"
        strokeWidth={2}
        d="M1 1h10M1 7h14M1 13h10"
      />
    </Svg>
  )
}
