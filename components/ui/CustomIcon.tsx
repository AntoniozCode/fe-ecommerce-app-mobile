import * as React from "react"
import { SvgProps } from "react-native-svg"
import { HamburguerMenu } from "../icons/hamburguer-menu";
import { Shopping } from "../icons/shopping";
import { Market } from "../icons/market";


export const CustomSvgMapping = {
  "menu": HamburguerMenu,
  "shopping": Shopping,
  "market": Market,
} as const;

export type CustomIconNames = keyof typeof CustomSvgMapping;

type CustomIconProps = SvgProps & {
  name: CustomIconNames;
  size?: number;
}

export const CustomIcon = ({ name, size, ...props }: CustomIconProps) => {
  const Icon = CustomSvgMapping[name];
  props.width = size || props.width;
  props.height = size || props.height;
  return <Icon {...props} />;
}