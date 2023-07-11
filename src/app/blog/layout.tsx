import Image from 'next/image'

import logo from '../../../public/images/logo.png'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-2xl mx-auto py-12 px-4 prose-a:text-gray-100 prose-headings:text-gray-100 prose-strong:text-gray-100">
            <div className="mx-auto text-center">
                <Image alt="Firezone logo" width={225} height={225} src={logo.src} className="py-12 mx-auto" />
            </div>
            {children}
        </div>
    )
}
