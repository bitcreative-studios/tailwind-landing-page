import React, { Fragment } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { PhoneIcon } from '@heroicons/react/outline'
import { Popover, Transition } from '@headlessui/react'

const MobileMenu = () => {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': open,
                })}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': !open,
                })}
              />
            </svg>
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="ul"
                className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
              >
                <li>
                  <Link href="#features">
                    <a className="block w-full" onClick={() => close()}>
                      Features
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials">
                    <a className="block w-full" onClick={() => close()}>
                      Testimonials
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#pricing">
                    <a className="block w-full" onClick={() => close()}>
                      Pricing
                    </a>
                  </Link>
                </li>
                <li className="border-t border-slate-300/40 pt-4">
                  <Link href="/login">
                    <a className="block w-full">Sign in</a>
                  </Link>
                </li>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

const Header = () => {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 text-sm">
          <div className="flex items-center justify-between">
            <Link href="#">
              <a href="">
                <span className="sr-only">Acme Accounting</span>
                <Logo className="h-7 w-auto md:h-10" />
              </a>
            </Link>
            <div className="hidden space-x-8 md:flex">
              <ul className="flex items-center space-x-6 text-lg font-medium">
                <li>
                  <Link href="#about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="#services">
                    <a>Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="#resources">
                    <a>Resources</a>
                  </Link>
                </li>
                <li>
                  <Link href="#contact">
                    <a>Get in touch</a>
                  </Link>
                </li>
              </ul>
              <Link href="#">
                <a className="inline-flex items-center whitespace-nowrap border border-transparent bg-slate-100 px-6 py-3 text-lg font-medium hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  <PhoneIcon className="-ml-1 mr-3 h-6 w-6 text-teal-500" aria-hidden="true" />
                  9548 215 458
                </a>
              </Link>
            </div>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
