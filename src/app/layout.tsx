import Navbar from "@/components/Navbar";
import Providers from "@/components/Provider";
import { Toaster } from "@/components/ui/Toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Breadit",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiansed light")}
    >
      <body className="min-h-screen pt-12 bg-slate-50 antiliased">
        <Providers>
          {/* @ts-expect-error server component */}
          <Navbar />
          {authModal}
          <div className="container max-w7xl mx-auto h-full pt-12">
            {children}
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
