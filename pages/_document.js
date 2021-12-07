import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const props = await Document.getInitialProps(ctx)
        
    //     return {
    //         ...props
    //     }
    // }
  
	render() {
        return (
            <Html>
                <Head>
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
                    <meta charSet="utf-8" />
                    <link rel="icon" type="image/x-icon" href="../static/favicon.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument