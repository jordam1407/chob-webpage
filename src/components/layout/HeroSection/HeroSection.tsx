import { withAnimation } from '@/common/hocs'

function HeroSection() {
    return (
        <section className="bg-chobDark sm:py-16 px-4 overflow-x-hidden overflow-y-auto">
            <div className="bg-chobDark">
                <div className="container mx-auto flex flex-col items-center md:justify-center sm:pt-24 pt-16 md:pt-0">
                    <div className="sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                        <h1 className="text-6xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl sm:text-center text-gray-100 font-medium sm:leading-7 md:leading-10">
                            Transforme Visitantes em Clientes!
                        </h1>
                        <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-300 font-normal sm:text-center text-lg">
                            Otimize suas Vendas e Fidelize Clientes: Transforme seu Site com Chob, o Companheiro de
                            ChatBot Definitivo. Experimente Agora!
                        </p>
                    </div>
                    <div className="flex items-center justify-end space-x-4">
                        <a
                            className="flex sm:py-3 sm:px-6 py-2 px-4 leading-5 text-gray-100 bg-gradient-to-r from-chobOrange-600/50 to-chobOrange-700/50 rounded-lg border border-chobOrange-600 hover:from-chobOrange-700/50 hover:to-chobOrange-800/50"
                            href="/contrate-agora">
                            <span className="my-auto">Contrate Agora</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="my-auto h-5 w-5"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                strokeWidth="1"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 6l6 6l-6 6"></path>
                            </svg>
                        </a>
                        <a
                            className="flex sm:py-3 sm:px-6 py-2 px-4 leading-5 text-gray-100 border border-white/20 hover:bg-gradient-to-r hover:from-chobOrange-900/50 rounded-lg hover:to-chobOrange-950/50"
                            href="/contrate-agora">
                            <span className="my-auto">Teste Grátis</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="my-auto h-5 w-5"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                strokeWidth="1"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 6l6 6l-6 6"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withAnimation(HeroSection, 'fade-in', 0.2)
