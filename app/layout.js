import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnnouncementTicker from "@/components/AnnouncementTicker";

export const metadata = {
  title: "PoleGrid Telecom Nigeria",
  description: "Welcome to the wonderful world of unique service — PoleGrid Telecom.",
  keywords: [
    "PoleGrid",
    "Telecom Nigeria",
    "Telecommunication services",
    "Internet services",
    "Phone services",
    "Reliable telecom"
  ],
  authors: [{ name: "PoleGrid", url: "https://polegrid.com" }],
  creator: "PoleGrid",
  openGraph: {
    type: "website",
    url: "https://polegrid.com",
    title: "PoleGrid Telecom Nigeria",
    description: "Welcome to the wonderful world of unique service — PoleGrid Telecom.",
    images: [
      {
        url: "/polegrid.png",
        width: 1200,
        height: 630,
        alt: "PoleGrid Telecom Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PoleGrid Telecom Nigeria",
    description: "Welcome to the wonderful world of unique service — PoleGrid Telecom.",
    image: "/polegrid.png",
    creator: "@PoleGrid",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content="PoleGrid" />
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body className="bg-gray-50 text-gray-900">
        {/* Announcement Ticker */}
        <AnnouncementTicker />

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main className="min-h-screen">{children}</main>

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
