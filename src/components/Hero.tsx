import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/outline'
import { Container } from '@/components/Container'

const Hero = () => {
  return (
    <section>
      <div className="lg:relative">
        <Container className="w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Accounting</span>{' '}
              <span className="block text-teal-500 xl:inline">made simple </span>
              <span className="block xl:inline">for small businesses</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div>
                <Link href="/consultation">
                  <a
                    href="#"
                    className="inline-flex w-full items-center justify-center space-x-2 border border-transparent bg-primary-900 px-8 py-3 text-base font-medium text-white hover:bg-teal-500 md:py-4 md:px-10 md:text-lg"
                  >
                    <span>Free Consultation</span>
                    <ArrowRightIcon className="h-6 w-auto" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4140&q=80"
            alt=""
          />
          <div className="clip-br absolute bg-teal-500 xl:h-64 xl:w-64" />
          <div className="clip-tl absolute bottom-0 right-0 bg-white xl:h-64 xl:w-64" />
        </div>
      </div>
    </section>
  )
}

export default Hero
