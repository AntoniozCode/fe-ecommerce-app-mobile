// This file is a fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { CustomIcon, CustomIconNames, CustomSvgMapping } from "./CustomIcon";

// Add your SFSymbol to MaterialIcons mappings here.
const MAPPING = {
  // See MaterialIcons here: https://icons.expo.fyi
  // See SF Symbols in the SF Symbols app on Mac.
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'location.fill': 'location-pin',
  'restaurant.fill': 'restaurant',
  'shopping-basket.fill': 'shopping-basket',
  'drink.fill': 'local-drink',
} as const;

type MaterialIconNames = keyof typeof MAPPING;

export type IconSymbolName = MaterialIconNames | CustomIconNames;


/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */

type IconSymbolProps = {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
  className?: string;
}

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  className,
}: IconSymbolProps) {   
  if (name in CustomSvgMapping) {
    return <CustomIcon 
            name={name as CustomIconNames} 
            width={size}
            height={size}
            color={color} 
            style={style}
            className={className}
            />;
  }
  return <MaterialIcons 
          color={color}
          size={size}
          name={MAPPING[name as MaterialIconNames]}
          style={style as StyleProp<TextStyle>} 
          className={className}
          />;
}
