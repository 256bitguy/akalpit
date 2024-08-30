import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import MenuDot from './MenuDot'
import { Outlet, useNavigate,Link } from 'react-router-dom'
import DefaultAccordion from '../libs/atoms/DefaultAccordion'
import Dialogs from './Dialog'
import { useState } from 'react'
import { AccordionAka, DrawerAka, DrawerButtonAka, DrawerDialogAka } from '../UI'
const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [abcd,setAbcd]=useState(true);
  const navigate=useNavigate()
  return (
    <>
     
      <div className="h-full">
        <Disclosure as="nav" className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    alt="Your Company"
                    src="akalpit.png"
                    className="h-8 w-8"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>

                   
                  
                </div>
              </div>
              <div className="-mr-2 flex md:hidden"  >
                {/* Mobile menu button */} 
                
      <DrawerAka>
         
        <DrawerButtonAka name="Show Drawer" className="button-class bg-white" >
      <Bars3Icon aria-hidden="true" className='block h-6 w-6'/>
      </DrawerButtonAka>
       
    <DrawerDialogAka className="bg-white flex flex-col justify-between">
     <div  >
           
     <AccordionAka title="home" className="rounded-lg mt-10"/>
      <AccordionAka title="home" className="rounded-lg mt-10"/>
      <AccordionAka title="home" className="rounded-lg mt-10"/>
      <AccordionAka title="home" className="rounded-lg mt-10"/>
     </div>
      <div className='flex flex-col gap-y-5'>
                <Link to='/login'>  <div className='mx-5 text-md rounded-md text-center bg-gray-700 text-white'>
           <button
              className='text-md m-2 font-semibold'
              onClick={()=> console.log("sdfagfdhg")}
            >
             Login
            </button>
          </div></Link>
          <div className='mx-5 text-md rounded-md text-center bg-gray-700 text-white'>
            <button
              className='text-md m-2 font-semibold'
              onClick={()=> console.log("sdfagfdhg")}
            >
             Sign Up
            </button>
          </div>
                </div>
    </DrawerDialogAka>
  </DrawerAka>
              </div>
            </div>
          </div>

         
        </Disclosure>
                     
        <header className="bg-white shadow">
        <div className="flex justify-between items-center max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
          <div className='w-2xl text-md'>
            <MenuDot />
          </div>
          <div className='mx-5 text-md rounded-md bg-gray-700 text-white'>
            <button
              className='text-md m-2 font-semibold'
              onClick={()=>navigate('/test')}
            >
              All channels
            </button>
          </div>
          </div>
        </header>

          <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"> <Outlet /></div>
        </main>  


      </div>
    </>
  )
}

