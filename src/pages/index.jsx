import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Team from '@/components/Team'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nous - Connecting global investors.</title>
        <meta
          name="description"
          content="The blockchain platform that helps you get your money right. Browse, invest, and trade - all in one."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />

        <Team/>
      </main>
      <Footer />
    </>
  )
}
