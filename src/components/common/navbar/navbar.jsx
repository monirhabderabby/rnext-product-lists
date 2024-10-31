import React from "react";
import logo from "../../../assets/logo.svg";
import { icons } from "../../ui/icon";
import Ads from "./ads";

const Navbar = () => {
  return (
    <header className="relative bg-white">
      <Ads />

      <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="flex h-16 items-center">
            {/* Mobile menu toggle, controls the 'mobileMenuOpen' state. */}
            <button
              type="button"
              class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open menu</span>
              {icons.menu}
            </button>

            <div class="ml-4 flex lg:ml-0">
              <a href="#">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto" src={logo} alt="logo" />
              </a>
            </div>

            <div class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="flex h-full space-x-8">
                <div class="flex">
                  <div class="relative flex">
                    <button
                      type="button"
                      class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                      aria-expanded="false"
                    >
                      Women
                    </button>
                  </div>
                </div>
                <div class="flex">
                  <div class="relative flex">
                    <button
                      type="button"
                      class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                      aria-expanded="false"
                    >
                      Men
                    </button>
                  </div>
                </div>

                <a
                  href="#"
                  class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Company
                </a>
                <a
                  href="#"
                  class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Stores
                </a>
              </div>
            </div>

            <div class="ml-auto flex items-center">
              <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a
                  href="#"
                  class="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Sign in
                </a>
                <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                <a
                  href="#"
                  class="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Create account
                </a>
              </div>

              <div class="hidden lg:ml-8 lg:flex">
                <a
                  href="#"
                  class="flex items-center text-gray-700 hover:text-gray-800"
                >
                  <img
                    src="https://tailwindui.com/img/flags/flag-canada.svg"
                    alt=""
                    class="block h-auto w-5 flex-shrink-0"
                  />
                  <span class="ml-3 block text-sm font-medium">CAD</span>
                  <span class="sr-only">, change currency</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
