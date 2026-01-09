import React from 'react'
import Input from './Input'
import { SearchIcon } from 'lucide-react'

const Search = () => {
  return (
    <div className='w-full'>
      <Input  className='rounded-full' icon={<SearchIcon strokeWidth={1}/>} placeholder='Search here...' ></Input>
    </div>
  )
}

export default Search
