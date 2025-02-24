"use client";
import "./global.css"
import React from "react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./lib/emotionCache";
import Chat from "./components/sections/Chat";

const clientSideEmotionCache = createEmotionCache();


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <html lang="en">
        <body >
          
          {children}
          <Chat />
        </body>
      </html>
    </CacheProvider>
  );
}