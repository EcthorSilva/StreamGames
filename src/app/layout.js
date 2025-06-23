import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "StreamGames",
  description: "A plataforma de jogos que você estava esperando!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
