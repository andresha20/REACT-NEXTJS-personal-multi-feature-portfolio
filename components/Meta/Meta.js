import { Head } from "next/document";
import theme from '../../src/theme';

const MetaHeader = ({ title, keywords, description }) => {

    return (
        <Head>
            <meta name="theme-color" content={theme.palette.primary.main} />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            <link rel='icon' href='/favicon.ico' />
      </Head>
    )
}

MetaHeader.defaultProps = {
    keywords: 'Web Developer, React, Next JS',
    description: 'Portfolio built from scratch by Andres Henao',
  }

export default MetaHeader;