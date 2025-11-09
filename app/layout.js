import "./globals.css";

export const metadata = {
  title: "PoleGrid Telecom Nigeria",
  description: "Welcome to the wonderful world of unique service — PoleGrid Telecom.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
