import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";

export const metadata = {
  title: "Inner Essence Therapy",
  description:
    "Professional psychotherapy services including individual, group, and family therapy. Wellness workshops and speaking engagements to support your mental health journey.",
  keywords:
    "therapy, psychotherapy, mental health, counseling, individual therapy, group therapy, family therapy, wellness workshops",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-gray-50 dark:bg-gray-900 calming:bg-sage-200 text-gray-900 dark:text-gray-100 calming:text-sage-900 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
