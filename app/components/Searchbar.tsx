import { Search } from 'lucide-react'
import React from 'react'

type SearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Searchbar = ({search, setSearch}: SearchProps) => {



  return (
    <div className="relative w-full max-w-md">
            <Search className="text-gray-600 absolute right-3 w-5 h-5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              type="text"
              placeholder="Buscá tus productos"
              className="w-full border-1 border-gray-300 h-12 rounded-lg focus:outline-none focus:ring-0 p-3 text-gray-600 pr-10"
            />
          </div>
  )
}

export default Searchbar