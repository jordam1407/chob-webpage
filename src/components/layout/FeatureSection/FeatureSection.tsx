import dash from '../../../../public/images/mock.png'

function FeatureSection() {
    return (
        <section className="pb-24 bg-chobDark">
            <div className="relative container px-4 mx-auto">
                <div className="w-[197px] opacity-40 h-[195px] bg-chobOrange-400 rounded-[32px] blur-[120px] absolute left-32 top-36" />
                <div className="w-[151px] h-[122px] opacity-70 bg-sky-400 rounded-full blur-[120px] absolute right-32 top-96" />
                <img src={dash.src} alt="Dashboard" className="w-[80%] mx-auto relative z-10" />
                <div className="max-w-5xl mx-auto text-center mb-16 md:my-24">
                    <h2 className="mb-4 text-2xl md:text-3xl leading-tight font-bold tracking-tighter text-gray-100">
                        Pare de Perder Vendas por Falta de Atendimento, nosso Chat Automatizado Vende por Você
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 font-medium">
                        Maximize a produtividade da sua equipe e encante seus clientes com a tecnologia avançada de
                        chatbot do Chob.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection
