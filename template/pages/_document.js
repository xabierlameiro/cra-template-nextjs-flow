// @flow
import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
// types
import type { DocumentContext } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): { ... } {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render(): React.Element<*> {
        return (
            <Html lang="en">
                <Head>
                    {/* TODO */}
                    <meta name="description" content="content" />
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
