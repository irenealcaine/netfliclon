import React from 'react'
import PersonDetails from './PersonDetails'

const Person = ({ id }) => {
  return (
    <div>
      <PersonDetails id={id} />
    </div>
  )
}

export default Person
