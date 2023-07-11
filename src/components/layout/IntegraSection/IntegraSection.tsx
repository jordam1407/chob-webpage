import { withAnimation } from '@/common/hocs'
import InstaIcon from '@/components/icons/InstaIcon'
import ShopifyIcon from '@/components/icons/ShopifyIcon'
import WebFlowIcon from '@/components/icons/WebFlowIcon'
import WebIcon from '@/components/icons/WebIcon'
import WixIcon from '@/components/icons/WixIcon'
import WordPressIcon from '@/components/icons/WordPressIcon'

function IntegraSection() {
    return (
        <section className="bg-chobDark py-12">
            <div className="container px-4 mx-auto">
                <div className="max-w-5xl mx-auto md:text-center flex flex-col space-y-10">
                    <h2 className="text-2xl mr-2 md:text-4xl font-bold tracking-wide text-gray-100">
                        Integração simples ao seu site ou Instagram
                    </h2>
                    <div className="flex flex-wrap md:space-x-16 mx-auto justify-between w-full md:w-fit">
                        <WebIcon />
                        <WordPressIcon />
                        <WixIcon />
                        <ShopifyIcon />
                        <InstaIcon />
                        <WebFlowIcon />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withAnimation(IntegraSection, 'fade-up')
