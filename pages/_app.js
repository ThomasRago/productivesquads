import "../styles/globals.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AuthProvider } from "../utils/auth";

function MyApp({ Component, pageProps }) {
  <CssBaseline />;
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
