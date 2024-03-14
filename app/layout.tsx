/*
 * @description: 描述信息
 * @author: Jack Chen @懒人码农
 * @Date: 2024-03-05 20:30:07
 * @LastEditors: Jack Chen
 * @LastEditTime: 2024-03-14 21:23:32
 */
import 'css/tailwind.css'
import 'pliny/search/algolia.css'

import { Space_Grotesk } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'
import ProgressBarProvider from '@/components/ProgressBarProvider'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon.ico" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      {/* <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" /> */}
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body className="relative bg-[#fcfcfd] text-black antialiased dark:bg-[#050a1a] dark:text-white">
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SectionContainer>
            <div className="flex h-screen flex-col justify-between font-sans">
              <div className="absolute inset-0 -z-10 overflow-hidden bg-[#fcfcfd] dark:bg-[#050a1a]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="none"
                  viewBox="0 0 1440 900"
                >
                  <path
                    fill="url(#pattern0)"
                    d="M0 0H1440V900H0z"
                    opacity="0.36"
                    style={{ mixBlendMode: 'exclusion' }}
                  ></path>
                  <defs>
                    <pattern
                      id="pattern0"
                      width="0.429"
                      height="0.687"
                      patternContentUnits="objectBoundingBox"
                    >
                      <use transform="scale(.00044 .0007)" xlinkHref="#image0_1288_13896"></use>
                    </pattern>
                    <image
                      id="image0_1288_13896"
                      width="972"
                      height="972"
                      data-name="216.png"
                      xlinkHref="/static/images/home_bg.png"
                    ></image>
                  </defs>
                </svg>
              </div>
              <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                <Header />
                <main>
                  <ProgressBarProvider>{children}</ProgressBarProvider>
                </main>
              </SearchProvider>
              <Footer />
            </div>
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
