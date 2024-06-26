import type { Metadata } from 'next'
import { Locale, i18n } from '@/i18n-config'
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Footer, MobileNavMenu, NavMenu } from '@/components'
import { getDictionary } from '../../getDictionary'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Noite no Cerrado',
  description:
    'Projeto de conscientização sobre os efeitos da poluição luminosa no Cerrado brasileiro',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'pt-BR': '/pt',
    },
  },
  openGraph: {
    url: 'https://noitenocerrado.vercel.app',
    siteName: 'Noite no Cerrado',
    images: 'https://noitenocerrado.vercel.app/logo.webp',
  },
}

export const generateStaticParams = async () =>
  i18n.locales.map((locale) => ({ lang: locale }))

const RootLayout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: Locale }
}>) => {
  const dictionary = await getDictionary(params.lang)

  return (
    <html lang={params.lang}>
      <body className='font-body'>
        <main className='flex flex-col bg-black text-white relative'>
          <div className='hidden sm:block'>
            <NavMenu dictionary={dictionary} />
          </div>

          <div className='sm:hidden'>
            <MobileNavMenu dictionary={dictionary} />
          </div>

          <div className='relative mt-20 sm:mt-36'>{children}</div>

          <Footer dictionary={dictionary} />
        </main>

        <SpeedInsights />
        <Analytics />
      </body>
      <GoogleAnalytics gaId='G-YEWHWRDSCK' />
    </html>
  )
}

export default RootLayout
