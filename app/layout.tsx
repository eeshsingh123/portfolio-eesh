import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

import { ThemeProvider } from "@/components/theme-provider";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Eesh Singh Portfolio",
  description:
    "This is a portfolio of Eesh Singh who is a Lead Software Engineer at Deloitte and an application developer. Eesh works on building AI applications and Artificial Intelligence use-cases using frameworks like llamaindex, langchain. Eesh has experience in Data Science, Data analytics, Machine learning, Deep learning, Agentic Retrieval Augumented Generation (RAG) pipelines",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
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
