import "./globals.css";

export const metadata = {
  title: "web-dev2",
  description: "web development 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
