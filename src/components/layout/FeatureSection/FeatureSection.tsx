import { withAnimation } from '@/common/hocs'
import { BlurAnimate } from '@/components/animations'
import CodeChat from '@/components/icons/CodeChat'
import Funnel from '@/components/icons/Funnel'
import Integration from '@/components/icons/Integration'

import dash from '../../../../public/images/mock.png'

function FeatureSection() {
    return (
        <section className="md:pb-24 py-12 md:py-0 bg-chobDark">
            <div className="container px-4 mx-auto">
                <div className="relative mx-auto sm:w-[80%]">
                    <BlurAnimate extra={'h-[60%] w-full sm:h-full blur-[60px] sm:top-0 top-[20%]'} />
                    <img src={dash.src} alt="Dashboard" className="relative" />
                </div>
                <div className="max-w-5xl mx-auto md:text-center mt-24">
                    <h2 className="mb-4 text-2xl md:text-3xl leading-tight font-bold tracking-tighter text-gray-100">
                        Pare de Perder Leads por Falta de Atendimento, nosso Chat Atende por Você
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 font-medium">
                        Maximize a produtividade da sua equipe, receba insights poderosos sobre seus leads.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:w-[80%] mx-auto my-12 md:my-24 text-gray-100">
                    <div className="flex justify-center space-x-8 p-6 border border-white/20 bg-gradient-to-r from-chobOrange-900/50 rounded-lg to-chobOrange-950/50">
                        <CodeChat />

                        <span className="text-xl">Montamos seu Chat</span>
                    </div>
                    <div className="flex justify-center space-x-8 p-6 border border-white/20 bg-gradient-to-r from-chobOrange-900/50 rounded-lg to-chobOrange-950/50">
                        <Integration />

                        <span className="text-xl">Você integra ao seu site</span>
                    </div>
                    <div className="flex justify-center space-x-8 p-6 border border-white/20 bg-gradient-to-r from-chobOrange-900/50 rounded-lg to-chobOrange-950/50">
                        <Funnel />

                        <span className="text-xl">Os Leads são gerados</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withAnimation(FeatureSection, 'fade-up', 0.1)
