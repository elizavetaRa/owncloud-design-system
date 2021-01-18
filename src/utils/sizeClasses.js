const sizeClassMappings = {
  xxxsmall: "xxxs",
  xxsmall: "xxs",
  xsmall: "xs",
  small: "s",
  medium: "m",
  large: "l",
  xlarge: "xl",
  xxlarge: "xxl",
  xxxlarge: "xxxl",
}

export function getSizeClass(size) {
  return sizeClassMappings[size]
}
