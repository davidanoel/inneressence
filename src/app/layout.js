import "./globals.css";

export const metadata = {
  title: "Inner Essence Therapy",
  description:
    "Professional psychotherapy services including individual, group, and family therapy. Wellness workshops and speaking engagements to support your mental health journey.",
  keywords:
    "therapy, psychotherapy, mental health, counseling, individual therapy, group therapy, family therapy, wellness workshops",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
