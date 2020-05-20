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
  return (
    <nav class="topnav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {!isRoot && <SearchBar />}
    </nav>
  )
}