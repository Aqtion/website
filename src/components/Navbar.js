import React from 'react';
import {Link} from "react-router-dom"

const tabs = [
  {name: 'Home', href: '', current:true, left:false},
  {name: 'Resume', href: '/Resume', current:false, left:false},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  return (
    <nav>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              </div>
              <div className="flex flex-1 items-center justify-right sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 navbar-start">
                    
                    {tabs.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          'text-white hover:text-shiny',
                          'px-3 py-2 rounded-md text-2xl font-bold'
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                    
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          </nav>
          
      )}
export default Navbar;