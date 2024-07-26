import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <SpeedInsights/>
      <Analytics />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
