import { withAnimation } from '@/common/hocs'
import { BlurAnimate } from '@/components/animations'

import dash from '../../../../public/images/mock.png'

function FeatureSection() {
    return (
        <section className="pb-24 py-12 bg-chobDark -z-10">
            <div className="container px-4 mx-auto">
                <div className="relative mx-auto sm:w-[80%]">
                    <BlurAnimate extra={'h-[60%] w-full sm:h-full bg-blue-600 blur-[80px] sm:top-0 top-[20%]'} />
                    <img src={dash.src} alt="Dashboard" className="relative" />
                </div>
                <div className="max-w-5xl mx-auto text-center my-8 md:my-24">
                    <h2 className="mb-4 text-2xl md:text-3xl leading-tight font-bold tracking-tighter text-gray-100">
                        Pare de Perder Leads por Falta de Atendimento, nosso Chat Atende por Você
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 font-medium">
                        Maximize a produtividade da sua equipe, aumente sua porcentagem de conversões.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default withAnimation(FeatureSection, 'fade-up', 0.4)
