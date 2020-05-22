import React from 'react'
import {
  Link
} from "react-router-dom"
import { useLocation } from 'react-router-dom'
import SearchBar from 'core/SearchBar/SearchBar'
import './style.scss'

export default function NavigationBar() {
  let location = useLocation();
  const isRoot = location.pathname === '/'
  const isSearch = location.pathname === '/search'
  return (
    <nav className="topnav">
      {!isRoot &&
        <Link to={{
          pathname: '/',
          search: location.search
        }} >
          <h1>
            <span className='title-1'>Re</span>
            <span className='title-2'>search</span>
          </h1>
        </Link>
      }
      {!isRoot && <SearchBar autosearch={isSearch} />}
    </nav>
  )
}