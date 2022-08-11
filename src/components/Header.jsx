import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import {AcademicCapIcon, ClipboardListIcon, ShoppingCartIcon, SparklesIcon, UsersIcon, AnnotationIcon} from '@heroicons/react/solid'

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
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
          <Popover.Overlay className="fixed inset-0 bg-blue-100/20 backdrop-blur-md" />
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
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-lg bg-white p-8 text-lg tracking-tight font-regular font-display text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features"><div className="flex flex-row"><SparklesIcon className="h-8 w-8 text-blue-600"/><span className="text-xl font-light px-4 align-center">Features</span></div></MobileNavLink>
            <MobileNavLink href="#features"><div className="flex flex-row"><ShoppingCartIcon className="h-8 w-8 text-blue-600"/><span className="text-xl px-4 align-center">Products</span></div></MobileNavLink>
            <MobileNavLink href="#features"><div className="flex flex-row"><ClipboardListIcon className="h-8 w-8 text-blue-600"/><span className="text-xl px-4 truncatealign-center">Apply for listing</span></div></MobileNavLink>
            <MobileNavLink href="#features"><div className="flex flex-row"><AnnotationIcon className="h-8 w-8 text-blue-600"/><span className="text-xl px-4 align-center">Testimonials</span></div></MobileNavLink>
            <MobileNavLink href="#features"><div className="flex flex-row"><UsersIcon className="h-8 w-8 text-blue-600"/><span className="text-xl px-4 align-center">Team</span></div></MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <Link href="https://www.nous.fund" className="bg-gradient-to-bl from-blue-700 to-blue-900 rounded-lg mx-8 text-center text-xl font-display mt-8 text-white py-2 px-3 my-4 hover:bg-blue-600">Launch marketplace</Link>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="py-4">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex  md:gap-x-6">
              <NavLink href="#features"><span className="font-display text-lg">Features</span></NavLink>
              <NavLink href="#products"><span className="font-display text-lg">Products</span></NavLink>
              <NavLink href="#pricing"><div className="flex flex-row"><h1 className="bg-blue-700 text-md font-semibold text-white py-1 px-2 rounded-lg mr-2">New</h1><span className="font-display text-lg">Apply for listing</span></div></NavLink>
              <NavLink href="#team"><span className="font-display text-lg">Team</span></NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <a target="_blank" rel="noreferrer" className="font-display text-lg" href="https://medium.com/@nous.systems/nous-initial-coin-offering-b36532febbf5">$NOUS Token</a>
            </div>
            <a href="https://www.nous.fund" target="_blank" rel="noreferrer" className="bg-gradient-to-bl from-blue-700 to-blue-900 rounded-lg text-xl font-display text-white py-1 sm:py-2 px-3 hover:bg-blue-600">
              
                Connect <span className="hidden lg:inline">wallet</span>
              
            </a>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
