import "./globals.css";

import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

import { ThemeProvider } from "@/components/theme-provider";


const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Eesh Singh | Lead Software Engineer Portfolio",
  description:
    "Explore the portfolio of Eesh Singh, Lead Software Engineer at Deloitte and expert application developer. Specializing in AI applications, machine learning, deep learning, and Agentic RAG pipelines using frameworks like LLaMA Index and LangChain. Skilled in data science, data analytics, and innovative Artificial Intelligence solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
