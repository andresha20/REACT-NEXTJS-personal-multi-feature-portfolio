import { ThemeProvider } from '@material-ui/core/styles'
import { useEffect } from 'react'
import { LanguageProvider } from '../components/Context/language'
import { ContextThemeProvider } from '../components/Context/theme'
import PropTypes from 'prop-types'
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'
import Layout from '../components/Layout/Layout'

export default function MyApp(props) {

  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <LanguageProvider>
        <ContextThemeProvider>
          <Head>
            <title>Portfolio - Andrés Henao</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" key='title'/>
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <Layout>
                <CssBaseline />
                <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </ContextThemeProvider>
      </LanguageProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};