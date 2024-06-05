import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="shortcut icon" href="/favicon.ico"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div className="z-0 fixed w-[451px] h-[451px] left-[-203px] top-[320px]" style={{background: 'linear-gradient(45deg, #14f195, #01eb99 9.09%, #00e59d 18.18%, #00dea0 27.27%, #00d8a2 36.36%, #00d5af 45.45%, #00d2b9 54.55%, #00cfc2 63.64%, #00ced5 72.73%, #00cde6 81.82%, #00caf4 90.91%, #00c6ff)', filter: 'blur(262.016px)'}}></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
