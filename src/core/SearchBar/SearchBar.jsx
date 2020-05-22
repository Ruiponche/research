import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { searchPostersRequest } from 'connection/redux/actions'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import { useLocation } from "react-router-dom"
import './style.css'

const SearchBar = ({ searchPostersRequest, autosearch, pagesLoaded }) => {
  let history = useHistory()
  var location = useLocation()
  var searchParams = new URLSearchParams(location.search);
  const posters = searchParams.get('posters')
  const page = parseInt(searchParams.get('page')) || 1


  const offset = (page - 1) * 32
  const formik = useFormik({
    initialValues: {
      searchTerm: posters || ''
    },
    onSubmit: ({ searchTerm, pagesLoaded }) => {
      const newPage = searchTerm !== posters ? 1 : page
      searchPostersRequest({ searchTerm, offset, limit: '32', page: newPage })
      history.push(`/search?posters=${searchTerm}&page=${newPage}`)
    },
  });

  useEffect(() => {
    if (autosearch && !pagesLoaded.includes(page)) {
      searchPostersRequest({ searchTerm: posters, offset, limit: '32', page })
    }
  }, [autosearch, offset, posters, searchPostersRequest, page, pagesLoaded])

  return (
    <div className='search-bar'>
      <form onSubmit={formik.handleSubmit}>
        <input
          required
          id="searchTerm"
          name="searchTerm"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.searchTerm}
          placeholder='search...'
        />
        <button type="submit">🔍</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ posters: { pagesLoaded } }) => { return { pagesLoaded } }

const mapDispatchToProps = { searchPostersRequest }

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)