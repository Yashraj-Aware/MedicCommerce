import React, { useState,useEffect} from 'react'
import {  Disclosure } from '@headlessui/react'
import {  MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import {  useDispatch, useSelector } from 'react-redux'
import { filterCategory } from '../CategoriesSlicer'
import axios from 'axios' 




const CategoriesList = () => {

  const [checked, setChecked] = useState([])
  const [value, setValue] = useState("false")
  const [products, setProducts] = useState([])

    const dispatch = useDispatch()
    const data = useSelector(state => state.getCategories)

    useEffect(() => {
      dispatch(filterCategory())
    }, [dispatch])

  



const handleFilter = (value, id) => {
  // setValue(value)
  // console.log(value.substring(16))
  console.log(value, id);
  let all = [...checked]

  if(value)
  {
    all.push(id.substring(16))
  }
   else
  {
    all = all.filter((c) => c !== id )
  }

  setChecked(all)
}

    
  return (


    <div className='px-4 sm:px-6 lg:px-8'>
        {data.isLoading ? <h3>Loading.....</h3>: data.data.map((section) => (

                      <Disclosure as="div" key={section.catId} className="border mb-5 border-gray-200 px-4 py-6">
                        {({open}) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.catName}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            {console.log(checked, null, 4)}
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options && section.options.map((option, optionIdx) => (
                                  <div key={option.id} className="flex items-center">
                                    <input
                                      id={`filter-${section.catId}-${option._id}`}
                                      name={`${section.catId}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      value={value}
                                      onChange={(e) => handleFilter(e.target.checked, e.target.id)}
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
 
    </div>
  )
}

export default CategoriesList
