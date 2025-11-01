import type React from "react"
import type { Metadata } from "next"
import { Outfit, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const outfitFont = Outfit({ subsets: ["latin"], variable: "--font-heading" })
const interFont = Inter({ subsets: ["latin"], variable: "--font-body" })

export const metadata: Metadata = {
  title: "CarbonX - Carbon Trading Platform",
  description: "Gamified carbon credit trading and retirement",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfitFont.variable} ${interFont.variable} font-body antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
