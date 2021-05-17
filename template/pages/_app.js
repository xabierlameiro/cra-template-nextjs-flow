// @flow
import '../styles/globals.css'
import * as React from 'react'

function MyApp({
    Component,
    pageProps,
}: {
    Component: React.ComponentType<*>,
    pageProps: { ... },
}): React.Element<*> {
    return <Component {...pageProps} />
}

export default MyApp
