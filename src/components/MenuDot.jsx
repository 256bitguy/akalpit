'use client'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { ChevronDown, ChevronDownCircle, ChevronsUpDownIcon } from 'lucide-react'

const people = [
  {
    id: 1,
    name: 'Poetry',
  },
  {
    id: 2,
    name: 'Essays',
  },
  {
    id: 3,
    name: 'Thoughts',
  },
  {
    id: 4,
    name: 'Stories',
  },
  {
    id: 5,
    name: 'songs',
  },
  {
    id: 6,
    name: 'reels',
  },
  {
    id: 7,
    name: 'debate',
  },
  {
    id: 8,
    name: 'news',
  },
  {
    id: 9,
    name: 'voting',
  },
  
]

function MenuDot() {
  const [selected, setSelected] = useState(people[3])

  return (
    <Listbox value={selected} onChange={setSelected}>
     
      <div className="relative z-10">
        <ListboxButton className="relative w-full cursor-default   bg-white py-1  pr-10 text-left text-gray-900   ring-inset        sm:text-sm sm:leading-6">
          <span className="flex items-center">
            <span className=" ml-2 block truncate font-semibold">{selected.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
             <ChevronsUpDownIcon/>
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-gray-600 data-[focus]:text-white"
            >
              <div className="flex items-right">
                 
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {person.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}
export default MenuDot