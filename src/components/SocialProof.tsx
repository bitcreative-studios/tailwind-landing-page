import React from 'react'
import Image from 'next/image'
import { Container } from './Container'
import { ExternalLinkIcon } from '@heroicons/react/outline'

const SocialProof = () => {
  return (
    <section id="about" className="py-20 lg:py-48">
      <Container>
        <div className="grid lg:grid-cols-2">
          {/* Text Content */}
          <div className="flex items-center justify-center">
            <div>
              <h2 className="text-base font-semibold uppercase tracking-wider text-secondary-600">
                Award winning support
              </h2>
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-primary-900 sm:text-5xl">
                We’re here to help
              </p>
              <p className="mt-3 text-lg text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
                scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
                tincidunt duis.
              </p>
            </div>
          </div>
          {/* Image Grid */}
          <div className="mt-8 grid grid-cols-2 gap-4 lg:mt-0">
            <div className="grid gap-y-4">
              <div className="relative">
                <Image
                  className="h-96 w-full object-cover"
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4170&q=80"
                  alt=""
                />
                <div className="clip-bl absolute right-0 top-0 hidden h-14 w-14 bg-white sm:block"></div>
              </div>
              <div className="flex h-80 w-full items-center justify-center bg-primary-900 ">
                <div className="flex flex-col space-y-2 p-3">
                  <h3 className="text-5xl font-extrabold text-white">12 years</h3>
                  <p className="text-xl font-bold text-teal-500">of experience in accounting</p>
                </div>
              </div>
            </div>
            <div className="grid gap-y-4">
              <div className="flex h-80 w-full items-center justify-center bg-teal-500 ">
                <div className="flex flex-col space-y-2 p-3">
                  <h3 className="text-5xl font-extrabold text-white">2000</h3>
                  <p className="text-xl font-bold text-primary-900">satisfied clients</p>
                </div>
              </div>
              <div className="relative">
                <Image
                  className="h-96 w-full object-cover"
                  src="https://images.unsplash.com/photo-1590649681928-4b179f773bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4170&q=80"
                  alt=""
                />
                <div className="clip-tl absolute right-0 bottom-0 hidden h-14 w-14 bg-white sm:block"></div>
              </div>
            </div>
            {/*<div>*/}
            {/*  <div className="h-80 w-full bg-teal-500"></div>*/}
            {/*  <div className="w-full p-4">*/}
            {/*    <img*/}
            {/*      className="h-96 w-full rounded-lg object-cover"*/}
            {/*      src="mockup-assets/images/gray-500-vertical.png"*/}
            {/*      alt=""*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SocialProof
