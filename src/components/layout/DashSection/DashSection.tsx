import { withAnimation } from '@/common/hocs'

import checkboxGreen from '../../../../public/images/checkbox-blue.svg'
import ctaImage from '../../../../public/images/dash-section.png'

function DashSection() {
    return (
        <section className="py-24 px-4 sm:px-24 bg-chobDark overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex -mx-4 space-x-8">
                    <div className="w-full relative md:flex items-center justify-center">
                        <div className="rounded-[32px] absolute sm:w-[320px] sm:h-[280px] w-[120px] h-[180px] bg-blue-600 sm:blur-[100px] blur-[100px] top-20" />
                        <img className="relative rounded-lg w-full" src={ctaImage.src} alt="" />
                    </div>
                    <div className="w-full px-4 mb-20 lg:mb-0">
                        <div className="max-w-xl mx-auto">
                            <h2 className="mb-8 text-2xl md:text-4xl font-heading font-bold text-gray-100 md:leading-15">
                                Identifique pontos fortes e fracos na sua estratégia, entre de vez na{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                    Era dos Dados
                                </span>
                            </h2>
                            <ul className="mb-10">
                                {[
                                    'Análise de Conversão por Hora',
                                    'Melhor Horário para Converter',
                                    'Horário com menor Conversão',
                                    'Funil de Conversão',
                                    'Taxa de Conversão por Pergunta',
                                    'Customização das perguntas',
                                    'Taxas de abandono',
                                ].map((item, index) => {
                                    return (
                                        <li className="flex items-center mb-4" key={`cta-item-${index}`}>
                                            <img className="mr-3" src={checkboxGreen.src} alt="" />
                                            <span className="text-lg md:text-xl font-heading text-slate-200">
                                                {item}
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="flex flex-wrap items-center mt-12 w-full">
                                <a
                                    className="transition-all duration-300 ease-in-out flex sm:py-3 sm:px-6 py-2 px-4 leading-5 text-gray-100 bg-gradient-to-r from-chobOrange-600/50 to-chobOrange-700/50 rounded-lg border border-chobOrange-600 hover:from-chobOrange-700/50 hover:to-chobOrange-800/50"
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withAnimation(DashSection, 'fade-up')
