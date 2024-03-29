/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
//import { Popover, Transition } from '@headlessui/react'
// import {
//   BookmarkAltIcon,
//   CalendarIcon,
//   ChartBarIcon,
//   CursorClickIcon,
//   MenuIcon,
//   PhoneIcon,
//   PlayIcon,
//   RefreshIcon,
//   ShieldCheckIcon,
//   SupportIcon,
//   ViewGridIcon,
//   XIcon
// } from '@heroicons/react/outline'
//import { ChevronDownIcon } from '@heroicons/react/solid'

// const features = [
//   {
//     name: 'Analytics',
//     href: '#',
//     description: 'Get a better understanding of where your traffic is coming from.',
//     icon: ChartBarIcon
//   },
//   {
//     name: 'Engagement',
//     href: '#',
//     description: 'Speak directly to your customers in a more meaningful way.',
//     icon: CursorClickIcon
//   },
//   { name: 'Security', href: '#', description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon },
//   {
//     name: 'Integrations',
//     href: '#',
//     description: "Connect with third-party tools that you're already using.",
//     icon: ViewGridIcon
//   },
//   {
//     name: 'Automations',
//     href: '#',
//     description: 'Build strategic funnels that will drive your customers to convert',
//     icon: RefreshIcon
//   }
// ]
// const callsToAction = [
//   { name: 'Watch Demo', href: '#', icon: PlayIcon },
//   { name: 'Contact Sales', href: '#', icon: PhoneIcon }
// ]
// const resources = [
//   {
//     name: 'Help Center',
//     description: 'Get all of your questions answered in our forums or contact support.',
//     href: '#',
//     icon: SupportIcon
//   },
//   {
//     name: 'Guides',
//     description: 'Learn how to maximize our platform to get the most out of it.',
//     href: '#',
//     icon: BookmarkAltIcon
//   },
//   {
//     name: 'Events',
//     description: 'See what meet-ups and other events we might be planning near you.',
//     href: '#',
//     icon: CalendarIcon
//   },
//   { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon }
// ]
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Connect() {
  return (
    <div className="relative bg-gray-50">
      <main>
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center">
          <div className="px-4 px-8">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 text-5xl">
              <span className="block">Let's Connect</span>{" "}
              <span className="block text-indigo-600 text-xl"></span>
            </h1>
            <p className=" text-left mt-3 max-w-md mx-auto text-lg text-gray-500 text-xl">
              <br />
            </p>
          </div>
        </div>
        {/* <div className="relative w-full h-64 h-72">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div> */}
      </main>
    </div>
  );
}
