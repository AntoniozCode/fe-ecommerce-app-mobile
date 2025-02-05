import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const Market = (props: SvgProps) => (
  <Svg
    width={100}
    height={100}
    viewBox="0 0 48 48"
    {...props}
  >
    <Path fill="#CFD8DC" d="M5 19h38v19H5z" />
    <Path fill="#B0BEC5" d="M5 38h38v4H5z" />
    <Path fill="#E3F2FD" d="M12 24h24v18H12z" />
    <Path fill="#2196F3" d="M13 25h22v17H13z" />
    <Path fill="#64B5F6" d="M35 42H13v-7l22-10z" />
    <Path
      fill="#D84315"
      d="M27 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0m12 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
    />
    <Path
      fill="#FF5722"
      d="M40 6H8a2 2 0 0 0-2 2v3h36V8a2 2 0 0 0-2-2m-19 5h6v8h-6zm16 0h-5l1 8h6zm-26 0h5l-1 8H9z"
    />
    <Path
      fill="#FFA000"
      d="M33 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0m12 0a3 3 0 1 1-3-3l3 3zm-30 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0M3 19a3 3 0 1 0 3-3l-3 3z"
    />
    <Path
      fill="#FFC107"
      d="M32 11h-5v8h6zm10 0h-5l2 8h6zm-26 0h5v8h-6zM6 11h5l-2 8H3z"
    />
    <Path fill="#1976D2" d="M23 25h2v17h-2z" />
    <Path
      fill="#1E88E5"
      d="M23 30.454V42h2V29.546zM28 33a1 1 0 1 0 0 2 1 1 0 1 0 0-2zm-8 0a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"
    />
  </Svg>
)

