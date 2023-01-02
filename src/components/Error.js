import React from 'react'
import PropTypes from 'prop-types'

function Error ({ msj }) {
  return (
    <p className='p-2 rounded bg-danger text-white'>{msj}</p>
  )
}

Error.propTypes = {
  msj: PropTypes.string.isRequired
}

export default Error
