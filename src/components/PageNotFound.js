import React from 'react'
import Asset from "../components/Asset"
import NoResults from "../assets/no-results.png"

const PageNotFound = () => {
  return (
    <div>
        <Asset src={NoResults} message="Oops.. This page doesn't seem to exist!" />
    </div>
  )
}

export default PageNotFound