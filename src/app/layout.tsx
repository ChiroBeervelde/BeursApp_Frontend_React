import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "@/components/PrelineScript";
import Header from "@/components/Header/header";
import StoreProvider from "@/redux/StoreProvider";
import App from "@/app/App";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'BeursApp',
    description: 'An application for the BeursAvond of Chiro Beervelde',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
            <PrelineScript />
            <StoreProvider>
                <App>
                    {children}
                </App>
            </StoreProvider>
        </body>
        </html>
    )
}
