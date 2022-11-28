import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import { colors } from "./foundations/colors";
import shadows from "./foundations/shadows";
import styles from "./styles";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "Arial,sans-serif",
    body: "Arial,sans-serif",
  },
  shadows,

  //set the global lineHeight as per TFO design system
  lineHeights: {
    base: 1.2,
  },
  border: {
    defaultBorder: "1px solid #4d4d4d",
  },
  colors,
  accordianStyles: {
    borderTopStartRadius16: "16px",
    borderBottomStartRadius16: "16px",
    borderStart8: "8px",
  },
  styles,

  components: {},
});

export default theme;
