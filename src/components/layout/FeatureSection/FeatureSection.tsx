import { withAnimation } from '@/common/hocs'
import { BlurAnimate } from '@/components/animations'

import dash from '../../../../public/images/mock.png'

function FeatureSection() {
    return (
        <section className="pt-12 bg-chobDark -z-10">
            <div className="container px-4 mx-auto">
                <div className="relative mx-auto sm:w-[80%]">
                    <BlurAnimate extra={'h-[60%] w-full sm:h-full blur-[60px] sm:top-0 top-[20%]'} />
                    <img src={dash.src} alt="Dashboard" className="relative" />
                </div>
                <div className="max-w-5xl mx-auto text-center mt-24">
                    <h2 className="mb-4 text-2xl md:text-3xl leading-tight font-bold tracking-tighter text-gray-100">
                        Pare de Perder Leads por Falta de Atendimento, nosso Chat Atende por Você
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 font-medium">
                        Maximize a produtividade da sua equipe, receba insights poderosos sobre seus leads.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-5 sm:w-[80%] mx-auto my-24 text-gray-100">
                    <div className="flex justify-center space-x-8 p-6 border border-white/20 bg-gradient-to-r from-chobOrange-900/50 rounded-lg to-chobOrange-950/50">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.5 18.97H8C4 18.97 2 17.97 2 12.97V7.96997C2 3.96997 4 1.96997 8 1.96997H16C20 1.96997 22 3.96997 22 7.96997V12.97C22 16.97 20 18.97 16 18.97H15.5C15.19 18.97 14.89 19.12 14.7 19.37L13.2 21.37C12.54 22.25 11.46 22.25 10.8 21.37L9.29999 19.37C9.13999 19.15 8.78 18.97 8.5 18.97Z"
                                stroke="#f3f4f6"
                                strokeMiterlimit="10"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8 8.70001L6 10.7L8 12.7"
                                stroke="#FF9900"
                                strokeMiterlimit="10"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 8.70001L18 10.7L16 12.7"
                                stroke="#FF9900"
                                strokeMiterlimit="10"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M13 8.37L11 13.03"
                                stroke="#FF9900"
                                strokeMiterlimit="10"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <span className="text-xl">Montamos seu Chat</span>
                    </div>
                    <div className="flex justify-center space-x-8 p-6 border border-white/20 bg-gradient-to-r from-chobOrange-900/50 rounded-lg to-chobOrange-950/50">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6 12H18"
                                stroke="#E6EAEE"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18 4H14C12 4 11 5 11 7V17C11 19 12 20 14 20H18"
                                stroke="#E6EAEE"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z"
                                stroke="#FF9900"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M20 6C21.1046 6 22 5.10457 22 4C22 2.89543 21.1046 2 20 2C18.8954 2 18 2.89543 18 4C18 5.10457 18.8954 6 20 6Z"
                                stroke="#FF9900"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M20 22C21.1046 22 22 21.1046 22 20C22 18.8954 21.1046 18 20 18C18.8954 18 18 18.8954 18 20C18 21.1046 18.8954 22 20 22Z"
                                stroke="#FF9900"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z"
                                stroke="#E6EAEE"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <span className="text-xl">Você integra ao seu site</span>
                    </div>
                    <div className="flex justify-center space-x-8 p-6 border border-white/20 bg-gradient-to-r from-chobOrange-900/50 rounded-lg to-chobOrange-950/50">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.6299 14.75C21.6299 15.64 21.3799 16.48 20.9399 17.2C20.1199 18.58 18.6099 19.5 16.8799 19.5C15.1499 19.5 13.6399 18.57 12.8199 17.2C12.3799 16.49 12.1299 15.64 12.1299 14.75C12.1299 12.13 14.2599 10 16.8799 10C19.4999 10 21.6299 12.13 21.6299 14.75Z"
                                stroke="#FF9900"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18.6599 14.73H15.1099"
                                stroke="#FF9900"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16.8799 13V16.55"
                                stroke="#FF9900"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M20.6901 4.02002V6.23999C20.6901 7.04999 20.1801 8.06001 19.6801 8.57001L17.9201 10.12C17.5901 10.04 17.2401 10 16.8801 10C14.2601 10 12.1301 12.13 12.1301 14.75C12.1301 15.64 12.3801 16.48 12.8201 17.2C13.1901 17.82 13.7001 18.35 14.3201 18.73V19.07C14.3201 19.68 13.9201 20.49 13.4101 20.79L12.0001 21.7C10.6901 22.51 8.87006 21.6 8.87006 19.98V14.63C8.87006 13.92 8.46006 13.01 8.06006 12.51L4.22006 8.46997C3.72006 7.95997 3.31006 7.05001 3.31006 6.45001V4.12C3.31006 2.91 4.22006 2 5.33006 2H18.6701C19.7801 2 20.6901 2.91002 20.6901 4.02002Z"
                                stroke="#E6EAEE"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <span className="text-xl">Os Leads são gerados</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withAnimation(FeatureSection, 'fade-up', 0.1)
