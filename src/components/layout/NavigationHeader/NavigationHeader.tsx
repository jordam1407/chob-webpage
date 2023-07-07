'use client'

import { useState } from 'react'

import { NavigationHeaderProps } from './NavigationHeader.types'

function NavigationHeader({ image, navs }: NavigationHeaderProps) {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

    return (
        <section className="bg-chobDark overflow-hidden top-0 py-4 md:px-24">
            <div className="bg-chobDark">
                <nav className="flex justify-between p-2 px-4">
                    <div className="flex justify-between items-center w-full">
                        <div className="w-full lg:w-1/3">
                            {/* <a className="block max-w-max" href="/">
                                <img className="h-16" src={image} alt="" />
                            </a> */}
                        </div>
                        <div className="w-1/2 xl:w-[40%]">
                            <ul className="hidden lg:flex xl:justify-around text-sm">
                                {navs?.map(({ text, link }, index) => {
                                    return (
                                        <li key={`nav-desk-${index}`}>
                                            <a
                                                className="text-gray-100 hover:text-gray-300 hover:bg-chobDark rounded-lg py-2 px-4 font-medium"
                                                href={link}>
                                                {text}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="w-1/2 lg:w-1/3 flex justify-end">
                            <div className="hidden lg:flex items-center justify-end">
                                <a
                                    className="inline-block py-1 px-3 mr-2 leading-5 text-gray-100 border border-white/20 hover:bg-gradient-to-r hover:from-chobOrange-900/50 rounded-lg hover:to-chobOrange-950/50 text-sm"
                                    href="/contrate-agora">
                                    Login
                                </a>
                                <a
                                    className="inline-block py-1 px-3 mr-2 leading-5 text-gray-100 bg-gradient-to-r from-chobOrange-600/50 to-chobOrange-700/50 rounded-lg border border-chobOrange-600 hover:from-chobOrange-700/50 hover:to-chobOrange-800/50 text-sm"
                                    href="/contrate-agora">
                                    Contrate agora
                                </a>
                            </div>
                        </div>
                    </div>
                    <button
                        className="navbar-burger self-center lg:hidden"
                        onClick={() => setIsNavOpen((prev) => !prev)}>
                        <svg width="35" height="35" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className="text-chobDark" width="32" height="32" rx="6" fill="currentColor"></rect>
                            <path
                                className="text-gray-100"
                                d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z"
                                fill="currentColor"></path>
                        </svg>
                    </button>
                </nav>
                <div className="navbar-menu z-50 relative">
                    <div
                        onClick={() => setIsNavOpen((prev) => !prev)}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                                setIsNavOpen((prev) => !prev)
                            }
                        }}
                        role="button"
                        tabIndex={0}
                        className={`fixed top-0 -left-[100%] ease-in-out duration-300 ${
                            isNavOpen && 'translate-x-[100%]'
                        } w-full h-full bg-gray-900 bg-opacity-30`}
                    />
                    <div
                        className={`fixed top-0 -left-[672px] ease-in-out duration-700 ${
                            isNavOpen && 'translate-x-[672px]'
                        } bottom-0 w-4/6 max-w-xs bg-chobDark`}>
                        <nav className="relative p-6 h-full overflow-y-auto">
                            <div className="flex flex-col justify-between h-full">
                                <a className="inline-block" href="/test">
                                    <img className="h-12" src={image} alt="" />
                                </a>
                                <ul className="py-6 flex flex-col space-y-6">
                                    {navs?.map(({ text, link }, index) => {
                                        return (
                                            <a
                                                key={index}
                                                onClick={() => setIsNavOpen(false)}
                                                className="text-gray-100 w-full hover:text-gray-300 hover:bg-chobDark rounded-lg py-2 px-4 font-medium"
                                                href={link}>
                                                {text}
                                            </a>
                                        )
                                    })}
                                </ul>
                                <div className="flex flex-wrap">
                                    <div className="w-full mb-2 space-y-4">
                                        <a
                                            className="w-[70%] inline-block py-1 px-3 mr-2 leading-5 text-gray-100 border border-chobOrange-600 hover:bg-gradient-to-r hover:from-chobOrange-900/50 rounded-lg hover:to-chobOrange-950/50 text-sm text-center"
                                            href="/contrate-agora">
                                            Login
                                        </a>
                                        <a
                                            className="w-[70%] inline-block py-1 px-2 mr-2 leading-5 text-gray-100 bg-gradient-to-r from-chobOrange-700/50 to-chobOrange-800/50 rounded-lg font-medium border border-chobOrange-600 hover:from-chobOrange-800/50 hover:to-chobOrange-900/50 text-center"
                                            href="/contrate-agora">
                                            Contrate agora
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <button className="navbar-close absolute top-5 p-4 right-3" onClick={() => setIsNavOpen(false)}>
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.94004 5.99988L11.14 1.80655C11.2656 1.68101 11.3361 1.51075 11.3361 1.33321C11.3361 1.15568 11.2656 0.985415 11.14 0.859879C11.0145 0.734344 10.8442 0.663818 10.6667 0.663818C10.4892 0.663818 10.3189 0.734344 10.1934 0.859879L6.00004 5.05988L1.80671 0.859879C1.68117 0.734344 1.51091 0.663819 1.33337 0.663819C1.15584 0.663819 0.985576 0.734344 0.860041 0.859879C0.734505 0.985415 0.66398 1.15568 0.66398 1.33321C0.66398 1.51075 0.734505 1.68101 0.860041 1.80655L5.06004 5.99988L0.860041 10.1932C0.797555 10.2552 0.747959 10.3289 0.714113 10.4102C0.680267 10.4914 0.662842 10.5785 0.662842 10.6665C0.662842 10.7546 0.680267 10.8417 0.714113 10.9229C0.747959 11.0042 0.797555 11.0779 0.860041 11.1399C0.922016 11.2024 0.99575 11.252 1.07699 11.2858C1.15823 11.3197 1.24537 11.3371 1.33337 11.3371C1.42138 11.3371 1.50852 11.3197 1.58976 11.2858C1.671 11.252 1.74473 11.2024 1.80671 11.1399L6.00004 6.93988L10.1934 11.1399C10.2554 11.2024 10.3291 11.252 10.4103 11.2858C10.4916 11.3197 10.5787 11.3371 10.6667 11.3371C10.7547 11.3371 10.8419 11.3197 10.9231 11.2858C11.0043 11.252 11.0781 11.2024 11.14 11.1399C11.2025 11.0779 11.2521 11.0042 11.286 10.9229C11.3198 10.8417 11.3372 10.7546 11.3372 10.6665C11.3372 10.5785 11.3198 10.4914 11.286 10.4102C11.2521 10.3289 11.2025 10.2552 11.14 10.1932L6.94004 5.99988Z"
                                    fill="#8896AB"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NavigationHeader
