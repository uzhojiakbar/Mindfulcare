"use client";

import React, { useState } from "react";
import { StyleSheetManager } from "styled-components";
import { useServerInsertedHTML } from "next/navigation";

export default function StyledComponentsRegistry({ children }) {
  const [styledComponentsStyleSheet] = useState(
    () => new (require("styled-components").ServerStyleSheet)()
  );

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
