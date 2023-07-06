function HeroSection() {
    return (
        <section className="bg-chobDark py-16">
            <div className="bg-chobDark">
                <div className="container relative mx-auto flex flex-col items-center md:justify-center pt-24 md:pt-0">
                    <div className="w-[197px] opacity-40 h-[195px] bg-chobOrange-400 rounded-[32px] blur-[120px] absolute z-50 right-32 top-16" />
                    <div className="w-[151px] h-[122px] opacity-70 bg-sky-400 rounded-full blur-[120px] absolute z-50 left-32 top-36" />
                    <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                        <h1 className="text-2xl sm:text-3xl font-custom md:text-4xl lg:text-6xl xl:text-7xl text-center text-gray-100 font-medium leading-7 md:leading-10">
                            Transforme Visitantes em Clientes!
                        </h1>
                        <p className="font-custom mt-5 sm:mt-10 lg:w-10/12 text-gray-300 font-normal text-center text-sm sm:text-lg">
                            Otimize suas Vendas e Fidelize Clientes: Transforme seu Site com Chob, o Companheiro de
                            ChatBot Definitivo. Experimente Agora!
                        </p>
                    </div>
                    <div className="lg:flex items-center justify-end space-x-4">
                        <a
                            className="flex py-3 px-6 leading-5 text-gray-100 bg-gradient-to-r from-chobOrange-600/50 to-chobOrange-700/50 rounded-lg border border-chobOrange-600 hover:from-chobOrange-700/50 hover:to-chobOrange-800/50"
                            href="/contrate-agora">
                            <span className="my-auto">Contrate Agora</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="my-auto h-5 w-5"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                stroke-width="1"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 6l6 6l-6 6"></path>
                            </svg>
                        </a>
                        <a
                            className="flex py-3 px-6 leading-5 text-gray-100 border border-white/20 hover:bg-gradient-to-r hover:from-chobOrange-900/50 rounded-lg hover:to-chobOrange-950/50"
                            href="/contrate-agora">
                            <span className="my-auto">Teste Grátis</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="my-auto h-5 w-5"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                stroke-width="1"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round">
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

export default HeroSection
