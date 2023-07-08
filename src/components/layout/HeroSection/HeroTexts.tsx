import { withAnimation } from '@/common/hocs'

function HeroTexts() {
    return (
        <div className="xl:w-2/3 lg:flex justify-center items-center flex-col mx-auto mb-5 sm:mb-10 relative z-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-center text-gray-100 font-semibold">
                Transforme Visitantes em Clientes!
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-300 font-normal sm:text-center text-lg">
                Otimize suas Vendas e Fidelize Clientes: Transforme seu Site com Chob, o Companheiro de ChatBot
                Definitivo. Experimente Agora!
            </p>
        </div>
    )
}

export default withAnimation(HeroTexts, 'fade-in', 0)
