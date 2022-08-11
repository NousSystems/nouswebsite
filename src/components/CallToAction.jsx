import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-hero py-72"
    >
       <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      /> 
      <Container className="relative">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-5xl text-semibold tracking-tight text-white sm:text-7xl">
            Invest with Nous.
          </h2>
          <p className="mt-4 text-xl sm:text-2xl tracking-tight text-white opacity-80">
            Browse opportunities, create your investment and invest from as little as $100.
          </p>
          <Button href="https://www.nous.fund"  className="mt-10 text-xl bg-transparent border-white border-2 tracking-tight my-2 px-8 rounded-full">
            Start investing
          </Button>
        </div>
      </Container>
    </section>
  )
}
