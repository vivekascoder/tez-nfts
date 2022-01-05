import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";
import "../src/theme/styles.css";
import { AuthProvider } from "../src/hooks/useAuth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}
export default MyApp;
