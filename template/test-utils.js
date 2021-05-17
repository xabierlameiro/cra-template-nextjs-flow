// @flow
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

// types
import type { Element } from 'react'

const AllTheProviders = ({ children }: Object): Element<'div'> => {
    return <div>{children}</div>
}

const customRender = (ui: Element<*>, options: Object): Function =>
    render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
