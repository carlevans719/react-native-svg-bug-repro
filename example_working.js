import * as React from "react"
import Svg, {
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
  G,
  Path,
  Text,
} from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={180.8} height={20} {...props}>
      <LinearGradient id="prefix__b" x2={0} y2="100%">
        <Stop offset={0} stopOpacity={0} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <ClipPath id="prefix__a">
        <Rect width={180.8} height={20} rx={3} />
      </ClipPath>
      <G clipPath="url(#prefix__a)">
        <Path fill="#555" d="M0 0h180.8v20H0z" />
        <Path fill="#4EC820" d="M111.9 0h68.9v20h-68.9z" />
        <Path fill="url(#prefix__b)" d="M0 0h180.8v20H0z" />
      </G>
      <G
        fill="#fff"
        textAnchor="middle"
        fontFamily="DejaVu Sans,Verdana,Geneva,sans-serif"
        fontSize={11}
      >
        <Text x={64.9} y={15} fill="#000" fillOpacity={0.3}>
          {"Azure Pipelines"}
        </Text>
        <Text x={64.9} y={14}>
          {"Azure Pipelines"}
        </Text>
        <Text x={145.4} y={15} fill="#000" fillOpacity={0.3}>
          {"succeeded"}
        </Text>
        <Text x={145.4} y={14}>
          {"succeeded"}
        </Text>
      </G>

      {/* Moved SVG to bottom of children */}
      <Svg
        width={12}
        height={12}
        viewBox="0 0 12 12"
        fill="none"
        x={5}
        y={4}
        {...props}
      >
        <G fillRule="evenodd" clipRule="evenodd" fill="#fff">
          <Path d="M0 9h1v2h2v1H0V9zM.667 4h3.068L6.203.444C6.39.167 6.701 0 7.035 0H11.5a.5.5 0 01.5.5v4.465a1 1 0 01-.445.832L8 8.265v3.068a.667.667 0 01-.667.667H5l-1-1 1.25-1.25-1-1L3 10 2 9l1.25-1.25-1-1L1 8 0 7V4.667C0 4.299.298 4 .667 4zM10.5 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </G>
      </Svg>
    </Svg>
  )
}

export default SvgComponent
