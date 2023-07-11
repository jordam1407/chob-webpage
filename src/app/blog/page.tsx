import Link from 'next/link'

export default function page() {
    return (
        <div className="text-gray-100 min-h-[400px]">
            <article className="border-b border-gray-700 py-6">
                <Link href="/blog/poder-das-mensagens">
                    <h2 className="text-2xl hover:underline mb-4">
                        O Poder das Mensagens: Aproveite o Potencial do Chat para Gerar Lead
                    </h2>
                </Link>
                <span className="text-gray-300">
                    Descubra como o chat pode gerar leads de forma eficaz para o seu negócio. Comunicação direta e
                    instantânea, interação personalizada em tempo real e facilidade na captação e qualificação de leads.
                    Aproveite as vantagens únicas do chat para impulsionar suas estratégias de geração de leads.
                </span>
                <div className="w-full inline-flex justify-end space-x-2 text-sm text-gray-400 mt-4">
                    <a
                        href="linkedin.com/in/jordammendes/"
                        target="_blank"
                        rel="author"
                        className="text-sm text-right font-bold">
                        Jordam Mendes de Pinho
                    </a>
                    <time dateTime="2023-10-07" title="10 de Julho de 2023">
                        10 de Julho de 2023
                    </time>
                </div>
            </article>
        </div>
    )
}
