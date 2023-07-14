import { withAnimation } from '@/common/hocs'

import checkboxGreen from '../../../../public/images/checkbox-blue.svg'
import ctaImage from '../../../../public/images/dash-section.png'

function DashSection() {
    return (
        <section className="md:py-24 py-12 px-4 sm:px-24 bg-chobDark overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col-reverse md:flex-row -mx-4 md:space-x-8">
                    <div className="w-full relative md:flex items-center justify-center">
                        <div className="rounded-[32px] absolute sm:w-[320px] sm:h-[280px] w-[120px] h-[180px] bg-blue-600 sm:blur-[100px] blur-[100px] top-20" />
                        <img className="relative rounded-lg w-full" src={ctaImage.src} alt="" />
                    </div>
                    <div className="w-full px-4 mb-20 lg:mb-0">
                        <div className="max-w-xl mx-auto">
                            <h2 className="mb-8 text-2xl md:text-4xl font-bold text-gray-100 md:leading-15">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withAnimation(DashSection, 'fade-up')
