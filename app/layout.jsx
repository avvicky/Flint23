import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Flint'23",
  description:
    "ITELITZ is an national level technical symposium orgaized by Department of Information Technology at Mahendta College Of Engineering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
