const URL_BASE = 'https://leadster.com.br'
const URL_CASES = 'https://leadster.com.br/estudo-de-caso/'
export default function Footer() {
    const items = [
        {
            title: 'Links Principais',
            links: [
                {
                    item: 'Home',
                    url: URL_BASE,
                },
                {
                    item: 'Ferramenta',
                    url: URL_BASE,
                },
                {
                    item: 'Preços',
                    url: 'https://leadster.com.br/preco',
                },
                {
                    item: 'Contato',
                    url: 'https://leadster.com.br/contato',
                },
            ],
        },
        {
            title: 'Cases',
            links: [
                {
                    item: 'Geração de Leads B2B',
                    url: URL_CASES,
                },
                {
                    item: 'Geração de Leads em Software',
                    url: URL_CASES,
                },
                {
                    item: 'Geração de Leads em Imobiliária',
                    url: URL_CASES,
                },
                {
                    item: 'Cases de Sucesso',
                    url: URL_CASES,
                },
            ],
        },
        {
            title: 'Materiais',
            links: [
                {
                    item: 'Blog',
                    url: 'https://leadster.com.br/blog/',
                },
                {
                    item: 'Parceria com Agências',
                    url: 'https://leadster.com.br/web-stories/',
                },
                {
                    item: 'Guia Definitivo do Marketing',
                    url: 'https://leadster.com.br/marketing-conversacional/',
                },
                {
                    item: 'Materiais Gratuitos',
                    url: 'https://leadster.com.br/materiais/',
                },
            ],
        },
    ]
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="flex flex-col">
                    <span className="mx-auto text-gray-500 text-sm">Transformando visitantes em clientes.</span>
                </div>

                <div className="grid grid-cols-1 gap-8 border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
                    {items.map((item, i) => (
                        <div key={i}>
                            <p className="font-semibold text-gray-900">{item.title}</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                {item.links.map((link, i) => (
                                    <li key={i}>
                                        <a
                                            href="https://leadster.com.br/"
                                            className="text-gray-500 transition hover:opacity-75">
                                            {link.item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div>
                        <p className="font-semibold text-gray-900">Siga a Leadster</p>

                        <ul className="mt-6 flex justify-start gap-6">
                            <li className="bg-gray-100 p-3 rounded-full text-gray-500 hover:bg-[#00aff0] hover:text-gray-50 cursor-pointer ease-in-out duration-500">
                                <a target="_blank" href="https://www.linkedin.com/company/leadster-platform/">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 448 512"
                                        height="18px"
                                        width="18px"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                    </svg>
                                </a>
                            </li>

                            <li className="bg-gray-100 p-3 rounded-full text-gray-500 hover:bg-[#00aff0] hover:text-gray-50 cursor-pointer ease-in-out duration-500">
                                <a target="_blank" href="https://www.facebook.com/leadsterplatform">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 320 512"
                                        height="18px"
                                        width="18px"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                    </svg>
                                </a>
                            </li>

                            <li className="bg-gray-100 p-3 rounded-full text-gray-500 hover:bg-[#00aff0] hover:text-gray-50 cursor-pointer ease-in-out duration-500">
                                <a target="_blank" href="https://www.instagram.com/leadster.com.br/">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 448 512"
                                        height="18px"
                                        width="18px"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <div className="flex flex-col mt-4 text-sm text-gray-500">
                            <span>
                                <span className="font-semibold">E-mail:</span> contato@leadster.com.br
                            </span>
                            <span>
                                <span className="font-semibold">Telefone:</span> (42) 988289851
                            </span>
                        </div>
                    </div>
                </div>
                <div className="border-b-2 my-4"></div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">
                        Copyright &copy; 2015 - 2023 Todos direitos reservados |{' '}
                        <a href="https://leadster.com.br/" className="text-main-blue font-semibold">
                            Leadster
                        </a>
                    </span>
                    <span className="text-sm text-gray-500">
                        Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |{' '}
                        <a href="https://leadster.com.br/termos_de_uso/" className="text-main-blue font-semibold">
                            Termos de uso
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}
