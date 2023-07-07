/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */

import { withAnimation } from '@/common/hocs'

function PricingSection() {
    return (
        <div className="px-4 py-16 mx-auto lg:py-24">
            <div className="mb-10 md:mx-auto sm:text-center md:mb-24">
                <h2 className="mb-8 text-4xl md:text-5xl leading-tight font-bold tracking-tighter text-gray-100">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                            <defs>
                                <pattern
                                    id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30">
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)" width="52" height="24" />
                        </svg>
                        <span className="relative">Preços</span>
                    </span>{' '}
                    Simples. Soluções avançadas.
                </h2>
                <p className="text-base text-gray-300 md:text-lg">
                    Simplifique seu processo de geração de leads com nosso chatbot intuitivo e plataforma integrada
                </p>
            </div>
            <div className="flex w-1/2 mx-auto justify-center space-x-4">
                <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-gray-950 border rounded shadow-sm sm:items-center hover:shadow">
                    <div className="text-left">
                        <div className="text-lg font-semibold text-gray-100">Base</div>
                        <div className="flex items-center justify-center mt-2">
                            <div className="mr-1 text-5xl font-bold text-gray-300">$89</div>
                            <div className="text-gray-300">/ mês</div>
                        </div>
                        <ul className="mt-2 space-y-3">
                            <li className="text-gray-300 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-gray-100 mr-4">
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                Gerenciamento ded Leads
                            </li>
                            <li className="text-gray-300 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-gray-100 mr-4">
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                1 Atualização de ChatBot/mês
                            </li>
                            <li className="text-gray-300 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-gray-100 mr-4">
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                Chats Ilimitados
                            </li>
                            <li className="text-gray-300 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-gray-100 mr-4">
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                100% Customizável
                            </li>
                            <li className="text-gray-300 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-gray-100 mr-4">
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                Desenvolvedor de Chatbot
                            </li>
                            <li className="text-gray-300 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-gray-100 mr-4">
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                Suporte/Instalação
                            </li>
                            <li className="text-gray-300 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-gray-100 mr-4">
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                Dashboard
                            </li>
                            <li className="text-gray-300 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-gray-100 mr-4">
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                Histórico de Chats
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="max-w-xs mt-6 text-xs text-gray-400 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                            Tenha em mãos todo histórico de conversas e analytics básico!
                        </p>
                        <a
                            href="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-gray-100 transition duration-200 border border-white/20 hover:bg-gradient-to-r hover:from-chobOrange-900/50 rounded-lg hover:to-chobOrange-950/50">
                            Comprar Mid
                        </a>
                    </div>
                </div>
                <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-chobOrange-900/20 border rounded shadow-sm sm:items-center hover:shadow border-orange-600">
                    <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                        <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-orange-600">
                            Mais Vendido
                        </div>
                    </div>
                    <div className="text-left">
                        <div className="text-lg font-semibold text-gray-100">Pro</div>
                        <div className="flex items-center justify-center mt-2">
                            <div className="mr-1 text-5xl font-bold text-gray-300">R$119</div>
                            <div className="text-gray-300">/ mês</div>
                        </div>
                        <ul className="mt-2 space-y-3">
                            <li className="text-gray-300 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-gray-100 mr-4">
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                Gerenciamento ded Leads
                            </li>
                            <li className="text-gray-300 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-gray-100 mr-4">
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                2 Atualizações de ChatBot/mês
                            </li>
                            <li className="text-gray-300 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-gray-100 mr-4">
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                Chats Ilimitados
                            </li>
                            <li className="text-gray-300 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-gray-100 mr-4">
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                100% Customizável
                            </li>
                            <li className="text-gray-300 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-gray-100 mr-4">
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                Desenvolvedor de Chatbot
                            </li>
                            <li className="text-gray-300 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-gray-100 mr-4">
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                Suporte/Instalação
                            </li>
                            <li className="text-gray-300 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-gray-100 mr-4">
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                Dashboard
                            </li>
                            <li className="text-gray-300 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-gray-100 mr-4">
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                Histórico de Chats
                            </li>
                            <li className="text-gray-300 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-gray-100 mr-4">
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                Analytics Avançado
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="max-w-xs mt-6 text-xs text-gray-400 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                            Receba analytics e insights detalhados dos atendimentos, empodere seu negócio!
                        </p>
                        <a
                            href="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-gray-100 transition duration-200 shadow-md bg-gradient-to-r from-chobOrange-600/50 to-chobOrange-700/50 rounded-lg border border-chobOrange-600 hover:from-chobOrange-700/50 hover:to-chobOrange-800/50">
                            Comprar Pro
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(PricingSection, 'fade-in')
