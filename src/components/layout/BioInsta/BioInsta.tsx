import { withAnimation } from '@/common/hocs'

import ctaImage from '../../../../public/images/chob-chat.png'

function BioInsta() {
    return (
        <section className="py-12 md:py-24 px-4 sm:px-24 bg-chobDark overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row -mx-4 md:space-x-8 items-center">
                    <div className="w-full px-4 mb-20 lg:mb-0">
                        <div className="max-w-xl mx-auto">
                            <h2 className="mb-8 text-2xl md:text-4xl font-heading font-bold text-gray-100 md:leading-15">
                                Atendimento personalizado diretamente na{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                    Bio do Instagram
                                </span>
                            </h2>
                            <span className="text-lg md:text-xl font-heading text-slate-200">
                                Substitua as páginas de bio tradicionais e entediantes por um ChaBot personalizado, Seja
                                único, Seja interativo, Seja diferenciado!
                            </span>
                            <div className="flex flex-wrap items-center mt-4 w-full">
                                <a
                                    className="flex text-lg leading-5 text-gray-300 hover:scale-110 transition-all hover:text-chobOrange-600/80"
                                    href="/contrate-agora">
                                    <span className="my-auto">Saiba mais</span>
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
                    <div className="w-full relative md:flex items-center justify-center">
                        <div className="rounded-[32px] absolute sm:w-[320px] sm:h-[280px] w-[120px] h-[180px] bg-blue-600 sm:blur-[100px] blur-[100px] top-20" />
                        <img className="relative md:w-[40%]" src={ctaImage.src} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withAnimation(BioInsta, 'fade-up', 0.7)
