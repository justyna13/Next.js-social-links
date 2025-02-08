import "./globals.css";
import { cn } from "@/utils/lib/tailwind";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '700']
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background text-foreground font--poppins antialiased',
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
