import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChurnSignal — Predict SaaS Churn 30 Days Early",
  description: "Analyzes subtle usage pattern changes to predict churn before it happens. Real-time monitoring, automated alerts, and actionable intervention recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1025feb7-5524-4c30-8314-4c995ff0fa07"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
