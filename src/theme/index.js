import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Nunito', ${base.fonts?.heading}`,
    body: `'Nunito', ${base.fonts?.body}`,
  },
});

export default theme;
