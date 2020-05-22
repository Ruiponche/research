import React from 'react'
import SearchBar from 'core/SearchBar/SearchBar'


export default function WelcomePage() {

  return (<div className='welcome-page'>
    <h1>
      <span className='title-1'>Re</span>
      <span className='title-2'>search</span>
    </h1>
    <SearchBar />
  </div>)
}