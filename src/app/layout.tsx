import { Metadata } from 'next'
import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import { Suspense } from 'react'

import HomeLoading from '@/app/loading'
import './globals.css'
import Footer from '@/components/layout/Footer'
import NavigationHeader from '@/components/layout/NavigationHeader'

const space = SpaceGrotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
})

const title = 'Chob'
const description = 'Landing Page for Chob'

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        type: 'website',
        images: ['/images/logo_sige_tecnologia_light.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: ['/images/logo_sige_tecnologia_light.png'],
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

type RootLayoutProps = {
    children: React.ReactNode
}

const navs = [
    {
        text: 'Início',
        link: '/',
    },
    {
        text: 'Blog',
        link: '/blog',
    },
    {
        text: 'Preços',
        link: '/precos',
    },
]

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="pt_BR">
            <Suspense fallback={<HomeLoading />}>
                <body className={`${space.className} overflow-x-hidden`}>
                    <NavigationHeader image="images/vercel.svg" navs={navs} />
                    <div className="z-10 rounded-[32px] absolute sm:w-[120px] sm:h-[280px] w-[120px] h-[180px] bg-blue-600 sm:blur-[130px] blur-[100px] sm:-top-28 -top-20 -left-16" />
                    <div className="z-10 rounded-[32px] absolute sm:w-[120px] sm:h-[180px] w-[120px] h-[80px] bg-blue-600 sm:blur-[130px] blur-[80px] sm:top-0 top-36 right-0" />
                    {children}
                    <Footer />
                </body>
            </Suspense>
        </html>
    )
}
