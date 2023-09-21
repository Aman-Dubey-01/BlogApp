"use client"

import NextNProgress from 'nextjs-progressbar';

export default function Loader() {
  return (
    <> <NextNProgress color="#D80032" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true}/></>
  )
}
