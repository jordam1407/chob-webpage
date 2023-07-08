import CompSection from '@/components/layout/CompSection/CompSection'
import DashSection from '@/components/layout/DashSection/DashSection'
import FeatureSection from '@/components/layout/FeatureSection/FeatureSection'
import HeroSection from '@/components/layout/HeroSection'

export default function Home() {
    return (
        <>
            <HeroSection />
            <FeatureSection />
            <DashSection />
            <CompSection />
        </>
    )
}
