import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Movies", href: "/movies" },
  { name: "Login", href: "/login" },
  { name: "Signup", href: "/signup" },
  { name: "logout", href: "/logout" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const id = localStorage.getItem("id");

  return (
    <Disclosure as="nav" className="z-50 bg-gray-900 fixed top-0 w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center justify-center sm:justify-start">
                <img
                  className="h-8 w-auto mr-4"
                  src="https://cdn-icons-png.flaticon.com/128/4221/4221484.png"
                  alt="Your Company"
                />
                <div className="hidden md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => {
                      if ((index === 2 || index === 3) && id !== null) {
                        return null;
                      }
                      if(index === 4 && id === null){
                        return null;
                      }
                      return (
                        <button
                          key={item.name}
                          onClick={() => {
                            navigate(item.href);
                          }}
                          className={
                            "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                          }
                        >
                          {item.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex items-center rounded-full focus:outline-none focus:ring-2 focus:ring-white">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={React.Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={
                              "block px-4 py-2 text-sm text-gray-700 " +
                              (active ? "bg-gray-100" : "")
                            }
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={
                              "block px-4 py-2 text-sm text-gray-700 " +
                              (active ? "bg-gray-100" : "")
                            }
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={
                              "block px-4 py-2 text-sm text-gray-700 " +
                              (active ? "bg-gray-100" : "")
                            }
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.href);
                  }}
                  className={
                    "block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  }
                >
                  {item.name}
                </button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
