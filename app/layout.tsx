"use client";

import React from "react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./lib/emotionCache";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";

const clientSideEmotionCache = createEmotionCache();

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <html lang="en">
        <body>
          <Navbar />
          <Container sx={{ mt: 4 }}>{children}</Container>
        </body>
      </html>
    </CacheProvider>
  );
}