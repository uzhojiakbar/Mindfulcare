// app/StyledComponentsRegistry.jsx
'use client'

import React from 'react'
import { StyleSheetManager } from 'styled-components'

export default function StyledComponentsRegistry({ children }) {
    return (
        <StyleSheetManager shouldForwardProp={prop => true}>
            {children}
        </StyleSheetManager>
    )
}
