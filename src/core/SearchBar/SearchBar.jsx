import React, { useState } from 'react'
import { connect } from 'react-redux'
import { searchPostersRequest } from 'connection/redux/actions'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'

const SearchBar = ({ searchPostersRequest }) => {
  let history = useHistory()
  const formik = useFormik({
    initialValues: {
      searchTerm: ''
    },
    onSubmit: ({ searchTerm }) => {
      searchPostersRequest({ searchTerm, offset: '0', limit: '240' })
      history.push(`/search?posters=${searchTerm}&page=1`)
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="searchTerm"
        name="searchTerm"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.searchTerm}
        placeholder='search...'
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const mapDispatchToProps = { searchPostersRequest }

export default connect(null, mapDispatchToProps)(SearchBar)