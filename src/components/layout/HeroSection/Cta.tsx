import { withAnimation } from '@/common/hocs'

function Cta() {
    return (
        <div className="flex items-center justify-end space-x-4 relative z-10">
            <a
                className="flex sm:py-3 sm:px-6 py-2 px-4 leading-5 text-gray-100 bg-gradient-to-r from-chobOrange-600/50 to-chobOrange-700/50 rounded-lg border border-chobOrange-600 hover:from-chobOrange-700/50 hover:to-chobOrange-800/50"
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
            <a
                className="flex sm:py-3 sm:px-6 py-2 px-4 leading-5 text-gray-100 border border-white/20 hover:bg-gradient-to-r hover:from-chobOrange-900/50 rounded-lg hover:to-chobOrange-950/50"
                href="/contrate-agora">
                <span className="my-auto">Teste Grátis</span>
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
    )
}

export default withAnimation(Cta, 'fade-in', 0.1)
