/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="absolute z-10 w-full mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:justify-start">
                <div className="flex-shrink-0 cursor-pointer flex items-center">
                  <Link href="/">
                    <img
                      className="block h-10 w-auto"
                      src="/images/logo-noname.svg"
                      alt="Joyeux Nutrition"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex font-lato sm:space-x-8">
                  <Link href="/">
                    <a className="border-white text-white inline-flex items-center px-1 py-1 border-b-2 text-md font-medium">
                      Home
                    </a>
                  </Link>

                  <Link href="/testimonials">
                    <a className="border-transparent text-white hover:border-white inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium">
                      Testimonials
                    </a>
                  </Link>

                  <Link href="/pricing">
                    <a className="border-transparent text-white hover:border-white inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium">
                      Pricing
                    </a>
                  </Link>

                  <Link href="/contact">
                    <a className="border-transparent text-white hover:border-white inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium">
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
              <div className="right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className="hidden sm:flex items-center gap-1 bg-white text-black shadow-md py-1 px-6 lg:text-md font-semibold mr-2 rounded-md hover:shadow-xl active:scale-90 transition duration-150">
                  <FiLogIn />
                  Login
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden absolute z-10">
            <div className="pt-2 pb-4 space-y-1 font-lato">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-white" */}
              <Link href="/">
                <a className="border-transparent text-white hover:border-l-4 hover:border-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                  Home
                </a>
              </Link>

              <Link href="/trainers">
                <a className="border-transparent text-white hover:border-l-4 hover:border-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                  Our Trainers
                </a>
              </Link>

              <Link href="/workouts">
                <a className="border-transparent text-white hover:border-l-4 hover:border-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                  Workouts
                </a>
              </Link>

              <Link href="/contact">
                <a className="border-transparent text-white hover:border-l-4 hover:border-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                  Contact
                </a>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
