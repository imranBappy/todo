import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo List",
  description: "This is a todo application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
