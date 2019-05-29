const createColorPalette = palette => (variant = 500) => palette[variant]

export default {
  spacing: 16,
  colors: {
    orange: createColorPalette({
      100: "#FFF1E8",
      200: "#FFDDC6",
      300: "#FFC8A3",
      400: "#FF9F5E",
      500: "#FF7619",
      600: "#E66A17",
      700: "#99470F",
      800: "#73350B",
      900: "#4D2308",
    }),
    grey: createColorPalette({
      100: "#EBEBEB",
      200: "#CCCCCC",
      300: "#ADADAD",
      400: "#707070",
      500: "#333333",
      600: "#2E2E2E",
      700: "#1F1F1F",
      800: "#171717",
      900: "#0F0F0F",
    }),
  },
}
