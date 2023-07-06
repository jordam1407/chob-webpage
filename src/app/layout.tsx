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

const title = 'SIGE Tecnologia'
const description = 'Sistema de gestão para clínicas'

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
        text: 'Sobre',
        link: '/#sobre',
    },
    {
        text: 'Preços',
        link: '/#precos',
    },
    {
        text: 'FAQ',
        link: '/#faq',
    },
    {
        text: 'Contato',
        link: '/#contact',
    },
]

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="pt_BR">
            <Suspense fallback={<HomeLoading />}>
                <body className={space.className}>
                    <NavigationHeader image="images/logo_sige_tecnologia_light.png" navs={navs} />
                    {children}
                    <Footer />
                </body>
            </Suspense>
        </html>
    )
}
