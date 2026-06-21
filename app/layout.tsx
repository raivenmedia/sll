import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/lib/data";
import { env } from "@/lib/env";

export const metadata: Metadata = buildMetadata({
  title: "Yolic | Building Brands. Powering Businesses.",
  description: company.description,
  keywords: ["branding", "printing", "digital marketing", "IT solutions", "SEO", "CRM"],
  path: "/",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: env.appUrl,
  email: company.email,
  telephone: company.phone,
  address: company.address,
  sameAs: Object.values(company.socials),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        {env.gaMeasurementId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${env.gaMeasurementId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${env.gaMeasurementId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
