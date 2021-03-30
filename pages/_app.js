import { global } from "@stitches/react";

const globalStyles = global({
  body: { margin: 0 },
});

const MyApp = ({ Component, pageProps }) => {
  globalStyles();
  return <Component {...pageProps} />;
};

export default MyApp;
