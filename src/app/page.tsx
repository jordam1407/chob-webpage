import BioInsta from '@/components/layout/BioInsta/BioInsta'
import DashSection from '@/components/layout/DashSection/DashSection'
import FeatureSection from '@/components/layout/FeatureSection/FeatureSection'
import HeroSection from '@/components/layout/HeroSection'
import IntegraSection from '@/components/layout/IntegraSection/IntegraSection'

export default function Home() {
    return (
        <>
            <HeroSection />
            <FeatureSection />
            <DashSection />
            <IntegraSection />
            <BioInsta />
        </>
    )
}
