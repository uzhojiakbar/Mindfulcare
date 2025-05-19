// app/StyledComponentsRegistry.jsx
"use client";

import React from "react";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export default function StyledComponentsRegistry({ children }) {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      {children}
    </StyleSheetManager>
  );
}
