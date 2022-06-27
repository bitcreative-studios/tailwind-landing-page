/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, PencilAltIcon, TrashIcon, UsersIcon } from '@heroicons/react/outline'
import { Container } from '@/components/Container'
import React from 'react'

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: 'What do you call someone with no body and no nose?',
    answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 3,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 4,
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  // More questions...
]

const services = [
  {
    name: 'Tax Preparation',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: InboxIcon,
  },
  {
    name: 'Book Keeping',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: UsersIcon,
  },
  {
    name: 'Payroll',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: TrashIcon,
  },
  {
    name: 'Business Consulting',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: PencilAltIcon,
  },
]

const LeadingContent = () => (
  <div className="relative bg-primary-800">
    {/* Image Container*/}
    <div className="-top-24 h-56 bg-primary-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 lg:min-h-[40rem]">
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2301&q=80"
        alt=""
      />
    </div>
    {/* Text Content */}
    <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
        <h2 className="text-base font-semibold uppercase tracking-wider text-secondary-400">Award winning support</h2>
        <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
          Deliver what your customers want every time
        </h2>
        <p className="mt-6 text-lg text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nihil ea rerum ipsa. Nostrum consectetur
          sequi culpa doloribus omnis, molestiae esse placeat, exercitationem magnam quod molestias quia aspernatur
          deserunt voluptatibus.
        </p>
        <div className="mt-8 overflow-hidden">
          <dl className="-mx-8 -mt-8 flex flex-wrap">
            <div className="flex flex-col px-8 pt-8">
              <dt className="order-2 text-base font-medium text-slate-400">Delivery</dt>
              <dd className="order-1 text-2xl font-extrabold text-teal-600 sm:text-3xl">24/7</dd>
            </div>
            <div className="flex flex-col px-8 pt-8">
              <dt className="order-2 text-base font-medium text-slate-400">Pepperoni</dt>
              <dd className="order-1 text-2xl font-extrabold text-teal-600 sm:text-3xl">99.9%</dd>
            </div>
            <div className="flex flex-col px-8 pt-8">
              <dt className="order-2 text-base font-medium text-slate-400">Calories</dt>
              <dd className="order-1 text-2xl font-extrabold text-teal-600 sm:text-3xl">100k+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
)

const ServicesGrid = () => (
  <div className="bg-slate-200">
    <Container className="grid py-8 md:grid-cols-2 lg:py-12">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
        <span className="block">Ready to dive in?</span>
        <span className="block">Start your free trial today.</span>
      </h2>
      <div className="mt-8 space-y-6 text-lg md:mt-0">
        <p>
          Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas
          malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.
        </p>
        <p>
          Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque
          facilisis. Nulla imperdiet sit amet magna.
        </p>
      </div>
    </Container>
    <Container className=" py-16">
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
        {services.map(feature => (
          <div key={feature.name} className="group relative bg-white px-6 py-10">
            <div className="mt-6">
              <h3 className="text-lg font-medium text-primary-900">{feature.name}</h3>
              <p className="mt-2 text-base text-primary-800">{feature.description}</p>
            </div>
            <div className="clip-br absolute top-0 left-0 h-14 w-14 bg-primary-800 group-hover:bg-teal-500"></div>
            <div className="clip-tl absolute bottom-0 right-0 h-14 w-14 bg-slate-200"></div>
          </div>
        ))}
      </div>
    </Container>
  </div>
)

const Services = () => (
  <section id="services" className="relative bg-primary-800 lg:mt-24">
    <LeadingContent />
    <Container className=" py-16 sm:pt-20 sm:pb-24 lg:pt-28">
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
        {faqs.map(feature => (
          <div key={feature.id}>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-white">{feature.question}</h3>
              <p className="mt-2 text-base text-slate-50">{feature.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
    <ServicesGrid />
  </section>
)
export default Services
