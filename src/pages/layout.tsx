import { Roboto } from "next/font/google";
import "../styles/globals.scss";

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ignews",
  description: "Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
