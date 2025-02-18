"use client";

import React from "react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./lib/emotionCache";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";
import { purple } from '@mui/material/colors';

const clientSideEmotionCache = createEmotionCache();

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <html lang="en">
        <body style={{ backgroundColor: purple[50] }}>
          <Navbar />
          <Container sx={{ mt: 4 }}>{children}</Container>
        </body>
      </html>
    </CacheProvider>
  );
}