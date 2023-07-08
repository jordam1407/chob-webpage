import Cta from '@/components/layout/HeroSection/Cta'
import HeroTexts from '@/components/layout/HeroSection/HeroTexts'

function HeroSection() {
    return (
        <section className="bg-chobDark sm:py-16 px-4 overflow-x-hidden overflow-y-auto">
            <div className="bg-chobDark">
                <div className="container relative z-10 mx-auto flex flex-col items-center md:justify-center sm:pt-24 pt-16 md:pt-0">
                    <HeroTexts />
                    <Cta />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
