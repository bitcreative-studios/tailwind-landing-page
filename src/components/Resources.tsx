import React from 'react'
import { Container } from '@/components/Container'
import Link from 'next/link'

const Resources = () => {
  return (
    <section id="resources" className="py-20">
      <Container className="">
        <div className="bg-white">
          <span className="text-base font-semibold uppercase tracking-wide text-teal-600">Knowledge is power</span>
          <h2 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">Latest Resources</h2>
        </div>
        <div className="flex flex-wrap pt-12">
          {/* Video */}
          <div className="mb-12 w-full px-4 lg:mb-0 lg:w-2/3">
            <h2 className="font-heading mb-12 mt-3 text-3xl font-bold ">Videos</h2>
            <img className="w-full rounded-lg object-cover" src="mockup-assets/images/gray-500-square.png" alt="" />
            <div className="h-64 w-3/4 bg-slate-400"></div>
            <div className="mt-5 space-y-4 text-sm">
              <h3 className="text-xl font-medium">How to grow your bussiness with 10$</h3>
              <div className="flex items-center space-x-4">
                <span className="uppercase tracking-wider">video series</span>
                <span className="uppercase tracking-wider"></span>
                <span className="uppercase tracking-wider text-teal-500">episode 01</span>
              </div>
            </div>
          </div>
          {/* Articles */}
          <div className="w-full px-4 lg:w-1/3">
            <div className="lg:ml-auto">
              <h2 className="font-heading mb-12 mt-3 text-3xl font-bold ">Articles</h2>
              <div className="mb-6 flex">
                <div className="max-w-sm">
                  <span className="font-heading mb-2 -mt-1 text-lg font-medium text-teal-500">
                    Commerce & Sales Channels
                  </span>
                  <Link href="#">
                    <a className="hover:underline">
                      <h3 className="text-xl font-bold text-primary-900">
                        Which eCommerce Platform Is Best for Your Small Business?
                      </h3>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="mb-6 flex">
                <div className="max-w-sm">
                  <span className="font-heading mb-2 -mt-1 text-lg font-medium text-teal-500">
                    Commerce & Sales Channels
                  </span>
                  <Link href="#">
                    <a className="hover:underline">
                      <h3 className="text-xl font-bold text-primary-900">
                        Rethinking Your Seller Fulfilled Prime [SFP] Strategy
                      </h3>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="mb-6 flex">
                <div className="max-w-sm">
                  <span className="font-heading mb-2 -mt-1 text-lg font-medium text-teal-500">Data & Technology</span>
                  <Link href="#">
                    <a className="hover:underline">
                      <h3 className="text-xl font-bold text-primary-900">
                        Shopping Trends for a Socially Distanced Summer
                      </h3>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="mb-6 flex">
                <div className="max-w-sm">
                  <span className="font-heading mb-2 -mt-1 text-lg font-medium text-teal-500">
                    Demand & Inventory Planning
                  </span>
                  <Link href="#">
                    <a className="hover:underline">
                      <h3 className="text-xl font-bold text-primary-900">Top 3 Trends of Today’s Supply Chain</h3>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Resources
