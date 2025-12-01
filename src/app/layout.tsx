import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/lib/auth";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Komanda Ryšys",
    description: "Victory is born together – One Pass Sports Platform",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-kr-gray text-kr-darkBlue`}>
                <AuthProvider>
                    <Navbar />
                    <main className="min-h-[calc(100vh-64px)]">{children}</main>
                </AuthProvider>
            </body>
        </html>
    );
}
