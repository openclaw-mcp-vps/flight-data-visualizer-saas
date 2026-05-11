import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FlightViz — Interactive Flight Path Visualizations for Pilots',
  description: 'Upload your flight data and generate beautiful, shareable interactive maps and analytics. Built for commercial pilots, flight instructors, and aviation enthusiasts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="69df5c86-1456-4121-8277-1c858a47ea19"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
